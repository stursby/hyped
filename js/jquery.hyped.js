/*!

Name: Hyped
Dependencies: jQuery
Author: Charlie Hield
Author URL: http://charliehield.com
Github URL: https://github.com/stursby/Hyped
Licensed under the MIT license

*/

;(function($) {

  $.fn.hyped = function (options) {

    var defaults = {
      
      count     : 5,
      artwork   : true,
      thumbSize : "medium",
      linked    : false,
      loveCount : false

    }, settings = $.extend({}, defaults, options);

    this.each(function () {

      var el = $(this);

      if (options === undefined || options.username === undefined) {
        alert("You must provide a Hypem.com username.");
        return false;
      }

      var username = settings.username;
      var url = "https://api.hypem.com/v2/users/" + username + "/favorites";

      $.getJSON(url, function (data) {

        var limit = settings.count;
        var list = $('<ul class="hyped"></ul>').replaceAll(el);

        for (var i = 0; i < limit; i++) {

          list.append('<li>' +
            '<span class="details">' + 
            '<span class="title">' + data[i].title + '</span>' +
            '<span class="artist">' + data[i].artist + '</span>' +
            '</span>' +
            '</li>');

        };

        if (settings.linked === true) {

          list.children('li').each(function (index) {

            $(this).find('.details').wrapInner('<a href="http://hypem.com/track/' + data[index].mediaid + '" target="_blank"></a>');

          });

        }

        if (settings.loveCount === true) {

          list.children('li').each(function (index) {

            $(this).prepend('<span class="love-count">' + data[index].loved_count + ' ❤</span>');

          });

        }

        if (settings.artwork === false) { 

          return; 

        } else {

          var size = settings.thumbSize;
          var sizeStr;

          switch(size) {
          case "small":
            sizeStr = "thumb_url";
            break;
          case "large":
            sizeStr = "thumb_url_large";
            break;
          default:
            sizeStr = "thumb_url_medium";
          }

          list.children('li').each(function (index) {

            var imgSrc = data[index][sizeStr];

            if (imgSrc === undefined) {

              var imgSrc = "images/album_" + sizeStr.split("thumb_url_")[1] + ".png";

            }

            $(this).prepend('<span class="album"><img src="' + imgSrc + '"/></span>');

          });

        }

      });

    });

    return this;

  };

}(jQuery));
