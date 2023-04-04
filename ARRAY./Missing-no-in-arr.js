// Given an array nums containing n distinct numbers in the range [0, n], 
// return the only number in the range that is missing from the array.

// Input: nums = [3,0,1]
// n=3
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.


// 1> Brute force approach T.C-(O(N * M) S.C-O(1) 

function missingNum(arr,n){
 for(let i=0; i<=n; i++){                       // loop run till <=n
    let flag = 0                                   // flag for checking if present or not
        for(let j=0; j<arr.length; j++){
            if(arr[j]==i){                          // checking if present 
                flag = 1
                break
            }
        }
        if(!flag){
            return i                            // if not present then return that number
        }
    }
}

// 2> Better Approach   T.C - O(N + M) S.C - O(M)

function missingNum(arr, n){
    let hash = {}

    for(let k of arr){                  //create key value pair of number with value 1      T.C - O(n)
        if(!hash[k]){
            hash[k] = 1
        }else{
            hash[k] += 1
        }
    }
   let n  = arr.length;
    for(let i=0; i<=n; i++){            // check which no is not present in hash(object)    T.C - O(n)
        if(!hash[i]) return i
    }
}

// 3> Optimal Approach T.C - O(N) S.C - O(1)

function missingNum(arr, n){
    let n = arr.length
    
    let actualSum = (n*(n+1))/2             // sum of first n natural no
    
    let arrSum = arr.reduce((a,b)=>{
        return a+b                            // sum of element of arr      T.C - O(N)
    })
    
    return actualSum - arrSum               // return diff will give ans
}

