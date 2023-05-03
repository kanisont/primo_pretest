function merge(collection_1, collection_2) {
    var sortedClt = [];
    var i = 0;
    var j = 0;
    for (var k = 0; k < (collection_1.length + collection_2.length); k++) {
        if (collection_1[i] <= collection_2[j]) {
            sortedClt.push(collection_1[i]);
            i++;
            if (i == collection_1.length) {
                for (var k_1 = j; k_1 < collection_2.length; k_1++) {
                    sortedClt.push(collection_2[k_1]);
                }
                return sortedClt;
            }
        }
        if (collection_2[j] < collection_1[i]) {
            sortedClt.push(collection_2[j]);
            j++;
            if (j == collection_2.length) {
                for (var k_2 = i; k_2 < collection_1.length; k_2++) {
                    sortedClt.push(collection_1[k_2]);
                }
                return sortedClt;
            }
        }
    }
    return sortedClt;
}
var arr1 = [10, 50, 60, 90];
var arr2 = [20, 30, 40, 70, 80];
var s = merge(arr1, arr2);
console.log(s);
