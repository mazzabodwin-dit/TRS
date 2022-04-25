const pause = _ => new Promise(resolve => setTimeout(resolve, _))

$('.upload-container').on('drop dragdrop', function (ev) {
  $(this).closest('.upload-card').removeClass('upload-card-hover')
  let original_event = ev.originalEvent
  ev.preventDefault()
  ev.stopPropagation()
  console.log('dropped')

  let file_name = original_event.dataTransfer.files[0].name
  $(this).find('.file_name').html(file_name)

  $(this).find('.waiting_for_upload').hide()
  $(this).find('.scanning_file_for_virus').show()
  let that = $(this)
  setTimeout(function () {
    that.find('.scanning_file_for_virus').hide()
    that.find('.uploading_file').show()

    setTimeout(function () {
      that.find('progress').hide()
      that.find('.progress-40').show()
      that.find('.upload_percentage').html('Uploading 40%:')
      setTimeout(function () {
        that.find('progress').hide()
        that.find('.progress-70').show()
        that.find('.upload_percentage').html('Uploading 70%:')
        setTimeout(function () {
          that.find('progress').hide()
          that.find('.progress-100').show()
          that.find('.upload_percentage').html('Uploading 100%:')
          that.find('.uploading_file').hide()
          that.find('.upload_file_complete').show()
        }, 500)
      }, 500)
    }, 500)


  }, 1000)

})

$('.upload-container').on('dragover', function (e) {
  e.preventDefault()
  e.stopPropagation()
  console.log('dragged over')
  $(this).closest('.upload-card').addClass('upload-card-hover')
})

$('.upload-container').on('dragleave', function (e) {
  e.preventDefault()
  e.stopPropagation()
  console.log('dragged left')
  $(this).closest('.upload-card').removeClass('upload-card-hover')
})

$(document).ready(function () {
  console.log('ready')
})
