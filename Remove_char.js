function removeChars(str1, str2) {
    let result = "";
    for (let ch of str1) {
        if (!str2.includes(ch)) {
            result += ch;
        }
    }
    return result;
}

console.log(removeChars("computer", "cat")); 
