var pluginName = "example"
  , util = require("util")
  , api
  , log
  , questionType
  , EX = {};

module.exports = EX;

EX.onEnable = function() {
  api = module.exports.pluginManager.api
  log = api.logger.logPair
  questionType = api.questionType
  api.logger.info("Enabled Example Question Types");
  questionType.exists(pluginName, _createQType)
}
var _createQType = function(err, exists){
  if( err ) {
    api.logger.error(err);
    return false;
  }

  log("Exists", exists);
  if( exists ) return true;
  else 
    api.questionType.create(qTypeEX, function(err, saved){
      if( err ) api.logger.error(err);
      else log("Create Question Type", saved, util.inspect(qTypeEX) );
    });

}

var qTypeEX = {
  name:pluginName,
  title: "Example",
  shortTitle: "EX",
  icon: "icon-beer",
  js: "/plugins/example-question-type/js/example.js"
}
EX.onDisable = function() {
  console.log("Disabled Example");
  api.questionType.remove(pluginName, function(err, removed){
    if( err || !removed) api.logger.error(err);
    else log("Remove Question Type",pluginName);
  })
};

// Handlers
EX.handlers = {};

