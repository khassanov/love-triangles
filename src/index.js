/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation

  let count =0;
  preferences.forEach(function(element,x,array){
      if(element>0 && array[element-1] > 0 && x+1!=array[element-1] && x+1 === array[array[element-1]-1]){
          count++;
      }
  })
  return count/3;

};
