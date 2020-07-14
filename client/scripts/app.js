var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    // var intervalID = scope.setInterval(func, [delay, arg1, arg2, ...]);
    //var intervalID = scope.setInterval(code, [delay]);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:

      console.log(data);
      Messages = data.results;
      console.log(Messages.all);
      MessagesView.renderMessages(data.results);
      callback();
    });
    setInterval(App.fetch, (60 * 1000));
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }


};
