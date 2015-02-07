define([
    'backbone-command'
], function(Backbone) {
    return Backbone.Command.extend({

        njs: 'inject',

        execute: function(isDemo, answer) {
            if (isDemo) {
                console.log('Why are these variables passed?\n', answer);
            }

            //this.njs.request('blue');
        }
    });
});