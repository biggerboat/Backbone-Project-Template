requirejs.config({
    baseurl: 'js/app',

    hbs: {
        templateExtension: 'hbs',
        disableI18n: true,
        disableHelpers: true //Disable the require-handlebars-plugin magic and use default handlebars behavior
    },

    paths: {
        'templates': '../templates',
        'hbs': '../vendor/require-handlebars-plugin/hbs',
        'handlebars': '../vendor/require-handlebars-plugin/Handlebars',
        'i18nprecompile': '../vendor/require-handlebars-plugin/hbs/i18nprecompile',
        'json2': '../vendor/require-handlebars-plugin/hbs/json2',
        'modernizr': '../vendor/modernizr/modernizr',
        'console-polyfill': '../vendor/console-polyfill/index',
        'jquery': '../vendor/jquery/dist/jquery',
        'underscore': '../vendor/underscore/underscore',
        'backbone': '../vendor/backbone/backbone',
        'injector-js': '../vendor/injector.js/injector-js',
        'navigator-js': '../vendor/navigator.js/navigator-js',
        'backbone-super': '../vendor/backbone-super/backbone-super/backbone-super',
        'backbone-command': '../vendor/backbone-command/backbone-command',
        'backbone-injector': '../vendor/backbone-injector/backbone-injector',
        'backbone-recursive-tojson': '../vendor/backbone-recursive-toJSON/backbone-recursive-tojson',
        'TweenLite': '../vendor/greensock/src/uncompressed/TweenLite',
        'TweenEasePack': '../vendor/greensock/src/uncompressed/easing/EasePack',
        'TweenCSSPlugin': '../vendor/greensock/src/uncompressed/plugins/CSSPlugin'
    },

    // Sets the configuration for your third party scripts that are not AMD compatible
    shim: {
        'ApplicationRouter': {
            'deps': ['backbone-injector']
        },

        'injector-js': {
            'exports': 'injector'
        },

        'navigator-js': {
            'deps': ['jquery'],
            'exports': 'navigatorjs'
        },

        'underscore': {
            'exports': '_'
        },

        'backbone': {
            'deps': ['underscore', 'jquery'],
            'exports': 'Backbone'  //links the window.Backbone object when you Require 'backbone' in the top of a file.
        },

        'backbone-super': {
            'deps': ['backbone']
        },

        'backbone-command': {
            'deps': ['backbone'],
            'exports': 'Backbone'
        },

        'backbone-injector': {
            'deps': ['injector-js', 'backbone']
        },

        'backbone-recursive-tojson': {
            'deps': ['backbone']
        },

        'TweenLite': {
            'exports': 'TweenLite',
            //'deps': ['TweenEasePack', 'TweenCSSPlugin']
        }
    }
});

require([
    'ApplicationRouter'
], function(ApplicationRouter) {
    new ApplicationRouter();
});
