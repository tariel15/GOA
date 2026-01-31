//https://leetcode.com/problems/longest-palindromic-substring/
var longestPalindrome = function (s) {
    if (s.length < 2) return s;

    let longest = "";

    function expand(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.slice(left + 1, right);
    }

    for (let i = 0; i < s.length; i++) {
        // odd length palindrome
        const p1 = expand(i, i);
        // even length palindrome
        const p2 = expand(i, i + 1);

        if (p1.length > longest.length) longest = p1;
        if (p2.length > longest.length) longest = p2;
    }

    return longest;
};
