# <img src="assets/sassafras_logo.png" alt="sassafras logo">  
![Build Status](https://travis-ci.org/tylerreckart/sassafras.svg?branch=master) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)  

### Introduction

Sassafras is a tool for compiling multiple css preprocessors into css that can be read by the browser. It works great with languages like SASS, SCSS (Sassy CSS) and LESS. It was built out of a necessity for a proper way to compile other languages into CSS. Sassafras is built to be quick and easy to implement. Check it out!

#### Prerequisites  
Sassafras requires that you have grunt installed and running on your system. If you don't already the process of getting grunt onto your system is super easy. In the command line enter:

    npm install -g grunt

    npm install -g grunt-cli

The first command installs grunt globally on your system. The second installs it's command line interface.

Then run `grunt --version`. If the console responds with a version number, you've got grunt up and running. If you run into errors, check out grunt's [getting started](http://gruntjs.com/getting-started) guide.

### Installation

Installation is super simple. Just run in the root directory of your project. For now, you'll need to go into the `node_modules` folder and move the contents of `sassafras_io` into the root directory of your project. This will soon be fixed upon install and the docs will be updated once it has been implemented.

    bower install sassafras

That's it! Just make sure you have all of the dependencies in the root folder of your project.

This means finding your way inside of the `sassafras` folder and copying the contents of the `dist` folder to the root directory of your project. (Hint: you can find the `sassafras` folder in the `bower_components` folder)

Please note: There is also a downloadable npm package for sassafras as well. If you would like to install it via npm, then run `npm install sassafras_io`. However, the npm package is depreciated at the current moment in time. Right now all package support is through bower. The npm package will be updated in the future, however it is not currently receiving updates.

## Usage

Once you've got everything installed and in the right directory, running sassafras is quick and easy. Just run the following command:

    grunt

I'd suggest opening a new tab in your terminal window dedicated to the grunt task. This will allow for you to work with git and interface with the command line while sassafras compiles your code.

If you are working on larger scale projects, Sassafras also has a feature that will allow you to see the time it takes for Sassafras to run it's tasks and compile your code. All you have to do is uncomment the ` //require('time-grunt')(grunt);
` At the top of the gruntfile. That's it!

## Additional Info

Depending on how you lay out your file structure, you may need to edit the paths in the `gruntfile`. If you have your folder structure laid out differently that I built into sassafras, grunt won't know where to look in order to read your `SCSS` or `LESS` and generate the `main.css` file. However, do not fret! Editing the paths in the `gruntfile` is super simple.

### Editing the path/to/css
For example:
```js
 module.exports = function(grunt) {
 grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	sass: {
		dist: {
			files: {
				'assets/css/main.css' : 'assets/scss/*.scss'
			}
		}
	},
  less: {
		dist: {
			files: {
				'assets/css/main.css' : 'assets/less/*.less'
			}
		}
	},
  ...
```
Could become:
```js
 module.exports = function(grunt) {
 grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	sass: {
		dist: {
			files: {
				'styles/main.css' : 'styles/*.scss'
			}
		}
	},
  less: {
		dist: {
			files: {
				'styles/main.css' : 'styles/*.less'
			}
		}
	},
  ...
```
It all just depends on how you like to organize your files. I like mine to be organized in a certain way, therefore I wrote sassafras to follow that structure.


The MIT License (MIT)
=====================

Copyright © 2015 Tyler A. Reckart

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
