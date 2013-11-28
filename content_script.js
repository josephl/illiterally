var replacement = '',
    lowerLiterally = /\bl[Ii][Tt][Ee][Rr][Aa][Ll][Ll][Yy]\b/g,
    upperLiterally = /\bL[Ii][Tt][Ee][Rr][Aa][Ll][Ll][Yy]\b/g;
chrome.runtime.sendMessage({}, function (response) {
    replacement = response.replacement;
    document.title = replaceText(document.title);
    walk(document.body);
});

function walk(node) {
    // I stole this function from here:
    // http://is.gd/mwZp7E
    var child, next;

    switch (node.nodeType)  {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case 3: // Text node
            handleText(node);
            break;
    }
}

function handleText(textNode) {
    textNode.nodeValue = replaceText(textNode.nodeValue);
}

function replaceText(v) {
    return v.replace(lowerLiterally, replacement)
            .replace(upperLiterally, capitalize(replacement));
}

function capitalize (word) {
    if (word.length === 0) {
        return word;
    }
    return word[0].toUpperCase() + word.slice(1);
}

