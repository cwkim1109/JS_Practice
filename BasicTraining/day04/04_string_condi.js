function solution(ineq, eq, n, m) {

  var answer = 0;

  switch(ineq+eq) {
    case '>=':
      answer = Number(n>=m);
      break;

    case '<=':
      answer = Number(n<=m);
      break;

    case '>!':
      answer = Number(n>m);
      break;

    case '<!':
      answer = Number(n<m);
      break;
  }


  return answer;
}

console.log(solution('<', '=', 20, 50));