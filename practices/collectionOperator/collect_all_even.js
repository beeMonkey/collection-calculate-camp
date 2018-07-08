'use strict';

function collect_all_even(collection) {
  var arr=[]
  for(let item of collection){
    if(item%2==0){
      arr.push(item)
    }
  }
  return arr
}

module.exports = collect_all_even;
