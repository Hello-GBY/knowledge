// 创建
dp[i][j];
(i) => n;
(j) => m;

function a(n, m) {
  let dp = Array.from({ length: n }, new Array(m););

  let num = 0;
  let target = false;

  for (let i = 0; i < m; i++) {
    target = !target;

    if (target) {
      for (let j = 0; j < n; j++) {
        num++;
        dp[j][i] = num;
      }
    } else {
      for (let j = n; j >= 0; j--) {
        num++;
        dp[j][i] = num;
      }
    }
  }
  return dp;
}
