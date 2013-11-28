document.addEventListener('DOMContentLoaded', function () {
    chrome.runtime.sendMessage({}, function (response) {
        document.getElementById('replacement').value = response.replacement;
    });
    var button = document.getElementById('setOptions');
    button.addEventListener('click', setReplacement, false);
});


function setReplacement () {
    var replacement = document.getElementById('replacement').value;
    chrome.runtime.sendMessage({ replacement: replacement });

    return false;
}
