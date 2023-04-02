// Rotate given Array to the left by one element in place.


//1> Optimal solution T.C-(O(N)) S.C-O(1)   

//  Save the first element as temp.
// Update i-1 indexed element with current element and then place temp to last(n-1) 

function rotateArray(arr, n){
    let temp = arr[0]

    for(let i=1; i<n; i++){             //T.C - O(N)
        arr[i-1] = arr[i]
    }

    arr[n-1] = temp
    return arr
}

// Note - S.C is O(N) if we considered the used space to solve problem but if talk about extra space that used then O(1).
