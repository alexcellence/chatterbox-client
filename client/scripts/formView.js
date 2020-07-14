var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // // Stop the browser from submitting the form
    event.preventDefault(); // look up on MDN

    var message = {
      username: App.username,
      text: document.getElementById('message').value,
      roomname: 'youcannnotseethisroom'
    };

    console.log('click!');
    // var message = document.getElementById('message').value;
    console.log(message.username);
    Parse.create(message);
    // use Parse.create and it takes in a message

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};