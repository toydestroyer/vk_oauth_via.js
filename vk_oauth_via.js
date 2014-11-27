/* so dirty */

;(function($) {
  'use strict';

  store.remove('vk')

  var success = $('#response').data('success');
  store.set('success', success);

  if (success) store.set('vk', $('#response').data());

  window.close();
})(jQuery);


var vkOAuthWindow = window.open('/oauth');
var vaOAuthInterval = setInterval(function() {
  if (!vkOAuthWindow.closed) return;
  clearInterval(vaOAuthInterval);
  if (store.get('success')) {
    var vk = store.get('vk');

    if(vk.isSubscribed) {
      /* continue */
    } else {
      /* suggest to subscribe */
    }
  } else {
    alert('Failed');
  }
}, 1000);
