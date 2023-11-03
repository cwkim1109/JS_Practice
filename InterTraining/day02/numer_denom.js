function solution(numer1, denom1, numer2, denom2) {
  let numer = numer1 * denom2 + numer2 * denom1;
  let denom = denom1 * denom2;

  // 최대 공약수 로직
  let getGCD = (num1, num2) => {
    let gcd = 1;

    for (let i = 2; i <= Math.min(num1, num2); i++) {
      if (num1 % i === 0 && num2 % i === 0) gcd = i;
    }

    return gcd;
  }

  gcd = getGCD(numer, denom);

  var answer = [numer/gcd, denom/gcd];
  return answer;
}

console.log(solution(1, 2, 3, 4));

console.log(solution(9, 2, 1, 3));