// $(window).ready(function() {
//     alert("This is a desktop-only website");} 
// );

$(window).keydown(function(event) {
    if (event.keyCode == 191) {
        $(".button").click();
    }
});

$(".button").click(function() {
    alert('Step on KEYS to choose your destination. Jump on ENTER if you are ready to go');
});

$(window).keydown(function (evt) {
    if (evt.which == 68) {
        $(".map").toggleClass("one");
        $(".map").removeClass("two");
        $(".map").removeClass("three");
        $(".map").removeClass("four");
        $(".map").removeClass("five");

        $("#durham").css('visibility','visible');
        $("#durham").css('opacity','1');

        // $("#congo").css('visibility','hidden');
        // $("#east_turkestan").css('visibility','hidden');
        // $("#ethiopia").css('visibility','hidden');
        // $("#nigeria").css('visibility','hidden');
        // $("#north_korea").css('visibility','hidden');
        // $("#somalia").css('visibility','hidden');
    }
});

$(window).keydown(function (evt) {
    if (evt.which == 50) {
        $(".map").removeClass("one");
        $(".map").toggleClass("two");
        $(".map").removeClass("three");
        $(".map").removeClass("four");
        $(".map").removeClass("five");

        $(".destination").css('opacity','1');

        $("#congo").css('visibility','visible');
        $("#congo").css('opacity','1');

        $("#palestine").css('visibility','hidden');
        $("#east_turkestan").css('visibility','hidden');
        $("#ethiopia").css('visibility','hidden');
        $("#nigeria").css('visibility','hidden');
        $("#north_korea").css('visibility','hidden');
        $("#somalia").css('visibility','hidden');
    }
});

$(window).keydown(function (evt) {
    if (evt.which == 51) {
        $(".map").removeClass("one");
        $(".map").removeClass("two");
        $(".map").toggleClass("three");
        $(".map").removeClass("four");
        $(".map").removeClass("five");

        $(".destination").css('opacity','1');

        $("#east_turkestan").css('visibility','visible');
        $("#east_turkestan").css('opacity','1');

        $("#palestine").css('visibility','hidden');
        $("#congo").css('visibility','hidden');
        $("#ethiopia").css('visibility','hidden');
        $("#nigeria").css('visibility','hidden');
        $("#north_korea").css('visibility','hidden');
        $("#somalia").css('visibility','hidden');
    }
});

$(window).keydown(function (evt) {
    if (evt.which == 52) {
        $(".map").removeClass("one");
        $(".map").removeClass("two");
        $(".map").removeClass("three");
        $(".map").toggleClass("four");
        $(".map").removeClass("five");

        $(".destination").css('opacity','1');

        $("#ethiopia").css('visibility','visible');
        $("#ethiopia").css('opacity','1');

        $("#palestine").css('visibility','hidden');
        $("#congo").css('visibility','hidden');
        $("#east_turkestan").css('visibility','hidden');
        $("#nigeria").css('visibility','hidden');
        $("#north_korea").css('visibility','hidden');
        $("#somalia").css('visibility','hidden');
    }
});

$(window).keydown(function (evt) {
    if (evt.which == 53) {
        $(".map").removeClass("one");
        $(".map").removeClass("two");
        $(".map").removeClass("three");
        $(".map").removeClass("four");
        $(".map").toggleClass("five");

        $(".destination").css('opacity','1');

        $("#nigeria").css('visibility','visible');
        $("#nigeria").css('opacity','1');

        $("#palestine").css('visibility','hidden');
        $("#congo").css('visibility','hidden');
        $("#east_turkestan").css('visibility','hidden');
        $("#ethiopia").css('visibility','hidden');
        $("#north_korea").css('visibility','hidden');
        $("#somalia").css('visibility','hidden');
    }
});

$(window).keydown(function (evt) {
    if (evt.which == 13) {
        if ($(".map").hasClass("one")) {
            $("a")[0].click();
            console.log('enter pressed');
          }
        else if ($(".map").hasClass("two")) {
            $("a")[0].click();
            console.log('enter pressed');
          }
        }
    });

