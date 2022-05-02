

// Node.js program to demonstrate
// the fs.readFile() method
  
// Include fs module
var fs = require('fs');
const remote_file = ''
  
fs.readFile('countinversion.txt', function(err, data) {
    if(err) throw err;
let realInteger = []

    const arr = data.toString().replace(/\r\n/g,'\n').split('\n');
    arr.forEach(a=>realInteger.push(parseInt(a)))
   // console.log(arr.filter(e=>e==4))
    // console.log(countInversions(realInteger));
    console.log(mergeSortAndCount(realInteger, 0, arr.length - 1));
});

  
console.log('readFile called');

let count = 0;
let pair = []
function merge(arr1, arr2) {
  arr1  = Array.from(arr1)
  arr2  = Array.from(arr2)
     let sorted = [];
let countsplit = 0;
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
sorted.push(arr1.shift());
}
    else {
countsplit+=arr1.length;
sorted.push(arr2.shift());
  }
}

  return {
	sorted: sorted.concat(arr1.slice().concat(arr2.slice())),
	countsplit
};
}

const mergeSort = arr => {
  arr = Array.from(arr)
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2),
      left = mergeSort(arr.slice(0, mid)),
      right = mergeSort(arr.slice(mid));

  return merge(left, right); 
};

array = [1,3,5,2,4,6];
// console.log(mergeSort(array));
// console.log(pair);

// brute-force
function countInversions(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]>arr[j] )sum++;
        }
    }
    return sum;
}



  // Function to count the number of inversions
    // during the merge process
    function mergeAndCount(arr,l,m,r)
    {
     
        // Left subarray
        let left = [];
        for(let i = l; i < m + 1; i++)
        {
            left.push(arr[i]);
             
        }
         
        // Right subarray
        let right = [];
        for(let i = m + 1; i < r + 1; i++)
        {
            right.push(arr[i]);
        }
        let i = 0, j = 0, k = l, swaps = 0;
        while (i < left.length && j < right.length)
        {
            if (left[i] <= right[j])
            {
                arr[k++] = left[i++];
            }
            else
            {
                arr[k++] = right[j++];
                swaps += (m + 1) - (l + i);
            }
        }
        while (i < left.length)
        {
            arr[k++] = left[i++];
        }
        while (j < right.length)
        {
            arr[k++] = right[j++];
        }
        return swaps;
    }
     
    // Merge sort function
    function mergeSortAndCount(arr, l, r)
    {
         
        // Keeps track of the inversion count at a
        // particular node of the recursion tree
        let count = 0;
        if (l < r)
        {
            let m = Math.floor((l + r) / 2);
             
            // Total inversion count = left subarray count
            // + right subarray count + merge count
             
            // Left subarray count
            count += mergeSortAndCount(arr, l, m);
             
            // Right subarray count
            count += mergeSortAndCount(arr, m + 1, r);
             
            // Merge count
            count += mergeAndCount(arr, l, m, r);
        }
        return count;
    }
     
    // Driver code
    let arr= new Array(1, 20, 6, 4, 5 );
    // console.log(mergeSortAndCount(arr, 0, arr.length - 1));
