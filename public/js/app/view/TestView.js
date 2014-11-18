define([
    'hbs!templates/TestView',
    'TweenLite'
], function(template, TweenLite) {
    return Backbone.View.extend({
        className: 'testView',

        navigatorBehaviors: ['IHasStateTransition'],

        testModel: 'inject',

        events: {},

        initialize: function() {
            this.listenTo(this.testModel, 'change:name', this.render);
        },

        render: function() {
            this.$el.html(template(this.testModel.toJSON()));

            return this;
        },

        transitionIn: function(callOnComplete) {
            TweenLite.fromTo(this.$el,
                1.5,
                {alpha: 0},
                {
                    alpha: 1,
                    onComplete: callOnComplete
                });
        },

        transitionOut: function(callOnComplete) {
            TweenLite.to(this.$el, 1.5, {alpha: 0, onComplete: callOnComplete});
        }
    });
});
