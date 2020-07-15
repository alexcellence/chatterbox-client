var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  renderMessage: function(message) {
    // takes in a message object
    // adds the to the top of the chats list

    // $('.chat').remove();
    var $message = MessageView.render(message);
    this.$chats.prepend($message);
  },

  renderMessages: function(collection) { // no need for parameter
    // should add messeges to the DOM
    // ? looks into masseges for a massege
    // should append to $chats (a div full of messages ?)

    $('.chat').remove();

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
  }

};
