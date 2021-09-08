## n-th-tribonacci-number

- Problem: 1137
- URL: https://leetcode.com/problems/n-th-tribonacci-number/
- tags: ['dynamic-programming']
- Difficulty: `EASY`

The **Tribonacci sequence**, such that each number is the sum of the three preceding ones, starting from `0`, `1` and `1`. That is,

```text
T(0) = 0, T(1) = 1, T(2)=1
T(n+3) = T(n) + T(n+1) + T(n+2) for n >=0.
```

Given `n`, calculate `T(n)`.

### Example 1:

> **Input:** `n = 4`  
> **Output:** `4`  
> **Explanation:**  
> `T_3 = 0 + 1 + 1 = 2`  
> `T_4 = 1 + 1 + 2 = 4`

### Example 2:

> **Input:** `n = 25`  
> **Output:** `1389537`

### Constraints:

- `0 <= n <= 37`
- The answer is guaranteed to fit within a 32-bit integer, i.e. `answer <= 2^31 - 1`.
