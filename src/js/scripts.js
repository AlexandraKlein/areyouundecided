(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    var $thumbs = $('table:not(.nominees) tr img');
    $thumbs.mouseenter(function() {
      $(this).addClass('floating');
    });
    $thumbs.mouseleave(function() {
      $(this).removeClass('floating');
    });
  });

})(jQuery, window, document);
