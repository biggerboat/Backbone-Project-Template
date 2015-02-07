define([
    'underscore',
    'backbone',
    'navigator-js',
    'view/BlueScreenView',
    'view/TestView',
    'model/TestModel',
    'command/OnTestModelChangedLogSomethingCommand',
    'command/ShowBlueScreenCommand',
    'util/SignalCommandMapper',
    'util/isDebug'
], function(_,
            Backbone,
            navigatorjs,
            BlueScreenView,
            TestView,
            TestModel,
            OnTestModelChangedLogSomethingCommand,
            ShowBlueScreenCommand,
            SignalCommandMapper,
            isDebug) {

    return Backbone.CommandRouter.extend({

        el: 'body',

        njs: null, //navigatorjs.Navigator
        stateViewMap: null, //navigatorjs.integration.StateViewMap
        stateUrlSyncer: null, //new navigatorjs.integration.StateUrlSyncer

        routes: {'': ''},

        signalCommandMap: {
            'showBlueScreenTrigger': ShowBlueScreenCommand
        },

        signalList: [
            'showBlueScreenResponse'
        ],

        stateViewMappings: {
            'TestView': {view: TestView, states: ['/'], depth: 0},
            'BlueScreenView': {view: BlueScreenView, states: ['/blue'], depth: 1}
        },

        initialize: function() {
            this.initializeNavigator();
            this.initializeModels();
            this.mapStates();
            this.bindCommands();

            if (isDebug) {
                this.addDebug();
            }

            var urlState = this.stateUrlSyncer.getUrlState();
            this.njs.start(urlState);

            this.injector.getInstance('testModel').set({name: 'Paul'});
        },

        initializeNavigator: function() {
            this.njs = new navigatorjs.Navigator();
            this.stateViewMap = new navigatorjs.integration.StateViewMap(this.njs, this.$el);
            this.stateUrlSyncer = new navigatorjs.integration.StateUrlSyncer(this.njs);
            this.stateUrlSyncer.usePushState();
            this.stateUrlSyncer.start();

            this.injector.map('njs').toValue(this.njs);
        },

        initializeModels: function() {
            this.injector.map('testModel').toSingleton(TestModel);
        },

        mapStates: function() {
            _.each(this.stateViewMappings, function(mapping) {
                console.log('ApplicationRouter -> ', mapping.states);
                this.addStateMapping(mapping.states, mapping.view);
            }, this);
        },

        addStateMapping: function(states, view) {
            this.stateViewMap.mapState(states).toView(view).withArguments({injector: this.injector});
        },

        /**
         * First performs (deprecated) classic command binding.
         * Then performs our prefered method: signal-command binding by convention.
         */
        bindCommands: function() {
            this.bindCommand(
                this.injector.getInstance('testModel'),
                'change',
                OnTestModelChangedLogSomethingCommand);

            SignalCommandMapper.extendInjector(this.injector);
            SignalCommandMapper.mapSignalsToCommands(this.signalCommandMap);
            SignalCommandMapper.mapSignals(this.signalList);
        },

        addDebug: function() {
            var debugConsole = new navigatorjs.features.DebugConsole(this.njs),
                $debugConsole = debugConsole.get$El(),
                cssPosition = {position: 'fixed', left: 10, bottom: 10};

            $debugConsole.css(cssPosition).appendTo('body');
        }
    });
});