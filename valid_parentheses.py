def is_valid(s):
  closed = {
  ')' : '(',
  ']' : '[',
  '}' : '{'
  }
  stack = []
  for ch in s:
    if ch not in closed:
      stack.append(ch)
    else:
      if not stack:
        return False
      if stack[-1] != closed[ch]:
        return False
      stack.pop()
  if stack:
    return False
  else:
    return True

print(is_valid('()[][({({})})]'))