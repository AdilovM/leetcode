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

console.log(twoSum([2,7,11,15], 9));
