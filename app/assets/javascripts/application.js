/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
  let selectElement = document.querySelector('#search-reg-org')

  // AccessibleAutocomplete orignal 
  accessibleAutocomplete.enhanceSelectElement({
    defaultValue: '',
    selectElement: document.querySelector('#search-reg-org'),
    onConfirm: function(data){
      $('#selected_company').html(data);
    }
  })
})