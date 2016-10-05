$(function () { buildToc(); });

function buildToc() {
    console.log("in script");
    $('<div id="toc"><h3>TOC</h3></div>').insertAfter('h1');
    $('<ul id="tocul"></ul>').appendTo($('#toc'));
    $('h2').each(function (ind) {
        var link = '_toclick_' + ind;
        $(this).wrap($('<div>').attr('id', link));
        var $ahyper = $('<a></a>').text($(this).text()).attr('href', '#'+ link);
        $('<li></li>').appendTo($('#tocul')).append($ahyper);
                 //.text($(this).text());
                 
    });
}

