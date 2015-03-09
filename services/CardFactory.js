techVocab.factory("CardFactory", function CardFactory() {
  var factory = {};

  factory.rubyMethods = [
    {front: "string.chop()", back: "removes the last character"},
    {front: "string.chomp()", back: "removes blank space and carriage returns from the end"},
    {front: "array.join()", back: "concats an array into a string"},
    {front: "array.reverse()", back: "reverses order of array elements"},
    {front: "array.shuffle()", back: "randomizes order of elements"},
    {front: "float.ceil()", back: "rounds up to integer"},
    {front: "array.unshift()", back: "takes an argument and adds it to the beginning of the array"},
    {front: "array.pop()", back: "removes the last element of the array and returns it"},
    {front: "array.length()", back: "returns the number of elements in the array"},
    {front: "array.shift()", back: "removes the first element of the array and returns it"}
  ];

  return factory;
});
