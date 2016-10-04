/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2016. MIT licensed.
 */
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
