function solution(num, n) {
  var answer = 0;

  if(num%n) {
    answer = 1;
  } else {
    answer = 0;
  }

  return answer;
}