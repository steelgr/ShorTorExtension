document.addEventListener('DOMContentLoaded', function(event) {
    var test = document.getElementById('titlos');
    chrome.tabs.query({
        'active': true,
        'lastFocusedWindow': true
    }, function(tab) {
        $.ajax({
            url: 'http://127.0.0.1:5000/new',
            type: 'post',
            data: {
                link: tab[0].url
            },
            headers: {
                Accept: 'application/json'
            },
            dataType: 'json',
            success: function(data){
                console.log(data)
                test.textContent = data["link"];

            }
        });
    });
});
