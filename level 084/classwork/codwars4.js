//https://www.codewars.com/kata/51e704f2d8dbace389000279/train/javascript
function arraysSimilar(arr1, arr2) {
  arr1 = arr1.sort((a, b) => a - b);
    arr2 = arr2.sort((a, b) => a - b);
    if (arr1.length != arr2.length) {
        return false;
    } else {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        };
        return true;
    };
}