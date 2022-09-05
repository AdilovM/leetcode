def remove_dups(nums):
  count = 0
  for i in range(1, len(nums)):
    if nums[i] == nums[i - 1]:
      count += 1
    else:
      nums[i - count] = nums[i]
      print(nums)
  return len(nums) - count, nums
foo = [0,0,1,1,1,2,2,3,3,4]
print(remove_dups(foo))