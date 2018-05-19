$(document).ready(function () {

    var brands = ["nike", "puma", "converse"];
    var limit= 10;

    function displayGifs() {
        $('.gifsAppearHere').empty()
        var brand = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            brand + "&api_key=qzU8Uj6qG1oQC27IJD500uNmiIHjbxkG&limit=" + limit;

        // Creates AJAX call for the specific button being clicked
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var gifDiv = $('<div class="myGifs">');

                var rating = results[i].rating;

                var rate = $('<div class="rating">').text("Rating: " + rating);

                var gifImage = $("<img>");
                gifImage.attr("src", results[i].images.fixed_height.url);

                gifDiv.append(gifImage);
                gifDiv.append(rate);

                $("#gifs-appear-here").append(gifDiv);
                console.log(results[i].images.fixed_height.url)
            }
        });
    }
    

    // Function for displaying brand data
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

    // This function handles events where the add brand button is clicked
    $("#add-brand").on("click", function (event) {
        event.preventDefault();
        // This line of code will grab the input from the textbox
        var brand = $("#brand-input").val().trim();

        // The brand from the textbox is then added to our array
        brands.push(brand);

        // Calling renderButtons which handles the processing of our brand array
        renderButtons();
    });

    $("#add-brand").on("click", function (event) {
        event.preventDefault();
        parseInt($('#request-input'))
        limit = $('#request-input').val()
        displayGifs()
    });


    // Adding click event listeners to all elements with a class of "brand"
    $(document).on("click", ".brand", displayGifs);

    // Calling the renderButtons function to display the intial buttons
    renderButtons();

});