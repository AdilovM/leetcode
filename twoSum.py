from typing import List
class Solution:
  def twoSum(nums: List[int], target: int) -> List[int]:
    # for i in nums:
    #   for j in nums:
    #     if i + j == target:
    #       return [i, j]
    # for i in range(len(nums)):
    #   for j in range(len(nums)):
    #     if nums[i] + nums[j] == target:
    #       return [i,j]
    map = {}
    for i in range(0, len(nums)):
      if target - nums[i] in map:
        return [map[target - nums[i]], i]
      else:
        map[nums[i]] = i
    return None
  print(twoSum([3,2,4],6))
  print(twoSum([2,7,11,15], 9))


