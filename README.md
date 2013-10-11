navigator-injector-backbone-command-setup
=========================================
This project functions as a boilerplate for projects that make use of:

* [bower](https://github.com/bower/bower)
* [grunt](https://github.com/gruntjs/grunt)
* [compass](https://github.com/chriseppstein/compass)
* [jquery](https://github.com/jquery/jquery)
* [modernizr](https://github.com/Modernizr/Modernizr)
* [console-polyfill](https://github.com/paulmillr/console-polyfill)
* [requirejs](https://github.com/jrburke/requirejs)
* [require-handlebars-plugin](https://github.com/SlexAxton/require-handlebars-plugin)
* [navigator.js](https://github.com/biggerboat/navigator.js)
* [injector.js](https://github.com/biggerboat/injector.js)
* [underscore](https://github.com/jashkenas/underscore)
* [backbone](https://github.com/jashkenas/backbone)
* [backbone-super](https://github.com/lukasolson/Backbone-Super)
* [backbone-injector](https://github.com/biggerboat/backbone-injector)
* [backbone-command](https://github.com/biggerboat/backbone-command)
* [backbone-recursive-toJSON](https://github.com/biggerboat/backbone-recursive-toJSON)
* [greensock-js](https://github.com/greensock/GreenSock-JS/)
* [hammerjs](https://github.com/EightMedia/hammer.js)
* [enquire](https://github.com/WickyNilliams/enquire.js/)
* [stats.js](https://github.com/mrdoob/stats.js/)

Bower is used to load all the required dependencies for the frontend. Initially you should run ```bower install```
from within the root of this project. This will download all the required frontend dependencies into ```public/js/vendors```

## Grunt tasks
With Grunt we automate repetitive processes. The following tasks are available for you to use:
* ```grunt serve``` This starts a webserver pointing to the public folder, makes a clean compass compile,
creates a live-reload server (make sure you do NOT have the live-reload app open) and
recompiles your css files upon any changes. When developing this is the task you would want to have running in the background.
* ```grunt deploy``` This will create a clean build for you in the tmp/deploy folder. All js files will be minified using
the r.js optimizer and compass makes a clean compile. All the files that will no longer be needed after this compile will be omitted
from the tmp/deploy folder. It also alters the index.html file in order to reference the correct minimized application.
* ```grunt deploy:zip``` This is essentially the same as ```grunt deploy```, but on top of that it will create a zipfile for you.
Easy for sharing with your client!
* ```grunt deploy:local``` This makes a deploy and serves the deployed file from disk. This way you could locally verify
everything works as expected.
* ```grunt deploy:staging``` This uploads the file to a staging environment by using FTP. In order for this to work you should
add your credentials to ```.ftppass``` file that is next to your Gruntfile. Also alter your ```Gruntfile.js``` in order to configure
it for your host. All staging uploads will be prefixed with the current date and time, making each staging deploy unique.
This grunt task will automatically open your browser once the deploy is completed.
* ```grunt deploy:staging:zip``` This uploads the zipfile to the staging environment. Like ```deploy:staging``` you need
to make sure to configure the FTP settings to your need.
* ```grunt deploy:staging:full``` This will both execute ```deploy:staging``` and ```deploy:staging:zip```
* ```grunt deploy:production``` Just like ```deploy:staging```, but without uploading it to a folder with a date and time.
You can configure different settings for production than those that you use for staging.

## Compass
For compiling the scss files, you need at least [Compass](http://compass-style.org/install/) to be installed together with
[Compass H5bp](https://github.com/sporkd/compass-h5bp). Please refer to these resources for instructions on how to install these.

## Release or develop version detection
In order to detect whether or not we run develop or release mode you could load the util/isDebug module. This module returns true
when we are developing and running the project directly from source. It returns false after a build.
```JavaScript
define(['util/isDebug'], function(isDebug) {

	var YourModule = function() {
		if(isDebug) {
			// add your debug windows/execute debug stuff
		}
	};

	return YourModule;
});
```
Note that we already automatically detect this within the ```ApplicationRouter```. While developing you will see stats
in the upper right corner and the ```DebugConsole``` that is packed with navigator.js

## Support
Feel free to create a [new issue](https://github.com/PaulTondeur/navigator-injector-backbone-command-setup/issues/new) for all your questions, issues or feature requests.
