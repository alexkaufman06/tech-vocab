techVocab.factory('UtilityFactory',
function UtilityFactory() {
  return {
    findById: function(collection, id) {
      for (var i = 0; i < collection.length; i++) {
        if (collection[i].id == id)
          return collection[i];
      }
      return null;
    },
    assignEasy: function(card) {
      card.difficulty = 1;
    },
    assignMedium: function(card) {
      if (card.difficulty <= 9) {
        card.difficulty = 10;
      } else if (card.difficulty >= 19) {
        card.difficulty = 20;
      } else {
        card.difficulty += 2;
      }
    },
    assignHard: function(card) {
      if (card.difficulty <= 20) {
      card.difficulty = 21;
    } else if (card.difficulty >= 29) {
      card.difficulty = 30;
    } else {
      card.difficulty += 2;
    }
    }
  };
});
