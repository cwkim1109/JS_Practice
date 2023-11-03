function solution(a, b) {

  num1 = Number(a.toString() + b.toString());
  num2 = 2 * a * b;

  var answer = 0;
  answer= Math.max(num1, num2);

  return answer;
}