const twoSum = (nums, target) => {
	for(let i = 0; i < nums.length; i++) {
		for(let j = 0; j < nums.length; j++) {
			let sum = nums[i] + nums[j];
			if(sum == target) {
				if(i !== j) return [i, j]
			} 
		}
	}
}

let ts = twoSum([0,4,3,0], 0)
console.log(ts)
