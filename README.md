navigator-injector-backbone-command-setup
=========================================
This project functions as a boilerplate for projects that make use of:

* [bower](https://github.com/bower/bower)
* [grunt](https://github.com/gruntjs/grunt)
* [compass](https://github.com/chriseppstein/compass)
* [jquery](https://github.com/jquery/jquery)
* [requirejs](https://github.com/jrburke/requirejs)
* [requirejs-text](https://github.com/requirejs/text)
* [handlebars](https://github.com/wycats/handlebars.js)
* [navigator.js](https://github.com/biggerboat/navigator.js)
* [injector.js](https://github.com/biggerboat/injector.js)
* [underscore](https://github.com/jashkenas/underscore)
* [backbone](https://github.com/jashkenas/backbone)
* [backbone-super](https://github.com/lukasolson/Backbone-Super)
* [backbone-injector](https://github.com/biggerboat/backbone-injector)
* [backbone-command](https://github.com/biggerboat/backbone-command)
* [backbone-recursive-toJSON](https://github.com/biggerboat/backbone-recursive-toJSON)
* [greensock-js](https://github.com/greensock/GreenSock-JS/)

Bower is used to load all the required dependencies for the frontend. Initially you should run ```bower install```
from within the root of this project. This will download all the required frontend dependencies into ```public/js/vendors```

## Grunt tasks
With Grunt we automate repetitive processes. The following tasks are available for you to use:
* ```grunt serve``` This starts a webserver pointing to the public folder, makes a clean compass compile,
creates a live-reload server (make sure you do NOT have the live-reload app open) and
recompiles your css files upon any changes. When developing this is the task you would want to have running in the background.
* ```grunt deploy``` This will create a clean build for you in the tmp/deploy folder. All js files will be minified using
the r.js optimizer and compass makes a clean compile. All the files that will no longer be needed after this compile will be omitted
from the tmp/deploy folder.
* ```grunt deploy:zip``` This is essentially the same as ```grunt deploy```, but on top of that it will create a zipfile for you. Easy for sharing with your client!
* ```grunt deploy:local```
* ```grunt deploy:staging```
* ```grunt deploy:staging:zip```
* ```grunt deploy:staging:full```
* ```grunt deploy:production```
