function plusOne(digits)
{
    for (let i=digits.length-1; i>=0; i--)
    {
        if (digits[i]<9)
        {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
}

console.log(plusOne([1,2,3]));
console.log(plusOne([4,3,2,1]));
console.log(plusOne([9]));
console.log(plusOne([9,9,9]));
console.log(plusOne([2,9]));
