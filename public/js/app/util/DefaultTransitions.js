define([
    'TweenLite',
    'TweenCSSPlugin',
    'TweenEasePack',
    'backbone-injector'
], function(TweenLite) {
    'use strict';
    return {
        className: 'view',

        navigatorBehaviors: ['IHasStateTransition', 'IHasStateInitialization'],

        initializeByNavigator: function() {
            this.$el.hide();
            this.render();
        },

        transitionIn: function(callOnComplete) {
            TweenLite.fromTo(this.$el, 0.5, {css: {autoAlpha: 0, display: 'none'}}, {css: {autoAlpha: 1, display: 'block'}, onComplete: callOnComplete});
        },

        transitionOut: function(callOnComplete) {
            TweenLite.fromTo(this.$el, 0.5, {css: {autoAlpha: 1, display: 'block'}}, {css: {autoAlpha: 0, display: 'none'}, onComplete: callOnComplete});
        },

        toString: function() {
            return "[view " + this.id || this.$el.attr('class') + "]";
        }
    };
});
