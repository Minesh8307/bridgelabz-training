function countVowelsConsonants(str) {
    let vowels = "aeiouAEIOU";
    let vCount = 0, cCount = 0;

    for (let ch of str) {
        if (/[a-zA-Z]/.test(ch)) {
            if (vowels.includes(ch)) vCount++;
            else cCount++;
        }
    }
    console.log("Vowels:", vCount, "Consonants:", cCount);
}

countVowelsConsonants("Hello World");
