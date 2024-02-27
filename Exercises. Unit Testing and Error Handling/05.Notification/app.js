function notify(message) {
  const contentDiv = document.getElementById('content');
  const notificationDiv = document.getElementById("notification")
  const messages = document.querySelector("article");
  const btn = document.querySelector("button")
  
 notificationDiv.textContent = message
 notificationDiv.style.display ="block"
  
 notificationDiv.addEventListener("click", function(){
   notificationDiv.style.display = "none"
 })
  
 }