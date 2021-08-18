$(document).ready(function() {
    $(".ham-menu").click(function() {
        if ($("nav").css("display") == "none") {
            $("nav").css("display", "block")
                // alert("make block")
        } else if ($("nav").css("display") == "block") {
            // alert("make none")
            $("nav").css("display", "none")
        }
    })

    $("#qualifications .col-md").hover(
        function() {
            $("#qualifications .col-md i").css("color", "white")
        },
        function() {
            $("#qualifications .col-md i").css("color", "#d5c455")
        }
    )
})