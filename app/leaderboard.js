PlayersList = new Mongo.Collection('players');

if (Meteor.isClient) {

  Template.leaderboard.helpers({
    'player': function () {
      return PlayersList.find();
    },
    'selectedClass': function () {
      const playerId = this._id;
      const selectedPlayer = Session.get('selectedPlayer');
      if (playerId === selectedPlayer) {
        return 'selected';
      }
    },
  });

  Template.leaderboard.events({
    'click .player': function () {
      let playerId = this._id;
      Session.set('selectedPlayer', playerId);
    },
  });

  console.log("Hello client");
}

if (Meteor.isServer) {
  console.log("Hello server");
}
