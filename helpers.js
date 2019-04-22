forecasts_url = 'http://localhost:8080/api/forecasts';
forecasts_url = 'http://sf-pyw.mosyag.in/m04/api/forecasts';

$('#main-header').click(function () {
    $.getJSON(forecasts_url, function (data) {
        set_content_in_divs(data['prophecies']);
    });
});

function set_content_in_divs(paragraphs) {
    $.each(paragraphs, function (i, d) {
        p = $("#p-" + i);
        p.html("<p>" + d + "</p>");
    });
}

function set_secret_message(msg) {
    p = $('#second-paragraph');
    p.html(msg);
    p.css('color', 'green');
}