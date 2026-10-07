/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
     let start = 0;
    let maxLength = 1;

    function expand(left, right) {

        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            let length = right - left + 1;

            if (length > maxLength) {
                start = left;
                maxLength = length;
            }

            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {

        // Odd length palindrome
        expand(i, i);

        // Even length palindrome
        expand(i, i + 1);
    }

    return s.substring(start, start + maxLength);
};