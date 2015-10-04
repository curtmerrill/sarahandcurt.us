// NC Countdown
// requires: jQuery, moment

(function(nc) {
    nc(window.jQuery, window, document);
    }(function($, window, document) {
        // jQuery $ locally scoped

        function resizePlate(el) {
            var w = el.width();
            el.css('height', w/2+'px');
        }

        $(function() {
            // adjust size of countdown container
            var plate = $('.nc-countdown');
            resizePlate(plate); 
            $(window).resize(function() { resizePlate(plate); })
  
            // set countdown
            var now = moment(),
                moveDate = moment("2015-09-20"),
                diff = moveDate - now,
                days = moment.duration(diff).days();

            var $countdownComplete = $('<div class="countdown-complete"><a href="/pages/90-days-in-nc.html">We\'re here!</a></div>');

            if (days >=0) {
                $('.js-days').text(days);
            } else {
                $('.js-countdown').html($countdownComplete);
            } 
        });
    })
);


