/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()

  let selectElements = $('#search-reg-org, .autocomplete-select')
  let placeholder = 'Enter a registered company name or number'

  selectElements.each(function (index) {
    let selectElement = $(this)
    if (selectElement.length) {
      // AccessibleAutocomplete orignal
      if (selectElement.attr('autocomplete-placeholder')) {
        placeholder = selectElement.attr('autocomplete-placeholder')
      }
      accessibleAutocomplete.enhanceSelectElement({
        defaultValue: '',
        placeholder: placeholder,
        selectElement: selectElement[0],
        onConfirm: function (data) {
          // First we check if the selectElement has a particular company-wrapper linked to it
          let company_wrapper_id = 'selected_company_wrapper'
          if (this.selectElement.hasAttribute('data-selected-company-wrapper-id')) {
            company_wrapper_id = this.selectElement.getAttribute('data-selected-company-wrapper-id')
          }
          let company_wrapper_element = $('#' + company_wrapper_id)
          let selected_company_element = company_wrapper_element.find("div.govuk-inset-text")

          let commodity_wrapper_id = 'selected_commodity_wrapper'
          let commodity_wrapper_element = $('#' + commodity_wrapper_id)
          let selected_commodity_element = commodity_wrapper_element.find("a#selected_commodity")

          if (data !== undefined) {
            // We only want to hide if the variable is defined
            if (data) {

              selected_company_element.html($('option:contains(' + data + ')').val())
              selected_commodity_element.html($('option:contains(' + data + ')').val())
              company_wrapper_element.show()
              commodity_wrapper_element.show()
            } else {
              company_wrapper_element.hide()
              commodity_wrapper_element.hide()
            }
          }
        }
      })
    }

  })


})