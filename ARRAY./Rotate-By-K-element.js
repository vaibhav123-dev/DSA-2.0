// Rotate the given arr to left by k elements.

let arr = [2,1,9,11,0]
let n = arr.length
let k = 3

// Output = [11,0,2,1,9]

// 1> Brute force approach T.C-(O(n + k)) S.C-O(k)

function rotateByK(arr, n, k){
    let temp = [];
    for(let i=0; i<k; i++){         //put all the rotatable element in temp  T.C - O(k)
        temp[i] = arr[i]
    }

    for(let i=k; i<n; i++){         // shift rest element to left   T.C - O(n-k)
        arr[i-k] = arr[i]
    }

    for(let i=n-k; i<n; i++){
        arr[i] = temp[i-(n-k)]         // putting back temp element to arr  T.C - O(k)
    }
    return arr
}



//2> Optimal solution T.C-(O(N + N)) S.C-O(1)

function rotateByK(arr, n, k){  
   reverseHelperFun(arr, 0, k-1) //  reverse all the element from 0 to k    T.C - O(k)
   reverseHelperFun(arr, k, n-1) // reverse rest element as well        T.C - O(N-K)
   reverseHelperFun(arr)   
   return arr      // finally reverse whole arr;      T.C - O(N)
}

function reverseHelperFun(arr, start, end){
    if(start <= end){
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
}
