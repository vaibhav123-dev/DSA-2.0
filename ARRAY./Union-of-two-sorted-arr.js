// Given two sorted arrays, find their union (merge two sorted arr).

Input: arr1 = [1, 3, 4, 5, 7]
        arr2 = [2, 3, 5, 6]

Output: [1, 2, 3, 4, 5, 6, 7]

// 1> Brute force approach T.C-(O(NLog(n) + MLog(n))) S.C-O(N)

function unionOfArray(arr1,arr2, n){
let newArray = new Set(...arr1, ...arr2)        
return  [...newArray]                           //S.C - O(N) if not consider return arr space use for returning ans otherwise O(N + N)
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
