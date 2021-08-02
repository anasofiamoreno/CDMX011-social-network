var userstate = firebase.auth().currentUser;
autenticar();


window.onpopstate = () => {
  autenticar(); 
}

const objButtonHome = document.getElementById("btnhome");

document.getElementById("btn-menu-login").addEventListener("click",showmenulogin);
document.getElementById("btn-menu-singup").addEventListener("click",showmenusingup);
document.getElementById("btn-menu-logout").addEventListener("click",logout);
document.getElementById("close-menusingup").addEventListener("click",hidemenusingup);
document.getElementById("close-menulogin").addEventListener("click",hidemenulogin);
document.getElementById("loginform").addEventListener("submit",sendlogin);
document.getElementById("singupform").addEventListener("submit",sendsingup);
document.getElementById("btnhome").addEventListener("click",sendhome);
document.getElementById("btnprofile").addEventListener("click",sendprofile);




function showmenulogin(){
  window.history.pushState({},"hola",window.location + "/login");
  document.getElementById("menusingup").style.display = "none";
  document.getElementById("menulogin").style.display = "block";
}

function showmenusingup(){
  document.getElementById("menulogin").style.display = "none";
  document.getElementById("menusingup").style.display = "block";
  
}
function sendsingup(e){

  document.getElementById("nomachs").style.display = "none";
  document.getElementById("dones").style.display = "none";
  document.getElementById("fails").style.display = "none";
  
  e.preventDefault();

  let user = document.getElementById("mailsingup");
  let password = document.getElementById("passwordsingup");
  let passwordc = document.getElementById("passwordsingupc");

  if(password.value==passwordc.value){

  

  firebase.auth().createUserWithEmailAndPassword(user.value,password.value)
  .then((userCredential) => {
    document.getElementById("dones").style.display = "block";
    document.getElementById("btn-menu-login").style.display = "none";
    document.getElementById("btn-menu-logout").style.display = "block";
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    //var errorCode = error.code;
    var errorMessage = error.message;
    document.getElementById("fails").style.display = "block";
    document.getElementById("fails").innerHTML = errorMessage;
  });
}

else{
  document.getElementById("nomachs").style.display = "block";
}
}

function sendlogin(e){
  
  e.preventDefault();

  document.getElementById("done").style.display = "none";
  document.getElementById("fail").style.display = "none";
  
  

  let user = document.getElementById("maillogin");
  let password = document.getElementById("passwordlogin");


  firebase.auth().signInWithEmailAndPassword(user.value,password.value)
  .then((userCredential) => {
    document.getElementById("done").style.display = "block";
    document.getElementById("btn-menu-login").style.display = "none";
    document.getElementById("btn-menu-logout").style.display = "block";
    window.history.pushState({},"hola","/profile");
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    document.getElementById("fail").style.display = "block";
    document.getElementById("fail").innerHTML = errorMessage;
  });

}

function hidemenusingup(){
  document.getElementById("menusingup").style.display = "none";
}
hidemenulogin

function hidemenulogin(){
  document.getElementById("menulogin").style.display = "none";
}

function logout(){
  firebase.auth().signOut().then(() => {
    document.getElementById("btn-menu-login").style.display = "block";
    document.getElementById("btn-menu-logout").style.display = "none";
  }).catch((error) => {
    // An error happened.
  });
}

firebase.auth().onAuthStateChanged( function(user) {
  
  
  if(user){
    document.getElementById("btn-menu-login").style.display = "none";
    document.getElementById("btn-menu-logout").style.display = "block";
    pages();
    
  
  }
  else{
    document.getElementById("btn-menu-login").style.display = "block";
    document.getElementById("done").style.display = "none";
    document.getElementById("general_profile").innerHTML='<p>Inicia Secion Por Favor</p>';
    window.history.pushState({},"","/");
  }
  



});


function pages(){
  
  switch(window.location.pathname){
    case "/home":
      document.getElementById("general_profile").innerHTML = '<iframe src="pages/home.html"  scrolling="yes" width="100%" height="100%" frameborder="0" ></iframe>';
      break;
    case "/":
      document.getElementById("general_profile").innerHTML = '<iframe src="pages/home.html"  scrolling="yes" width="100%" height="100%" frameborder="0" ></iframe>';
      break;
    case "/profile":
      document.getElementById("general_profile").innerHTML = '<iframe src="pages/profile.html"  scrolling="yes" width="100%" height="100%" frameborder="0" ></iframe>';
      break;
    default: 
      document.getElementById("general_profile").innerHTML = '<iframe src="pages/error.html"  scrolling="yes" width="100%" height="100%" frameborder="0" ></iframe>';
      break
  }


  






}


function sendprofile(){
  window.history.pushState({},"hola","/profile");
  autenticar();
}

function sendhome(){
  window.history.pushState({},"hola","/home");
  autenticar();
}

function autenticar(){

 
  userstate = firebase.auth().currentUser;
  
  
    if(userstate){
      pages();
      
    }
    else{
      document.getElementById("general_profile").innerHTML='<p>Inicia Secion Por Favor</p>';
      window.history.pushState({},"","/");
    }
    
  
  
  
  
  

}