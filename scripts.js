//index//

// $(window).keydown(function (evt){
//         if(evt.keyCode == 191){
//             alert('Step on NUMBER KEYS to choose your destination. Jump on ENTER if you are ready to go');
//         }
// });

$(window).keydown(function(event) {
    if (event.keyCode == 191) {
        $(".button").click();
    }
});

$(".button").click(function() {
    alert('Step on NUMBER KEYS to choose your destination. Jump on ENTER if you are ready to go');
});

$(window).keydown(function (evt) {
    if (evt.which == 49) {
        $(".map").toggleClass("one");
        $(".destination").css('opacity','1');

        $("#palestine").css('visibility','visible');
        $("#palestine").css('opacity','1');

        $("#two").css('visibility','hidden');
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
        }});


$(window).keydown(function (evt) {
    if (evt.which == 50) {
        $(".map").toggleClass("one");
        $("#one").css('visibility','hidden');
        $("#two").css('visibility','visible');
    }
});

//pages//

$(window).keydown(function (evt) {
    if (evt.which == 192) {
        $("#tilde").css('opacity','0');
    }
    else if (evt.which == 49) {
        $("#1").css('opacity','0');
    }
    else if (evt.which == 50) {
        $("#2").css('opacity','0');
    }
    else if (evt.which == 51) {
        $("#3").css('opacity','0');
    }
    else if (evt.which == 52) {
        $("#4").css('opacity','0');
    }
    else if (evt.which == 53) {
        $("#5").css('opacity','0');
    }
    else if (evt.which == 54) {
        $("#6").css('opacity','0');
    }
    else if (evt.which == 55) {
        $("#7").css('opacity','0');
    }
    else if (evt.which == 56) {
        $("#8").css('opacity','0');
    }
    else if (evt.which == 57) {
        $("#9").css('opacity','0');
    }
    else if (evt.which == 48) {
        $("#0").css('opacity','0');
    }
    else if (evt.which == 189) {
        $("#minus").css('opacity','0');
    }
    else if (evt.which == 187) {
        $("#plus").css('opacity','0');
    }
    else if (evt.which == 8) {
        $("#back").css('opacity','0');
    }
});

$(window).keydown(function (evt) {
    if (evt.which == 9) {
      evt.preventDefault();
      $("#tab").css('opacity','0');
      console.log("tabrest");
      return;
    }
    else if (evt.which == 81) {
        $("#q").css('opacity','0');
    }
    else if (evt.which == 87) {
        $("#w").css('opacity','0');
    }
    else if (evt.which == 69) {
        $("#e").css('opacity','0');
    }
    else if (evt.which == 82) {
        $("#r").css('opacity','0');
    }
    else if (evt.which == 84) {
        $("#t").css('opacity','0');
    }
    else if (evt.which == 89) {
        $("#y").css('opacity','0');
    }
    else if (evt.which == 85) {
        $("#u").css('opacity','0');
    }
    else if (evt.which == 73) {
        $("#i").css('opacity','0');
    }
    else if (evt.which == 79) {
        $("#o").css('opacity','0');
    }
    else if (evt.which == 80) {
        $("#p").css('opacity','0');
    }
    else if (evt.which == 219) {
        $("#bracket-l").css('opacity','0');
    }
    else if (evt.which == 221) {
        $("#bracket-r").css('opacity','0');
    }
    else if (evt.which == 220) {
        $("#backslash").css('opacity','0');
    }
});

$(window).keydown(function (evt) {
    if (evt.which == 20) {
      $("#caps").css('opacity','0');
    }
    else if (evt.which == 65) {
        $("#A").css('opacity','0');
    }
    else if (evt.which == 83) {
        $("#S").css('opacity','0');
    }
    else if (evt.which == 68) {
        $("#D").css('opacity','0');
    }
    else if (evt.which == 70) {
        $("#F").css('opacity','0');
    }
    else if (evt.which == 71) {
        $("#G").css('opacity','0');
    }
    else if (evt.which == 72) {
        $("#H").css('opacity','0');
    }
    else if (evt.which == 74) {
        $("#J").css('opacity','0');
    }
    else if (evt.which == 75) {
        $("#K").css('opacity','0');
    }
    else if (evt.which == 76) {
        $("#L").css('opacity','0');
    }
    else if (evt.which == 186) {
        $("#colon").css('opacity','0');
    }
    else if (evt.which == 222) {
        $("#apostrophe").css('opacity','0');
    }
    else if (evt.which == 13) {
        $("#enter").css('opacity','0');
    }
});
$(window).keydown(function (evt) {
    if (evt.which == 16) {
        {if (event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT){
    $("#left-shift").css('opacity','0')};
        if (event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT){
    $("#right-shift").css('opacity','0')};
        }
    }
    else if (evt.which == 90) {
        $("#Z").css('opacity','0');
    }
    else if (evt.which == 88) {
        $("#X").css('opacity','0');
    }
    else if (evt.which == 67) {
        $("#C").css('opacity','0');
    }
    else if (evt.which == 86) {
        $("#V").css('opacity','0');
    }
    else if (evt.which == 66) {
        $("#B").css('opacity','0');
    }
    else if (evt.which == 78) {
        $("#N").css('opacity','0');
    }
    else if (evt.which == 77) {
        $("#M").css('opacity','0');
    }
    else if (evt.which == 188) {
        $("#comma").css('opacity','0');
    }
    else if (evt.which == 190) {
        $("#dot").css('opacity','0');
    }
    else if (evt.which == 191) {
        $("#slash").css('opacity','0');
    }

});
$(window).keydown(function (evt) {
    if (evt.which == 17) {
      $("#ctrl").css('opacity','0');
    }
    else if (evt.which == 18) {
        $("#alt-l").css('opacity','0');
        $("#alt-r").css('opacity','0');
    }
    else if (evt.which == 91) {
        $("#comm-l").css('opacity','0');
    }
    else if (evt.which == 32) {
        $("#space").css('opacity','0');
    }
    else if (evt.which == 93) {
        $("#comm-r").css('opacity','0');
    }   
    else if (evt.which == 37) {
        $("#left").css('opacity','0');
    }
    else if (evt.which == 38) {
        $("#up").css('opacity','0');
    }
    else if (evt.which == 40) {
        $("#down").css('opacity','0');
    }
    else if (evt.which == 39) {
        $("#right").css('opacity','0');
    }
});