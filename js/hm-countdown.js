// Honeymoon Countdown
// requires: jQuery, moment

(function(hm) {
    hm(window.jQuery, window, document);
    }(function($, window, document) {
        // jQuery $ locally scoped

        function resizeCard(el) {
            var w = el.width();
            el.css('height', w/1.75+'px');
        }

        $(function() {
            // adjust size of countdown container
            var card = $('.honeymoon-countdown');
            resizeCard(card); 
            $(window).resize(function() { resizeCard(card); })
  
            // set countdown
            var now = moment(),
                honeymoonDate = moment("2016-03-07"),
                diff = honeymoonDate - now,
                weeks = Math.floor(moment.duration(diff).asWeeks());

            $('.js-hm-countdown').text(weeks + " weeks");
        });
    })
);



