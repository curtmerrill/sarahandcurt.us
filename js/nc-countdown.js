// NC Countdown
// requires: jQuery, moment

(function(scs) {
    scs(window.jQuery, window, document);
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
                moveDate = moment("20150920");

        });
    })
);


