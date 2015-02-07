define([
    'backbone',
    'hbs!templates/BlueScreenView',
    'util/DefaultTransitions'
], function(Backbone, template, Transitions) {
    return Backbone.View.extend(Transitions).extend({
        className: 'blueScreenView',

        navigatorBehaviors: ['IHasStateTransition'],

        render: function() {
            this.$el.html(template());

            return this;
        }
    });
});
