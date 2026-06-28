function removeDuplicates(nums)
{
    if (nums.length === 0)return 0;
    let r = 1;
    for (let i = 1; i < nums.length; i++)
    {
        if (nums[i] !== nums[r-1])
        {
            nums[r] = nums[i];
            r++;
        }
    }
    return r;
}

let nums = [1,1,2,2,3];
let n = removeDuplicates(nums);
console.log(n);
for (let i = 0; i < n; i++) console.log(nums[i]);
