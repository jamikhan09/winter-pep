// Debounce Function: Implement a debounce function that limits the frequency of a function's execution when called repeatedly within a 
// specified time frame. This is useful in scenarios like resizing or scrolling events.

function debounce(func, delay) {
    let timer;
    return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
    };
}
const onResize = debounce(() => {
    console.log("Resize event handled!");
}, 300);

window.addEventListener("resize", onResize);


// Longest Substring Without Repeating Characters: Find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s) {
    let charSet = new Set();
    let left = 0, maxLength = 0;

for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
        charSet.delete(s[left]);
        left++;
}
    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
}

    return maxLength;
}
const str = "abcabcbb";
console.log(lengthOfLongestSubstring(str)); // Output: 3 (substring: "abc")


// Group Anagrams: Given an array of strings, group them into anagrams.
function groupAnagrams(strs) {
    const map = new Map();

for (let str of strs) {
const sorted = str.split("").sort().join("");
if (!map.has(sorted)) {
        map.set(sorted, []);
}
map.get(sorted).push(str);
}

return Array.from(map.values());
}

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(words));



