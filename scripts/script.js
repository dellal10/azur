var myElement = document.querySelector( 'nav' );
var img = document.getElementsByClassName('navbar-brand')[0];
var jum = document.getElementsByClassName('jumbotron')[0];

if(myElement.offsetTop <= jum.offsetHeight ){
  myElement.classList.add('p-4');
  img.style.display = 'none';
} else {
  myElement.classList.remove('p-4');
  img.style.display = 'block';
}

// Listen for the scroll event
document.addEventListener( 'scroll', event => {
  // Check the viewport status
  if(myElement.offsetTop <= jum.offsetHeight ){
    myElement.classList.add('p-4');
    img.style.display = 'none';
  } else {
    myElement.classList.remove('p-4');
    img.style.display = 'block';
  }
})
