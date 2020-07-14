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

    // console.log('click!');
    console.log(message.text);
    Parse.create(message);
    document.getElementById('message').value = '';
    App.startSpinner();
    $('.chat').remove(); // move to messagesView
    App.fetch();
    App.stopSpinner();

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};