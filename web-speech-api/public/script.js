var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition,
    SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList,
    SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent,
    recognition = new SpeechRecognition(),
    speechRecognitionList = new SpeechGrammarList(),
    colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow'],
    grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;',
    diagnostic = document.querySelector('.output'),
    bg = document.querySelector('html');

speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

recognition.continuous = true;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

recognition.start();
recognition.onresult = function(event) {
  var last = event.results.length - 1,
    color = event.results[last][0].transcript;

  diagnostic.textContent = 'Color heard: ' + color + '.';
  bg.style.backgroundColor = color;

  console.log('Confidence: ' + event.results[0][0].confidence);
}

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onnomatch = function(event) {
  diagnostic.textContent = 'I didn\'t recognize that color.';
}

recognition.onerror = function(event) {
  diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
}
