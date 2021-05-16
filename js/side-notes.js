$( document ).ready(function() {
    var footnotes = $(".footnotes p");
    $("sup").each(function(index){

    	// Remove the return link at the end of each footnote.
        var fn = footnotes[index].removeChild(footnotes[index].lastChild);

        // Copy footnotes and place it in the side note margin.
        $(this).replaceWith("<label for='"+index+"' class='margin-toggle sidenote-number'></label><input type='checkbox' id='"+index+"' class='margin-toggle'/><span class='sidenote'>"+footnotes[index].innerHTML+"</span>")
    });   
    
    // Hide footnotes at the bottom of the page.
    // $(".footnotes").hide()
});