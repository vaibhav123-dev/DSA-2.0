//Given an integer array arr sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in arr.
// Consider the number of unique elements of arr be k, to get accepted, you need to do the following things:
// Change the array arr such that the first k elements of arr contain the unique elements in the order they were present in arr initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.


Input: arr = [1,1,2]
Output: 2, arr = [1,2,_]


// 1> Brute force approach T.C-(O(NLogN + N)) S.C-O(N)

// Our set can be initiated with the arr array. This will automatically remove all duplicates. We then set arr.length to 0 which will empty the array accordingly.
// We do NOT use arr = [] as this would create a new object in memory and we want to empty the existing arr array.
// Finally, we use the spread operator to push our set values into the original array.

function numOFUnique(arr, n){
    let set = new Set(arr)         // T.C - O(NLogN)
    arr.length = 0
    arr.push(...set.values())      // T.C - O(N)
    return arr.length;
}



//2> Optimal solution T.C-(O(N)) S.C-O(1)

// Using two pointer approach
// will put left pointer on 0th index and right pointer on right and iterate right pointer further.
// And check if arr[right] is unique then replace arr[left+1] with arr[right] and move left with +1.

function numOFUnique(arr){
       let left = 0;
    for (let right = 0; right < arr.length; right++){
        if(arr[right]!=arr[left]){
            arr[left+1] = arr[right]
            left++ 
        }
    }
    return left + 1
}
