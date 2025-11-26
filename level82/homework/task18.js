console.log("===== TASK 18: Count words using forEach =====");
const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
const wordCount = {};--
words.forEach(word => {
    if (wordCount[word]) {
        wordCount[word]++;
    } else {
        wordCount[word] = 1;
    }
});

console.log("Word counts:", wordCount);
