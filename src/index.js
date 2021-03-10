
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let result = [];

  if (matrix.length !== 0) {
    for (i = 1; i < matrix.length ; i = i + 2){
      matrix[i] = matrix[i].reverse();
    }
    result = matrix.reduce(function(a, b) { 
         return a.concat(b);
      });
  } else {
    result = [];
  }

  return  result;
}
