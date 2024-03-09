//Get all elements with the classes website-button and video-button
const buttons = document.querySelectorAll('.website-button, .video-button');

//Create listeners for the click events

buttons.forEach(button =>{
  button.addEventListener('click', function(){
    const link = button.getAttribute('data-link');
    window.open(link,'_blank');
  });
});
