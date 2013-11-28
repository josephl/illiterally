if (typeof localStorage['replacement'] === 'undefined') {
    localStorage['replacement'] = '';
}

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (typeof request.replacement !== 'undefined') {
            localStorage['replacement'] = request.replacement;
        }
        else {
            var replacement = localStorage['replacement'];
            sendResponse({ "replacement": replacement });
        }
    });
