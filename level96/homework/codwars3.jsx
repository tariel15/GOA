//https://leetcode.com/problems/wildcard-matching/description/
var isMatch = function (s, p) {
    let i = 0, j = 0;
    let starIndex = -1;
    let match = 0;

    while (i < s.length) {
        if (j < p.length && (p[j] === s[i] || p[j] === '?')) {
            i++;
            j++;
        }
        else if (j < p.length && p[j] === '*') {
            starIndex = j;
            match = i;
            j++;
        }
        
        else if (starIndex !== -1) {
            j = starIndex + 1;
            match++;
            i = match;
        }
        else {
            return false;
        }
    }

    while (j < p.length && p[j] === '*') {
        j++;
    }

    return j === p.length;
};
