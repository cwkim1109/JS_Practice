function solution(my_string, k) {
  var answer = '';

  for(let i=0; i<k; i++){
    answer += my_string;
  }
  return answer;
}

// 다른 풀이
/*
function solution(my_string, k) {
    return my_string.repeat(k)
}
*/
