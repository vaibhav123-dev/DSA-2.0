// Given an integer array arr, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

Input: arr = [0,1,0,3,12]
Output: [1,3,12,0,0]

// 1> Brute force approach T.C-(O(N + N)) S.C-O(N)

function moveZeros(arr, n){
 let temp = []
    for(let i=0; i<arr.length; i++){
        if(arr[i]!=0){                         // Take all the non-zero element and push it into temp - T.C - O(N)
            temp.push(arr[i])
        }
    }
    for(let i=0; i<temp.length; i++){           // put all the temp arr element in arr at starting      - T.C - O(x)
        arr[i] = temp[i]
    }

    for(let i=temp.length; i<arr.length; i++){     // fill the remaining places with zeros  -  T.C - O(n-x)
        arr[i] = 0
    }
return  arr
}



//2> Optimal solution T.C-(O(N)) S.C-O(1)

function moveZeros(arr, n){  
  let i = -1; 
    for(let j=0; j<arr.length; j++){
        if(arr[j]==0){                     // find the first zero element index  T.C - O(x)
            i=j
            break;
        }
    }

    if(i==-1) return arr                   // if there is no zero element present then return arr

    for(let k=i+1; k<arr.length; k++){
        if(arr[k]!=0){                     // then using two pointer swap the non-zero with zero element
            swap(arr, k, i)
            i++
        }
    }
    return arr     
}


function swap(arr,x,y){
let temp = arr[x]
arr[x] = arr[y]
arr[y] = temp                  // T.C - O(1)
return arr
}
