/*1) 

https://www.codewars.com/kata/563089b9b7be03472d00002b/train/javascript */
Array.prototype.remove_ = function(integer_list, values_list){
  const resultList = [];
  for (let i = 0; i < integer_list.length; i++) {
    if (!values_list.includes(integer_list[i])) {
      resultList.push(integer_list[i]);
    }
  }
  return resultList;
}