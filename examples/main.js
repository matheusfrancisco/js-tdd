import * as R from 'ramda';

const arr1 = [1,12,2,2,21,1,1,1,2,3,4,5];
const arr2 = [5,6,7,8,1,1,1,2,3,4,5,6,7];

const arr3 = R.union(arr1,arr2);
console.log(arr3);

