$( function() {
    $( "#draggable" ).draggable({ containment: "#containment-wrapper", scroll: false });
} );

/*
 * Return draggable to original position
 */
//css3 transform bug with jquery ui drag - fixed(works fine whether position, absolute or relative)
var __dx;
var __dy;
var __scale=0.5;
var __recoupLeft, __recoupTop;

$("#draggable").draggable({
	containment: "#containment-wrapper",
	scroll: false,
    //revert: true,
    zIndex: 100,
    drag: function (event, ui) {
        //resize bug fix ui drag `enter code here`
        __dx = ui.position.left - ui.originalPosition.left;
        __dy = ui.position.top - ui.originalPosition.top;
        //ui.position.left = ui.originalPosition.left + ( __dx/__scale);
        //ui.position.top = ui.originalPosition.top + ( __dy/__scale );
        ui.position.left = ui.originalPosition.left + (__dx);
        ui.position.top = ui.originalPosition.top + (__dy);
        //
        ui.position.left += __recoupLeft;
        ui.position.top += __recoupTop;
    },
    start: function (event, ui) {
        $(this).css('cursor', 'pointer');
        //resize bug fix ui drag
        var left = parseInt($(this).css('left'), 10);
        left = isNaN(left) ? 0 : left;
        var top = parseInt($(this).css('top'), 10);
        top = isNaN(top) ? 0 : top;
        __recoupLeft = left - ui.position.left;
        __recoupTop = top - ui.position.top;
    },
    stop: function (event, ui) {
        $(this).css('cursor', 'default');
        //alternate to revert (don't use revert)
        $(this).animate({
            left: $(this).attr('oriLeft'),
            top: $(this).attr('oriTop')
        }, 500, 'easeOutQuint')
    },
    create: function (event, ui) {
        $(this).attr('oriLeft', $(this).css('left'));
        $(this).attr('oriTop', $(this).css('top'));
    }
});
//*/