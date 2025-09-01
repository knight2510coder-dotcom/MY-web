document.querySelector("#form").addEventListener("submit",(event) =>{
  event.preventDefault();

  const user = document.querySelector("#user").value.trim();
  const pas  = document.querySelector ("#pas") .Value.trim();
  const errorMsg = document.querySelector("#error");
  
  if(!user || !pas)
  {
    errorMsg.textContent = "pleaz enter user and password";
    return;
  }
  if (user === "admin" && pas === "12345")
  {
    window.location.href = "Amir/amir.html";
    console.log("amir");
  }
  
  else
  {
    errorMsg.textContent = "not user and password";
    document.querySelector("#user").style.bordeer = "2px solid red";
    document.querySelector("#pas") .style.bordeer = "2px solid red";
  }

});
