// Photos!
// requires: jQuery, 

(function(ph) {
    ph(window.jQuery, window, document);
    }(function($, window, document) {
        // jQuery $ locally scoped

        function buildImgElement(idx, obj) {
            var newImg = $('<img>');
            newImg.attr({
                'src': obj['img_sm'],
                'alt': obj['title'],
                'class': 'gallery-img'
            });

            $('.js-photo-container').append(newImg);
        }

        function usePhotos(data) {
            $.each(data, buildImgElement)
        }

        $(function() {
            // adjust size of countdown container
            var container = $('.js-photo-container');
            
            $.ajax({
                url: '/data/nc-photos.json',
                dataType: 'json',
                success: usePhotos
            });


        });
    })
);




