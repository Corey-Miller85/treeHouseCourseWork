$('#flashMessage').hide()
 
// const title = "My First Blog Post";
// const content = "This is my <strong>first</strong> post!";



$('#previewButton').click(function(){
  const title = $('#blogTitleInput').val();
  const content = $('#blogContentInput').val();
  $("#blogTitlePreview").text(title);
  $("#blogContentPreview").html(content);
  $('#flashMessage')
    .slideDown(1000)
    .delay(3000)
    .slideUp();
});