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
    findByOrder: function(collection, order) {
      for (var i = 0; i < collection.length; i++) {
        if (collection[i].order == order)
          return collection[i];
      }
      return null;
    },
  };
});
