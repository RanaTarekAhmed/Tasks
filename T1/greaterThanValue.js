function greaterThan(arr, value)
{
    let r = [];
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] > value) r.push(arr[i]);
    }
    return r;
}

console.log(greaterThan([2,5,8,1,9,3.10],4));
