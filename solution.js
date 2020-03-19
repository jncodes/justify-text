const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const addSpaces = function (line, charCount, max) {
    if (charCount === max) return line.join(" ");
    while (charCount !== max) {
        for (let i = 0; i < line.length - 1; i++) {
            line[i] = line[i] + " ";
            charCount++;
            if (charCount === max) return line.join(" ");
        }
    }
}

const printThirtyChars = function (string) {
    const words = string.split(" ");
    const maxChars = 30;
    let currCharCount = 0;
    let line = [];
    let minSpace;
    words.forEach(word => {
        line.length > 0 ? minSpace = 1 : minSpace = 0;
        let nextCharCount = word.length + currCharCount + minSpace;
        if (nextCharCount < maxChars) {
            line.push(word);
            currCharCount += word.length + minSpace;
        } else {
            let thirtyCharLine = addSpaces(line, currCharCount, maxChars);
            console.log(thirtyCharLine);
            line = [word];
            currCharCount = word.length;
        }
    });
    let lastLine = addSpaces(line, currCharCount, maxChars);
    console.log(lastLine);
}

printThirtyChars(lorem);