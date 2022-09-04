def roman_to_int(roman):
  mapping = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  if len(roman) == 0:
    return 0
  elif len(roman) >= 2 and roman[0] == 'C' and (roman[1] == 'M' or roman[1] == 'D'):
    return mapping[roman[1]] - mapping[roman[0]] + roman_to_int(roman[2:])
  elif len(roman) >= 2 and roman[0] == 'X' and (roman[1] == 'L' or roman[1] == 'C'):
    return mapping[roman[1]] - mapping[roman[0]] + roman_to_int(roman[2:])
  elif len(roman) >= 2 and roman[0] == 'I' and (roman[1] == 'V' or roman[1] == 'X'):
    return mapping[roman[1]] - mapping[roman[0]] + roman_to_int(roman[2:])
  else:
    return mapping[roman[0]] + roman_to_int(roman[1:])

print(roman_to_int('III'))