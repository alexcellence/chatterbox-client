var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  // renderMessage: function(message) {
  //   $('.chat').remove();
  //   var $message = MessageView.render(message);
  //   this.$chats.append($message);
  // },

  renderMessages: function(collection) {// no need for parameter
    // set the parameter as (...)
    // takes in a message as parameter

    // should add messeges to the DOM
    // ? looks into masseges for a massege
    // should append to $chats (a div full of messages ?)

    $('.chat').remove(); // moved from messagesView

    // use a for loop and run render on every message then append it
    for (var i = 0; i < collection.length; i++) { // messages.length using _.ech
      if (!collection[i].text) {
        continue;
      } else if (collection[i].text.includes('<script')) {
        continue;
      } else if (collection[i].text.includes('.js')) {
        continue;
      } else {
        var $message = MessageView.render(collection[i]);
        this.$chats.append($message);
      }
    }

    // for (var i = 0; i < collection.length; i++) { // messages.length using _.ech
    //   if (!collection[i].text) {
    //     continue;
    //   } else if (collection[i].text.includes('<script')) {
    //     continue;
    //   } else if (collection[i].text.includes('.js')) {
    //     continue;
    //   } else {
    //     var $message = this.renderMessage(collection[i]);
    //     this.$chats.append($message);
    //   }
    // }


    // for (var i = 0; i < collection.length; i++) { // messages.length using _.ech

    //   var $message = MessageView.render(collection[i]);
    //   this.$chats.append($message);

    // }
  }

};