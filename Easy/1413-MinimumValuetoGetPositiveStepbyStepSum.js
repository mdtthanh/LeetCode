var minStartValue = function (nums) {
            let min = nums[0], sum = nums[0];
            for (let i = 1; i < nums.length; i++) {
                sum += nums[i];
                min = Math.min(min, sum);
            }
            if (min >= 0) return 1;
            return Math.abs(min) + 1;
};