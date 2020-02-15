
//let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
// 16
function largestSubarraySum(array){
 // code to write here
 let maxtoCurr = array[0],max = array [0]
 for (let i=1; i<array.length; i++){
   maxtoCurr = Math.max(maxtoCurr + array[i], array[i])
   max = Math.max(max, maxtoCurr)
 }
 if (max < 0) return 0
 return max
}
