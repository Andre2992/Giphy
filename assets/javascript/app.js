$(document).ready(function () {


    var topics = ['nike', 'puma', 'adidas', 'converse'];
    var limit = 10;

    function buttons() {
        $('#button').empty()

        for (var i = 0; i < Topics.length; i++) {
            var button = $("<button>");
            btn.addClass("topic");
            btn.attr("data-topic", Topics[i]);
            btn.text(Topics[i]);
            $("#button-section").prepend(btn);
            $("#gif").val('');

        }
    };
});