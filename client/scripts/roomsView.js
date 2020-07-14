var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(room) {
    // room is a string
    // append to DOM rooms

    var roomName = `<option value=${room}>${room}</option>`;
    this.$select.append(roomName);

  }

};
