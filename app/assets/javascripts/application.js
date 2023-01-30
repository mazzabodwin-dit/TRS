/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()

  let selectElement = $('#search-reg-org')
  let placeholder = 'Enter a registered company name or number'
  if (selectElement.length) {
    // AccessibleAutocomplete orignal
    if (selectElement.attr('autocomplete-placeholder')) {
      placeholder = selectElement.attr('autocomplete-placeholder')
    }
    accessibleAutocomplete.enhanceSelectElement({
      defaultValue: '',
      placeholder: placeholder,
      selectElement: document.querySelector('#search-reg-org'),
      onConfirm: function (data) {
        if (data !== undefined) {
          // We only want to hide if the variable is defined
          if (data) {
            $('#selected_company').html($('option:contains(' + data + ')').val())
            $('#selected_company_wrapper').show()
          } else {
            $('#selected_company_wrapper').hide()
          }
        }
      }
    })
  }

})
