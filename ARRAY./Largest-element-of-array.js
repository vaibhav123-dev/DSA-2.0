// Largest Element IN Array

let arr = [2,1,9,11,0]
let n = arr.length

// 1> Brute force approach T.C-(O(NLogN)) S.C-O(1)
// sort the arr in ascending order and return last element to get largest element.

function getLargest(arr, n){
arr.sort((a,b)=>a-b)            // T.C - O(NLogN)
return arr[n-1]
}



//2> Optimal solution T.C-(O(N)) S.C-O(1)
// Inialize the variable with first element of arr as 'large'
// Update that variable (if curr element of arr is > 'large' variable) 

function getLargest(arr, n){
    let large = arr[0]
    for(let i=0; i<n; i++){
        if(arr[i]>large){           //T.C - O(N)
            large = arr[i]
        }
    }
    return large
}
