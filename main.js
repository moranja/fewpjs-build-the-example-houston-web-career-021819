// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', function(){
  const listItems = document.querySelectorAll('.like')
  listItems.forEach(function(listItem){
    listItem.addEventListener('click', function(){
      mimicServerCall()
      .then(function(){
        const heart = listItem.children[0]
        if (heart.className === "activated-heart") {
          heart.innerText = EMPTY_HEART
          heart.className = ""
        } else {
          heart.innerText = FULL_HEART
          heart.className = "activated-heart"
        }
      })
      .catch(function(){
        const error = document.querySelector('#modal')
        error.className = ""
        setTimeout(function(){
          error.className = "hidden"
        }, 1500)
      })
    })
  })
})


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
