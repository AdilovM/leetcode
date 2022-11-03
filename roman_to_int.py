def romanToInt(s):
  mapping = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
  }
  sum = 0
  for i in range(len(s) - 1):
      if mapping[s[i]] < mapping[s[i+1]]:
          sum -= mapping[s[i]]
      else:
          sum += mapping[s[i]]
  sum += mapping[s[-1]]
  return sum
print(romanToInt('MCMXCIV'))
# 621 vs 421