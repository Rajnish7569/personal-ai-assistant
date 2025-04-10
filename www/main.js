$(document).ready(function () {
  $('.text').textillate({
    loop: true,
    sync: true,
    in:{
      effect: "bounceIn",
    },
    out:{
      effect: "bounceOut",
    },
  });

  //siri code
  var siriWave = new SiriWave({
    container: document.getElementById("siri-container"),
    width: 800,
    height: 200,
    amplitude:"1",
    speed: "0.15",
    autostart: true
  });

  //siri text animation
  $('.siri-message').textillate({
    loop: true,
    sync: true,
    in:{
      effect: "fadeInUp",
      sync: true,
    },
    out:{
      effect: "fadeOutUp",
      sync: true,
    },
  });


  //mic button function

  $("#MicBtn").click(function () { 
    
      $("#oval").attr("hidden", true);
      $("#SiriWave").attr("hidden", false);
      eel.allCommand()()
  });


  function doc_keyUp(e) {
    

    if (e.key === 'j' && e.metaKey) {
        
        $("#oval").attr("hidden", true);
        $("#SiriWave").attr("hidden", false);
        eel.allCommand()()
    }
  }
  document.addEventListener('keyup', doc_keyUp, false);


  function PlayAssistant(message) {

    if (message != "") {

        $("#oval").attr("hidden", true);
        $("#SiriWave").attr("hidden", false);
        eel.allCommand(message);
        $("#Chatbox").val("")
        $("#MicBtn").attr('hidden', false);
        $("#SendBtn").attr('hidden', true);

    }
  }

  function ShowHideButton(message) {
    if (message.length == 0) {
        $("#MicBtn").attr('hidden', false);
        $("#SendBtn").attr('hidden', true);
    }
    else {
        $("#MicBtn").attr('hidden', true);
        $("#SendBtn").attr('hidden', false);
    }
  }

   $("#Chatbox").keyup(function () {

        let message = $("#Chatbox").val();
        ShowHideButton(message)

  });

    
  $("#SendBtn").click(function () {

       let message = $("#Chatbox").val()
       PlayAssistant(message)

  });

// enter function
  $("#Chatbox").keypress(function (e) {
    key = e.which;
    if (key == 13) {
        let message = $("#Chatbox").val()
        PlayAssistant(message)
    }
  });

});




