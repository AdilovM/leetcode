// brute-force

var twoSum = function(nums, target) {
  for (var i = 0; i < nums.length; i++) {
      for (var j = 0; j < nums.length; j++) {
          if(nums[j] +nums[i] === target) {
             return [i,j]
          };
      };
  };
  return null;
};

// console.log(twoSum([2,7,11,15], 9));


// using obj/hashmap

var twoSum = function(nums, target) {
  let hash_map = {};

  for (let i = 0; i < nums.length; i++) {
      if(hash_map[target-nums[i]] !== undefined) {
          return [hash_map[target - nums[i]], i]
      } hash_map[nums[i]] = i;
  }
};

console.log(twoSum([2,7,11,15], 9));