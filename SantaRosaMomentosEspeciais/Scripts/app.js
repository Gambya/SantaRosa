/**
 * Created by Roberto on 25/04/2015.
 */

$(document).ready(function() {
    $('#pagepiling').pagepiling({
        menu: true,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 500,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#8C4F42',
            'bulletsColor': '#8C4F42',
            'position': 'right',
            'tooltips': ['Apresentação', 'Contato']
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){}
    });
    $('#submitcontato').click(function(){

        var dados = $('#envioEmail').serialize();
        var url = "../"
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '../script/email.php',
            async: true,
            data: dados,
            success: function(response) {
                location.reload();
            }
        });

        //$.ajax({
        //    type:"POST",
        //    dataType:'json',
        //    url: "script/email.php",
        //    async: true,
        //    data: data,
        //    success: function(response){
        //        console.log(response);
        //        location.reload();
        //    }
        //});
        return false;
    });
});
