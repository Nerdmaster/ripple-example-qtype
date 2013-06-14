RIPPLE.questionType['example'] = {};

RIPPLE.questionType['example'].session = function(){
  var DISPLAY = RIPPLE.session.displayController
  , ASC = RIPPLE.session.mainController;

  var recAns = function(clientID, name, answer){
    var type = now.question.type
      , answerWell = $('<p class="well-small">' + name + " answered :: " + answer + '</p>');

    // Increment Total
    ASC.incrementTotal();

    // Increment and Set Answer
    DISPLAY.answersAppend(answerWell);

    // Show Individual Response in sidebar
    DISPLAY.updateIndResp(name,answer);    
  };
  
  var displayReset = function(){
    DISPLAY.answers("");
  }

  return {
    recieveAnswerFn: recAns,
    displayResetFn: displayReset
  }

};

RIPPLE.questionType['example'].client = function(){
  var CC = RIPPLE.client.controller
    , inputID = "example"
    , qID;

  var display = function( questionObj ){
    var html = '<input type="textbox" id="' + inputID + '"/>';
    qID = questionObj.qID
    CC.showAnswer( html );
    CC.sendBtn.show()
    CC.sendBtn.enable();
  };

  var send = function(elem){
    var ansInput = $('#'+inputID)
    CC.answer = ansInput.val();
    now.distributeAnswer( {answer:CC.answer, qID: qID} );
    CC.sendBtn.hide()
  };

  return {
    displayFn: display,
    sendFn: send
  }
};

RIPPLE.questionTypeBootstrap( RIPPLE.questionType['example'] );