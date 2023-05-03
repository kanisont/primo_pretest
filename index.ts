function merge(collection_1: number[], collection_2: number[]): number[] {
    let sortedClt: number[] = [];
    let i = 0;
    let j = 0;
    
    for (let k = 0; k < (collection_1.length + collection_2.length); k++) {
        if (collection_1[i] <= collection_2[j]) {
            sortedClt.push(collection_1[i]);
            i++;
            if (i == collection_1.length) {
                for (let k = j; k < collection_2.length; k++) {
                    sortedClt.push(collection_2[k]);
                }
                return sortedClt;
            }
        }
        if (collection_2[j] < collection_1[i]) {
            sortedClt.push(collection_2[j]);
            j++;
            if (j == collection_2.length) {
                for (let k = i; k < collection_1.length; k++) {
                    sortedClt.push(collection_1[k]);
                }
                return sortedClt;
            }
        }
    }
    return sortedClt;
}

let arr1: number[] = [10, 50, 60, 90];
let arr2: number[] = [20, 30, 40, 70, 80];

let s: number[] = merge(arr1,arr2);

console.log(s);
