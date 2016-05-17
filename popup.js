document.addEventListener('DOMContentLoaded', function(event) {
    var test = document.getElementById('result');
    chrome.storage.sync.get({
        APIURL: "http://l.daknob.net",
    }, function(items) {
        var APIURL = items.APIURL;
        chrome.tabs.query({
            'active': true,
            'lastFocusedWindow': true
        }, function(tab) {
            $.ajax({
                url: APIURL+'/new',
                type: 'post',
                data: {
                    link: tab[0].url
                },
                headers: {
                    Accept: 'application/json'
                },
                dataType: 'json',
                success: function(data) {
                    console.log(APIURL)
                    test.textContent = data["link"];

                }
            });
        });
    });
});
