var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TO DO: hook up event handler for the add room button
    // $($select).attr('value', Rooms.selected);
    // RoomsView.$select.select(function() {

    // });
    $(document).on('change', 'select', function() {
    // the selected options’s value
      var selectedText = $('#rooms select option:selected').html();
      console.log(typeof selectedText);

    });
    // change rooms selected option to selected option
    // populate only messages with that room

    // this will bring a new prompt every time you refresh the page
    // the room will only persist if you send a message while 'in' that room
    var roomPrompt = prompt('Please enter a room name:', 'lobby');
    if (roomPrompt === null || roomPrompt === '') {
      Rooms.selected = 'lobby';
    } else {
      Rooms.storage.push(roomPrompt);
      Rooms.selected = roomPrompt;
      RoomsView.renderRoom(roomPrompt);
      console.log(roomPrompt);
      console.log(Rooms.storage);
    }
  },

  renderRoom: function(room) {
    // room is a string
    // append to DOM rooms
    var roomName = `<option value=${room}>${room}</option>`;
    this.$select.append(roomName);
  },

  fillList: function(collection) { // collection or message?
    for (var i = 0; i < collection.length; i++) {
      if (collection[i].roomname) {
        if (Rooms.storage.indexOf(collection[i].roomname) === -1) {
          Rooms.storage.push(collection[i].roomname);
          RoomsView.renderRoom(collection[i].roomname);
        } else {
          continue;
        }
      }
    }
  }

  // fetch




};


// use filtered subset to give to renderMessages
// only want the ones from a certain room