$(window).keydown(function(event) {
    if (event.keyCode == 49) {
        $(".button").click();
    }
});

$(".button").click(function() {
    alert('Be Careful! Each step is important!');
});

$(window).keydown(function (evt) {
    if (evt.which == 192) {
        if ($("#tilde").hasClass("reveal")) {
            if ($("#tilde-2").hasClass("reveal")) {
                $("#tilde-3").addClass("reveal")}
            $("#tilde-2").addClass("reveal")}         
        $("#tilde").addClass("reveal")
    }    

    else if (evt.which == 49) {
        if ($("#1").hasClass("reveal")) {
            if ($("#1-2").hasClass("reveal")) {
                $("#1-3").addClass("reveal")}
            $("#1-2").addClass("reveal")}         
        $("#1").addClass("reveal")
    }

    else if (evt.which == 50) {
        if ($("#2").hasClass("reveal")) {
            if ($("#2-2").hasClass("reveal")) {
                $("#2-3").addClass("reveal")}
            $("#2-2").addClass("reveal")}         
        $("#2").addClass("reveal")    
    }

    else if (evt.which == 51) {
        if ($("#3").hasClass("reveal")) {
            if ($("#3-2").hasClass("reveal")) {
                $("#3-3").addClass("reveal")}
            $("#3-2").addClass("reveal")}         
        $("#3").addClass("reveal") 
    }

    else if (evt.which == 52) {
        if ($("#4").hasClass("reveal")) {
            if ($("#4-2").hasClass("reveal")) {
                $("#4-3").addClass("reveal")}
            $("#4-2").addClass("reveal")}         
        $("#4").addClass("reveal") 
    }

    else if (evt.which == 53) {
        if ($("#5").hasClass("reveal")) {
            if ($("#5-2").hasClass("reveal")) {
                $("#5-3").addClass("reveal")}
            $("#5-2").addClass("reveal")}         
        $("#5").addClass("reveal") 
    }

    else if (evt.which == 54) {
        if ($("#6").hasClass("reveal")) {
            if ($("#6-2").hasClass("reveal")) {
                $("#6-3").addClass("reveal")}
            $("#6-2").addClass("reveal")}         
        $("#6").addClass("reveal") 
    }

    else if (evt.which == 55) {
        if ($("#7").hasClass("reveal")) {
            if ($("#7-2").hasClass("reveal")) {
                $("#7-3").addClass("reveal")}
            $("#7-2").addClass("reveal")}         
        $("#7").addClass("reveal") 
    }

    else if (evt.which == 56) {
        if ($("#8").hasClass("reveal")) {
            if ($("#8-2").hasClass("reveal")) {
                $("#8-3").addClass("reveal")}
            $("#8-2").addClass("reveal")}         
        $("#8").addClass("reveal") 
    }    

    else if (evt.which == 57) {
        if ($("#9").hasClass("reveal")) {
            if ($("#9-2").hasClass("reveal")) {
                $("#9-3").addClass("reveal")}
            $("#9-2").addClass("reveal")}         
        $("#9").addClass("reveal") 
    }

    else if (evt.which == 48) {
        if ($("#0").hasClass("reveal")) {
            if ($("#0-2").hasClass("reveal")) {
                $("#0-3").addClass("reveal")}
            $("#0-2").addClass("reveal")}         
        $("#0").addClass("reveal") 
    }

    else if (evt.which == 189) {
        if ($("#minus").hasClass("reveal")) {
            if ($("#minus-2").hasClass("reveal")) {
                $("#minus-3").addClass("reveal")}
            $("#minus-2").addClass("reveal")}         
        $("#minus").addClass("reveal") 
    }

    else if (evt.which == 187) {
        if ($("#plus").hasClass("reveal")) {
            if ($("#plus-2").hasClass("reveal")) {
                $("#plus-3").addClass("reveal")}
            $("#plus-2").addClass("reveal")}         
        $("#plus").addClass("reveal") 
    }

    else if (evt.which == 8) {
        if ($("#back").hasClass("reveal")) {
            if ($("#back-2").hasClass("reveal")) {
                $("#back-3").addClass("reveal")}
            $("#back-2").addClass("reveal")}         
        $("#back").addClass("reveal") 
    }
});

$(window).keydown(function (evt) {
    if (evt.which == 9) {
        if ($("#tab").hasClass("reveal")) {
            if ($("#tab-2").hasClass("reveal")) {
                $("#tab-3").addClass("reveal")}
            $("#tab-2").addClass("reveal")}         
        $("#tab").addClass("reveal") 

      evt.preventDefault();
      console.log("tabrest");
      return;
    }

    else if (evt.which == 81) {
        if ($("#q").hasClass("reveal")) {
            if ($("#q-2").hasClass("reveal")) {
                $("#q-3").addClass("reveal")}
            $("#q-2").addClass("reveal")}         
        $("#q").addClass("reveal")
    }

    else if (evt.which == 87) {
        if ($("#w").hasClass("reveal")) {
            if ($("#w-2").hasClass("reveal")) {
                $("#w-3").addClass("reveal")}
            $("#w-2").addClass("reveal")}         
        $("#w").addClass("reveal")
    }

    else if (evt.which == 69) {
        if ($("#e").hasClass("reveal")) {
            if ($("#e-2").hasClass("reveal")) {
                $("#e-3").addClass("reveal")}
            $("#e-2").addClass("reveal")}         
        $("#e").addClass("reveal")
    }

    else if (evt.which == 82) {
        if ($("#r").hasClass("reveal")) {
            if ($("#r-2").hasClass("reveal")) {
                $("#r-3").addClass("reveal")}
            $("#r-2").addClass("reveal")}         
        $("#r").addClass("reveal")
    }

    else if (evt.which == 84) {
        if ($("#t").hasClass("reveal")) {
            if ($("#t-2").hasClass("reveal")) {
                $("#t-3").addClass("reveal")}
            $("#t-2").addClass("reveal")}         
        $("#t").addClass("reveal")
    }

    else if (evt.which == 89) {
        if ($("#y").hasClass("reveal")) {
            if ($("#y-2").hasClass("reveal")) {
                $("#y-3").addClass("reveal")}
            $("#y-2").addClass("reveal")}         
        $("#y").addClass("reveal")
    }

    else if (evt.which == 85) {
        if ($("#u").hasClass("reveal")) {
            if ($("#u-2").hasClass("reveal")) {
                $("#u-3").addClass("reveal")}
            $("#u-2").addClass("reveal")}         
        $("#u").addClass("reveal")
    }

    else if (evt.which == 73) {
        if ($("#i").hasClass("reveal")) {
            if ($("#i-2").hasClass("reveal")) {
                $("#i-3").addClass("reveal")}
            $("#i-2").addClass("reveal")}         
        $("#i").addClass("reveal")
    }

    else if (evt.which == 79) {
        if ($("#o").hasClass("reveal")) {
            if ($("#o-2").hasClass("reveal")) {
                $("#o-3").addClass("reveal")}
            $("#o-2").addClass("reveal")}         
        $("#o").addClass("reveal")
    }

    else if (evt.which == 80) {
        if ($("#p").hasClass("reveal")) {
            if ($("#p-2").hasClass("reveal")) {
                $("#p-3").addClass("reveal")}
            $("#p-2").addClass("reveal")}         
        $("#p").addClass("reveal")
    }

    else if (evt.which == 219) {
        if ($("#bracket-l").hasClass("reveal")) {
            if ($("#bracket-l-2").hasClass("reveal")) {
                $("#bracket-l-3").addClass("reveal")}
            $("#bracket-l-2").addClass("reveal")}         
        $("#bracket-l").addClass("reveal")
    }

    else if (evt.which == 221) {
        if ($("#bracket-r").hasClass("reveal")) {
            if ($("#bracket-r-2").hasClass("reveal")) {
                $("#bracket-r-3").addClass("reveal")}
            $("#bracket-r-2").addClass("reveal")}         
        $("#bracket-r").addClass("reveal")
    }

    else if (evt.which == 220) {
        if ($("#backslash").hasClass("reveal")) {
            if ($("#backslash-2").hasClass("reveal")) {
                $("#backslash-3").addClass("reveal")}
            $("#backslash-2").addClass("reveal")}         
        $("#backslash").addClass("reveal")
    }

});

$(window).keydown(function (evt) {
    if (evt.which == 20) {
        if ($("#caps").hasClass("reveal")) {
            if ($("#caps-2").hasClass("reveal")) {
                $("#caps-3").addClass("reveal")}
            $("#caps-2").addClass("reveal")}         
        $("#caps").addClass("reveal")
    }

    else if (evt.which == 65) {
        if ($("#A").hasClass("reveal")) {
            if ($("#A-2").hasClass("reveal")) {
                $("#A-3").addClass("reveal")}
            $("#A-2").addClass("reveal")}         
        $("#A").addClass("reveal")
    }    

    else if (evt.which == 83) {
        if ($("#S").hasClass("reveal")) {
            if ($("#S-2").hasClass("reveal")) {
                $("#S-3").addClass("reveal")}
            $("#S-2").addClass("reveal")}         
        $("#S").addClass("reveal")
    }

    else if (evt.which == 68) {
        if ($("#D").hasClass("reveal")) {
            if ($("#D-2").hasClass("reveal")) {
                $("#D-3").addClass("reveal")}
            $("#D-2").addClass("reveal")}         
        $("#D").addClass("reveal")
    }    

    else if (evt.which == 70) {
        if ($("#F").hasClass("reveal")) {
            if ($("#F-2").hasClass("reveal")) {
                $("#F-3").addClass("reveal")}
            $("#F-2").addClass("reveal")}         
        $("#F").addClass("reveal")
    }

    else if (evt.which == 71) {
        if ($("#G").hasClass("reveal")) {
            if ($("#G-2").hasClass("reveal")) {
                $("#G-3").addClass("reveal")}
            $("#G-2").addClass("reveal")}         
        $("#G").addClass("reveal")
    }

    else if (evt.which == 72) {
        if ($("#H").hasClass("reveal")) {
            if ($("#H-2").hasClass("reveal")) {
                $("#H-3").addClass("reveal")}
            $("#H-2").addClass("reveal")}         
        $("#H").addClass("reveal")
    }    

    else if (evt.which == 74) {
        if ($("#J").hasClass("reveal")) {
            if ($("#J-2").hasClass("reveal")) {
                $("#J-3").addClass("reveal")}
            $("#J-2").addClass("reveal")}         
        $("#J").addClass("reveal")
    }

    else if (evt.which == 75) {
        if ($("#K").hasClass("reveal")) {
            if ($("#K-2").hasClass("reveal")) {
                $("#K-3").addClass("reveal")}
            $("#K-2").addClass("reveal")}         
        $("#K").addClass("reveal")
    }

    else if (evt.which == 76) {
        if ($("#L").hasClass("reveal")) {
            if ($("#L-2").hasClass("reveal")) {
                $("#L-3").addClass("reveal")}
            $("#L-2").addClass("reveal")}         
        $("#L").addClass("reveal")
    }    

    else if (evt.which == 186) {
        if ($("#colon").hasClass("reveal")) {
            if ($("#colon-2").hasClass("reveal")) {
                $("#colon-3").addClass("reveal")}
            $("#colon-2").addClass("reveal")}         
        $("#colon").addClass("reveal")
    }    

    else if (evt.which == 222) {
        if ($("#apostrophe").hasClass("reveal")) {
            if ($("#apostrophe-2").hasClass("reveal")) {
                $("#apostrophe-3").addClass("reveal")}
            $("#apostrophe-2").addClass("reveal")}         
        $("#apostrophe").addClass("reveal")    
    }

    else if (evt.which == 13) {
        if ($("#enter").hasClass("reveal")) {
            if ($("#enter-2").hasClass("reveal")) {
                $("#enter-3").addClass("reveal")}
            $("#enter-2").addClass("reveal")}         
        $("#enter").addClass("reveal")  
    }
});

$(window).keydown(function (evt) {
    if (evt.which == 16) {
        {if (event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT){
            if ($("#left-shift").hasClass("reveal")) {
                if ($("#left-shift-2").hasClass("reveal")) {
                    $("#left-shift-3").addClass("reveal")}
                $("#left-shift-2").addClass("reveal")}         
            $("#left-shift").addClass("reveal") };

        if (event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT){
            if ($("#right-shift").hasClass("reveal")) {
                if ($("#right-shift-2").hasClass("reveal")) {
                    $("#right-shift-3").addClass("reveal")}
                $("#right-shift-2").addClass("reveal")}         
            $("#right-shift").addClass("reveal") };
        }
    }
    else if (evt.which == 90) {
        if ($("#Z").hasClass("reveal")) {
            if ($("#Z-2").hasClass("reveal")) {
                $("#Z-3").addClass("reveal")}
            $("#Z-2").addClass("reveal")}         
        $("#Z").addClass("reveal")
    }
    else if (evt.which == 88) {
        if ($("#X").hasClass("reveal")) {
            if ($("#X-2").hasClass("reveal")) {
                $("#X-3").addClass("reveal")}
            $("#X-2").addClass("reveal")}         
        $("#X").addClass("reveal")
    }
    else if (evt.which == 67) {
        if ($("#C").hasClass("reveal")) {
            if ($("#C-2").hasClass("reveal")) {
                $("#C-3").addClass("reveal")}
            $("#C-2").addClass("reveal")}         
        $("#C").addClass("reveal")
    }
    else if (evt.which == 86) {
        if ($("#V").hasClass("reveal")) {
            if ($("#V-2").hasClass("reveal")) {
                $("#V-3").addClass("reveal")}
            $("#V-2").addClass("reveal")}         
        $("#V").addClass("reveal")
    }
    else if (evt.which == 66) {
        if ($("#B").hasClass("reveal")) {
            if ($("#B-2").hasClass("reveal")) {
                $("#B-3").addClass("reveal")}
            $("#B-2").addClass("reveal")}         
        $("#B").addClass("reveal")
    }
    else if (evt.which == 78) {
        if ($("#N").hasClass("reveal")) {
            if ($("#N-2").hasClass("reveal")) {
                $("#N-3").addClass("reveal")}
            $("#N-2").addClass("reveal")}         
        $("#N").addClass("reveal")
    }
    else if (evt.which == 77) {
        if ($("#M").hasClass("reveal")) {
            if ($("#M-2").hasClass("reveal")) {
                $("#M-3").addClass("reveal")}
            $("#M-2").addClass("reveal")}         
        $("#M").addClass("reveal")
    }
    else if (evt.which == 188) {
        if ($("#comma").hasClass("reveal")) {
            if ($("#comma-2").hasClass("reveal")) {
                $("#comma-3").addClass("reveal")}
            $("#comma-2").addClass("reveal")}         
        $("#comma").addClass("reveal")
    }
    else if (evt.which == 190) {
        if ($("#dot").hasClass("reveal")) {
            if ($("#dot-2").hasClass("reveal")) {
                $("#dot-3").addClass("reveal")}
            $("#dot-2").addClass("reveal")}         
        $("#dot").addClass("reveal")
    }
    else if (evt.which == 191) {
        if ($("#slash").hasClass("reveal")) {
            if ($("#slash-2").hasClass("reveal")) {
                $("#slash-3").addClass("reveal")}
            $("#slash-2").addClass("reveal")}         
        $("#slash").addClass("reveal")
    }
});

$(window).keydown(function (evt) {
    if (evt.which == 17)  {
            if ($("#ctrl-l").hasClass("reveal")) {
                if ($("#ctrl-l-2").hasClass("reveal")) {
                    $("#ctrl-l-3").addClass("reveal")}
                $("#ctrl-l-2").addClass("reveal")}         
            $("#ctrl-l").addClass("reveal")
                       
        if ($("#ctrl-r").hasClass("reveal")) {
            if ($("#ctrl-r-2").hasClass("reveal")) {
                $("#ctrl-r-3").addClass("reveal")}
            $("#ctrl-r-2").addClass("reveal")}         
        $("#ctrl-r").addClass("reveal")
        }   

    else if (evt.which == 18) {
        if ($("#alt-l").hasClass("reveal")) {
            if ($("#alt-l-2").hasClass("reveal")) {
                $("#alt-l-3").addClass("reveal")}
            $("#alt-l-2").addClass("reveal")}         
        $("#alt-l").addClass("reveal")
                   
        if ($("#alt-r").hasClass("reveal")) {
            if ($("#alt-r-2").hasClass("reveal")) {
                $("#alt-r-3").addClass("reveal")}
            $("#alt-r-2").addClass("reveal")}         
        $("#alt-r").addClass("reveal")
    }

    else if (evt.which == 91) {
        if ($("#comm-l").hasClass("reveal")) {
            if ($("#comm-l-2").hasClass("reveal")) {
                $("#comm-l-3").addClass("reveal")}
            $("#comm-l-2").addClass("reveal")}         
        $("#comm-l").addClass("reveal")
    }
    else if (evt.which == 32) {
        if ($("#space").hasClass("reveal")) {
            if ($("#space-2").hasClass("reveal")) {
                $("#space-3").addClass("reveal")}
            $("#space-2").addClass("reveal")}         
        $("#space").addClass("reveal")
    }
    else if (evt.which == 92) {
        if ($("#comm-r").hasClass("reveal")) {
            if ($("#comm-r-2").hasClass("reveal")) {
                $("#comm-r-3").addClass("reveal")}
            $("#comm-r-2").addClass("reveal")}         
        $("#comm-r").addClass("reveal")
    }
    else if (evt.which == 93) {
        if ($("#comm-r").hasClass("reveal")) {
            if ($("#comm-r-2").hasClass("reveal")) {
                $("#comm-r-3").addClass("reveal")}
            $("#comm-r-2").addClass("reveal")}         
        $("#comm-r").addClass("reveal")
    }   
    // else if (evt.which == 37) {
    //     $("#left").css('opacity','0');
    // }
    // else if (evt.which == 38) {
    //     $("#up").css('opacity','0');
    // }
    // else if (evt.which == 40) {
    //     $("#down").css('opacity','0');
    // }
    // else if (evt.which == 39) {
    //     $("#right").css('opacity','0');
    // }
});

