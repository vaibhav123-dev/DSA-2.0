// Find 2nd largest and smallest element of arr which contains positive interger.

let arr = [1,4,3,7,5]
let n = arr.length

// 1> Brute force approach T.C-(O(NLogN + N)) S.C-O(1)
// sort the arr in ascending order and get last element to get first largest element.
// then again run a loop and compare it with first largest and update sLargest variable.

function getSecondLargest(arr,n){
    let newArr = arr.sort((a,b)=>a-b)  //T.C - O(NlogN)

    let largest = newArr[n-1]
    let sLargest = -1
    
    for(let i=0; i<n; i++){             // T.C - O(N)
        if(arr[i] > sLargest && arr[i] != largest){  //check if curr > sLargest and not equal to first largest
            sLargest = arr[i]
        }
    }
    return sLargest
}



//2> Better solution T.C-(O(N + N)) S.C-O(1)
// Inialize the variable with first element of arr as 'large'.
// Update that variable (if curr element of arr is > 'large' variable) to get first largest.

function getSecondLargest(arr,n){
    let largest = arr[0]
    for(let i=0; i<arr.length; i++){ // T.C O(N)
        if(arr[i]>largest){
            largest = arr[i]
        }
    }

    let sLargest = -1
    for(let i=0; i<n; i++){          // T.C O(N)
        if(arr[i] > sLargest && arr[i] != largest){  //check if curr > sLargest and not equal to first largest
            sLargest = arr[i]
        }
    }
    return sLargest
}



//3> Optimal solution T.C-(O(N)) S.C-O(1)
// Inialize the variable with first element of arr as 'large'.
// Update that variable (if curr element of arr is > 'large' variable) to get first largest at the same time update sLargest with fLargest.
// also check if curr element is less than flargest and greater than slargest.

function getSecondLargest(arr,n){
   let flargest = arr[0]
    let sLargest = -1       

    for(let i=0; i<n; i++){
        if(arr[i] > flargest){
            sLargest = flargest;        // T.C - O(N)
            flargest = arr[i]
        }else if(arr[i] < flargest && arr[i] > sLargest){
            sLargest = arr[i]
        }
    }
    return sLargest;
}
