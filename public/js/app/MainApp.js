requirejs.config({

    hbs: {
        templateExtension: "hbs",
        disableI18n: true,
        disableHelpers: true //Disable the require-handlebars-plugin magic and use default handlebars behavior
    },

    paths: {
        "vendor": "../vendor",
        "templates": "../templates",
        "hbs": "../vendor/require-handlebars-plugin/hbs",
        "handlebars": "../vendor/require-handlebars-plugin/Handlebars",
        "i18nprecompile": "../vendor/require-handlebars-plugin/hbs/i18nprecompile",
        "json2": "../vendor/require-handlebars-plugin/hbs/json2",
        "modernizr": "../vendor/modernizr/modernizr",
        "console-polyfill": "../vendor/console-polyfill/index",
        "jquery": "../vendor/jquery/dist/jquery",
        "underscore": "../vendor/underscore/underscore",
        "backbone": "../vendor/backbone/backbone",
        "injector-js": "../vendor/injector.js/injector-js",
        "navigator-js": "../vendor/navigator.js/navigator-js",
        "backbone-super": "../vendor/backbone-super/backbone-super/backbone-super",
        "backbone-command": "../vendor/backbone-command/backbone-command",
        "backbone-injector": "../vendor/backbone-injector/backbone-injector",
        "backbone-recursive-tojson": "../vendor/backbone-recursive-toJSON/backbone-recursive-tojson",
        "TweenLite": "../vendor/greensock-js/src/uncompressed/TweenLite",
        "TweenEasePack": "../vendor/greensock-js/src/uncompressed/easing/EasePack",
        "TweenCSSPlugin": "../vendor/greensock-js/src/uncompressed/plugins/CSSPlugin"
    },

    // Sets the configuration for your third party scripts that are not AMD compatible
    shim: {
        "ApplicationRouter": {
            "deps": ["backbone"]
        },

        "injector-js": {
            "exports": "injector.Injector"
        },

        "navigator-js": {
            "deps": ["jquery"],
            "exports": "navigatorjs.Navigator"
        },

        "underscore": {
            "exports": "_"
        },

        "backbone": {
            "deps": ["underscore", "jquery"],
            "exports": "Backbone"  //detects Backbone is loaded by checking "Backbone" on the window object.
        },

        "backbone-super": {
            "deps": ["backbone"]
        },

        "backbone-command": {
            "deps": ["backbone"],
            exports: "Backbone.Command"
        },

        "backbone-injector": {
            "deps": ["injector-js", "backbone"]
        },

        "backbone-recursive-tojson": {
            deps: ["backbone"]
        },

        "TweenLite": {
            "exports": "TweenLite"
        },

        "TweenEasePack": {
            "deps": ["TweenLite"]
        },

        "TweenCSSPlugin": {
            "deps": ["TweenLite"]
        }
    }
});

require([
    "ApplicationRouter",
    "modernizr",
    "console-polyfill",
    "jquery",
    "underscore",
    "backbone",
    "injector-js",
    "navigator-js",
    "backbone-super",
    "backbone-command",
    "backbone-injector",
    "backbone-recursive-tojson",
    "TweenLite",
    "TweenEasePack",
    "TweenCSSPlugin"
], function(ApplicationRouter) {
    //Enforce loading globally used libraries and kicking application off

    $(function() {
        var theRouter = new ApplicationRouter({$el: $("body")});
    });
});
