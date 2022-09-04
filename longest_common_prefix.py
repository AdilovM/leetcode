def longest_common_prefix(strs):
  shortest = strs[0]
  i = 0
  while i < len(strs):
    if shortest == strs[i][:len(shortest)]:
      i += 1
    else:
      shortest = shortest[:-1]
      i = 0
  return shortest
print(longest_common_prefix(["flower","flow","flight", "flootersk","f"]))



# print(shortest_string(["flower","flow","flight"]))