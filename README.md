Example Question Type Plugin for Ripple
======

This plugin creates a Ripple question type of "Example." It can used as the minimal code needed to create a question type plugin. To create your own plugin, make these changes:

1. In index.js, change _'pluginName'_ to the name of your plugin. 

```
NOTE!!! The name can not have spaces.
```

2. In index.js, change 'qTypeEX' object paramters to match your plugin

3. In js/example.js, change everywhere 'example' is found to your plugin name used in index.js

There are additional methods and properties available in the [api documentation](http://ripple-core.uoregon.edu/api/latest)
for plugins if you are looking for further functionality.

Install
-------
In "plugins" directory of Ripple core:

```
git clone https://github.com/uoregon-img/ripple-example-question-type.git
```

_OR_

[Download project](https://github.com/uoregon-img/ripple-example-question-type.git/archive/master.zip) and install unzipped files in "plugins" directory of Ripple core.

Configuration
------
There is no configuration for this plugin.

License
-------

All files are covered under the GPL v3 license.  Please see LICENSE.TXT for specifics.
