

/**
 * https://leetcode.com/discuss/questions/oj/multiply-strings
 */

var multiply = function(num1, num2) {
  const m = num1.length;
  const n = num2.length;

  const pos = Array(m + n).fill(0);

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const mul = (num1[i] - '0') * (num2[j] - '0');
      const p1 = i + j;
      const p2 = i + j + 1;
      const sum = mul + pos[p2]; // sum

      pos[p1] += Math.floor(sum / 10); // carry
      pos[p2] = sum % 10; // value
    }
  }

  let result = '';
  for (let p of pos) {
    if (p > 0 || result) {
      result += p;
    }
  }

  return result ? result : '0';
};