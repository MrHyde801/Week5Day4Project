let navWhite = $("a.navItem").css('color','white')

let navId = $('#nav').css('background-color','#145')

let evenList = $('li:even').css('background-color','#ccc')

let oddList = $('li:odd').css('background-color','#aaa')

$('input#myInput').each(function(){
    let elem = $(this);
    $(elem.val('Ian Hyde'))
})
