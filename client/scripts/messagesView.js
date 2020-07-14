var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  renderMessage: function(collection) {
    // set the parameter as (...)
    // takes in a message as parameter

    // should add messeges to the DOM
    // ? looks into masseges for a massege
    // should append to $chats (a div full of messages ?)

    // var message = {
    //   username: 'shawndrost',
    //   text: 'trololo',
    //   roomname: '4chan'
    // };

    // use a for loop and run render on every message then append it
    for (var i = 0; i < collection.length; i++) {
      if (!collection[i].text) {
        continue;
      } else if (collection[i].text.includes('<script>')) {
        continue;
      } else {
        var $message = MessageView.render(collection[i]);
        this.$chats.append($message);
      }
    }

    // var $usernameAndText =
    // `<div class="username">${message.username}</div>
    // <div>${message.text}</div>`;

    // var $text = $(`<div>${$usernameAndText}</div>`);

    // takes in the colleciton
    // parse thought the collection of messeges
    // call messages view
    // append to DOM



  }


};