window.addEventListener('hashchange', function() {
  console.log(window.location.hash);
  if(window.location.hash === '#bookmark1') {
    console.log('Bookmark 1');
  }
  if(window.location.hash === '#bookmark2') {
    console.log('Do an action');
  }
  if(window.location.hash === '#bookmark3') {
    console.log('Do some other action');
  }
});
