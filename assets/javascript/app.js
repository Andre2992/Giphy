$(document).ready(function() {


    var brands = ['nike', 'puma', 'adidas', 'converse'];
    var limit = 10;

    function displayGifs() {
        $('.gifsAppearHere').empty()
        var brand = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            brand + "&api_key=dc6zaTOxFJmzC&limit=" + limit;

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $('<div class="myGifs">');
    
                    var rating = results[i].rating;
    
                    var rat = $('<div class="rating">').text("Rating: " + rating);
    
                    var gifImage = $("<img>");
                    gifImage.attr("src", results[i].images.fixed_height.url);
    
                    gifDiv.append(gifImage);
                    gifDiv.append(rat);
    
                    $(".gifsAppearHere").append(gifDiv);
                    console.log(results[i].images.fixed_height.url)
                }
            });
        }

        function renderButtons() {
            $("#buttons-view").empty();
            for (var i = 0; i < brands.length; i++) {
                var a = $("<button>");
                a.addClass("brand");
                a.attr("data-name", brands[i]);
                a.text(brands[i]);
                $("#buttons-view").append(a);
            }
        }

        $("#add-brand").on("click", function (event) {
            event.preventDefault();

            var brand = $("gif-input").val().trim();

            brands.push(brand);

            renderButtons();
        });
    
        $("#add-brand").on("click", function (event) {
            event.preventDefault();
            parseInt($('#request-input'))
            limit = $('#request-input').val()
            displayGifs()
        });
        $(document).on("click", ".show", displayGifs);

        renderButtons();

    })