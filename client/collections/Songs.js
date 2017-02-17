// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel, 

  initialize: function() {
    var context = this;

    $.ajax ({
      url: 'http://parse.atx.hackreactor.com/mytunes/classes/songs',
      method: 'GET',

      success: function (data) {
        data.results.forEach(function (song) {
          context.add({
            artist: song.artist,
            title: song.title,
            url: song.url
          });
        });
      },

      error: function (err) {
        console.log(err);
      }
    });
  }
});