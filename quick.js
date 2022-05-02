var fs = require("fs");

let totalComparisms = 0;
fs.readFile("quicksort.txt", function (err, data) {
  if (err) throw err;

  const arr = data.toString().replace(/\r\n/g, "\n").split("\n");
  // console.log(arr.filter(e=>e==4))
  console.log();
  QuickSort(arr);
  
});

function QuickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  totalComparisms += arr.length - 1;
//   const pivot = arr[arr.length - 1];
  const pivot = arr[0];
  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  console.log(totalComparisms);
  return [...QuickSort(leftArr), pivot, ...QuickSort(rightArr)];
}

const items = [1, 5, 2, 99, 81, 100, 144, 121, 91, 85, 74, 10];
//   console.log(QuickSort(items));
console.log(totalComparisms);
