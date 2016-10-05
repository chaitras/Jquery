$(function () {    
    $('#rssFeed').rssfeed(
            'http://feeds.reuters.com/reuters/oddlyEnoughNews',
            { limit: 12 },
            function () {
                var $rssbody = $('.rssBody');
                $('ul', $rssbody).find('li').find('div').css('color', 'red');
                //alternative way
                //$('h4').next().css('color','green');

                //first method
                //$rssbody.find('div').click(function () {
                //    var $nextItem = $(this).next();
                //    if($nextItem.css('display') == 'block')
                //        $(this).next().css('display', 'none');
                //    else
                //        $(this).next().css('display', 'block');
                //    console.log("clicked");
                //});

                //alternative method
                //$rssbody.find('div').click(function (event) {
                  //  $(this).next().toggleClass('hidden');                    
                //});

                $rssbody.find('.rssRow').on('click', handlesomething);
            });
    function handlesomething(event) {
        var href = $(event.delegateTarget).find('a').attr('href');
        window.location.href = href;
    }
});


