// Photos!
// requires: jQuery, 

(function(ph) {
    ph(window.jQuery, window, document);
    }(function($, window, document) {
        // jQuery $ locally scoped

        function buildImgElement(idx, obj) {
            var newImg = $('<div></div>');
            newImg.attr({
                'class': 'gallery-img',
                'data-img-src': obj['img_lg'],
                'data-title': obj['title'],
                'data-link': obj['flickr_url']
            });

            newImg.css({
                'background-image': "url(" + obj['img_sm'] + ")"
            });

            newImg.append('<div class="gallery-index">'+(idx+1)+'</div>');

            $('.js-photo-container').append(newImg);
        }

        function displayImg(element) {
            var $lb = $('.lightbox');
            var $img = $(element);
            $lb.append('<img class="lb-img" src="' + $img.attr('data-img-src') + '">');
            $lb.append('<figcaption>'+$img.attr('data-title')+'</figcaption>');
            $lb.append('<a class="flickr-link" href="'+$img.attr('data-link')+'">View on Flickr</a>');
            $('body').toggleClass('no-scroll');
            $lb.toggleClass('is-visible');

        }

        function usePhotos(data) {
            $.each(data, buildImgElement);
            $('.gallery-img').click(function(e) {
                displayImg(e.target);
            });
        }

        $(function() {
            $('body').append('<figure class="lightbox"></figure>');
            $('.lightbox').click(function(e) {
                $(this).toggleClass('is-visible');
                $(this).html('');
                $('body').toggleClass('no-scroll');
            });
                
            
            $.ajax({
                url: '/data/nc-photos.json',
                dataType: 'json',
                success: usePhotos
            });


        });
    })
);




