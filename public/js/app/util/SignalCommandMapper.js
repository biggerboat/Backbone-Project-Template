define([
    'injector-js',
    'signals'
], function(injectorjs, signals) {
    'use strict';

    var injectorRef;

    return {
        extendInjector: function(injector) {
            injectorRef = injector;

            injectorjs.Injector.prototype.mapSignal = function(e, t) {
                //e = signals.Signal;
                var n = this._getMappingID(e, t);
                return this._mappings[n] || this._createMapping(e, t, n);
            };

            injectorjs.InjectionMapping.prototype.toCommand = function(command, context) {
                this.toSingleton(signals.Signal);
                var signal = this._value,
                    executor = function() {
                        var CommandClass = command,
                            options = {injector: injectorRef},
                            commandInst = new CommandClass(options);

                        commandInst.execute.apply(commandInst, arguments);
                        commandInst = null;
                    };
                signal.add(executor);
            };
        },

        mapSignalsToCommands: function(signalCommandMap) {
            var signal, command;
            for (signal in signalCommandMap) {
                command = signalCommandMap[signal];
                injectorRef.mapSignal(signal).toCommand(command);
            }
        },

        mapSignals: function(signalList) {
            var signal, i, length = signalList.length;
            for (i = 0; i < length; i++) {
                signal = signalList[i];
                injectorRef.map(signal).toSingleton(signals.Signal);
            }
        }
    };
});