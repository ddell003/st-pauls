(function () {
    'use strict';
    /**
    * @desc Direictive to embed facebook post
    * @example <fb-post-preview data-href="vm.postUrl"></fb-post-preview>
    */
    angular
      .module('fbDirective')
      .directive('fbPostPreview', fbPostPreview);
  
    /* @ngInject */
    function fbPostPreview($timeout) {
      var directive = {
        link: link,
        template: '<div class="fb-post" data-href="{{href}}"></div>',
        restrict: 'EA',
        scope: {
          href: '=href'
        }
      };
      return directive;
  
      function link(scope, element, attrs) {
        $timeout(function() {
          if (FB) {
            FB.XFBML.parse(element[0]);
          }
        });
      }
    }
  })();