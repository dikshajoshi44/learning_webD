var sister = {
  name: "Sarah", 
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true,
  paintPicture: function() { return "Sarah paints!"; }
};
sister["parents"] // returns [ "alice", "andy" ]
sister.parents // also returns ["alice", "andy"]
sister.paintPicture();
sister.name