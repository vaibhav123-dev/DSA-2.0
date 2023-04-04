// Given two sorted arrays, find their intersections (return arr consist of element present in both the arr)).

Input: arr1 = [1, 3, 4, 5, 7]
        arr2 = [3, 4, 5, 6]

Output: [3,4,5]

// 1> Brute force approach T.C-(O(N + M) S.C-O(M) -->>{space complexity depends on which arr length you use for visited arr}.

function unionOfArray(arr1,arr2){
    let visitedArr = new Array(arr2.length).fill(0)
    let ansArr = []
    for(let i=0; i<arr1.length; i++){                   //  Running loop on first arr for fixing element T.C - O(n1)
        for(let  j=0; j<arr2.length; j++){                 // loop for checking if element present in 2nd arr  T.C - O(n2)
            if(arr1[i] == arr2[j] && visitedArr[j] == 0){       //compare element and also check if match element of 2nd arr is already visited or not
                ansArr.push(arr1[i])
                visitedArr[j] = 1                              // after picking of element just update that index value on visited arr
                break;
            }
            if(arr2[j] > arr1[i]){                      // if element of first arr is greater than 2nd arr element then break 
                break;                                  // because after that no need to check further
            }
        }
    }
    return ansArr;
}



//2> Optimal solution T.C-(O(N + M)) S.C-O(N + M)

function unionOfArray(arr1,arr2, n){  
 let n = arr1.length;
 let m = arr2.length;
 let i=0; 
 let j=0
let ans = []

 while(i<n && j<m){                                                 //T.C - O(N + M)
    if(arr[i] <= arr[j]){
        if(ans.length == 0 && ans[ans.length-1] != arr[i]){         // compare ith element in first arr wiht jth of second and put it into ans arr acc condition.
            ans.push(arr[i])                                        
        }                                                           
        i++;
    }else{
         if(ans.length == 0 && ans[ans.length-1] != arr[j]){           // compare ith element in first arr wiht jth of second and put it into ans arr acc condition.
            ans.push(arr[j])
        }
        j++;
    }
 }

 while(i<n){
        if(ans.length == 0 && ans[ans.length-1] != arr[i]){                //push rest of the element if present
            ans.push(arr[i])
        }
        i++;
 }

 while(j<m){
         if(ans.length == 0 && ans[ans.length-1] != arr[j]){                //push rest of the element if present
            ans.push(arr[j])
        }
        j++;
 }

 return ans
}
