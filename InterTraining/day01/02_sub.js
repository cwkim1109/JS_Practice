function solution(num1, num2) {
  var answer = Math.floor(num1 / num2 * 1000);
  return answer;
}

console.log(solution(3,2));
console.log(solution(7,3));
console.log(solution(1,16));