function solution(my_string, overwrite_string, s) {

  // 정석
  function solution(my_string, overwrite_string, s) {
    var answer = '';
    let overwrite_length = overwrite_string.length + s;
    let _first = my_string.slice(0, s);
    let _last = my_string.slice(overwrite_length);


    answer = _first+overwrite_string+_last
    return answer;
}


  // 테스트 케이스 실패함(아래)
  // omit_string = my_string.substr(s, overwrite_string.length)
  // var answer = '';
  // answer = my_string.replace(omit_string, overwrite_string);
  // return answer;



}


console.log(solution('He11oWor1d', 'lloWorl', 2));
console.log(solution('Program29b8UYP', 'merS123', 7));