import {listpages} from './pages/pages.js'  //import de paginas


//Objertos y Variables////////
console.log("hola");
var userstate = firebase.auth().currentUser;
//window.history.pushState({},"hola","/");
//const objButtonHome = document.getElementById("btnhome");

//Listeners & Eventos //////////////////////////////////////////////////////////

document.getElementById("btn-menu-login").addEventListener("click",showmenulogin);
document.getElementById("btn-menu-singup").addEventListener("click",showmenusingup);
document.getElementById("btn-menu-logout").addEventListener("click",logout);
document.getElementById("close-menusingup").addEventListener("click",hidemenusingup);
document.getElementById("close-menulogin").addEventListener("click",hidemenulogin);
document.getElementById("loginform").addEventListener("submit",sendlogin);
document.getElementById("singupform").addEventListener("submit",sendsingup);
document.getElementById("btnhome").addEventListener("click",showhome);
document.getElementById("btnprofile").addEventListener("click",showprofile);
document.getElementById("btnback").addEventListener("click",sendback);

window.onpopstate = () => { //Evento cambio de pagina en navegado y autenticacion
  autenticar(); 
}

firebase.auth().onAuthStateChanged( function(user) {  //Autenticacion de Usuario al Entrar a la App o al cambiar de estado
  
  
  if(user){
    document.getElementById("btn-menu-login").style.display = "none";
    document.getElementById("btn-menu-logout").style.display = "block";
    pages();
    console.log("authchange_si_logeado");
    
  
  }
  else{
    document.getElementById("btn-menu-login").style.display = "block";
    document.getElementById("done").style.display = "none";
    document.getElementById("general_profile").innerHTML='<p>Inicia Secion Por Favor</p>';
    window.history.pushState({},"","/");
    console.log("authchange_no_logeado");
  }
  



});


//Menus de Logeo////////////////////////////

function showmenulogin(){
  window.history.pushState({},"hola","/login");
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

//Router de paginas/////////////////////////////////////

function pages(){

  switch(window.location.pathname){
    case "/home":
      document.getElementById("general_profile").innerHTML = listpages.home();
      break;
    case "/":
      document.getElementById("general_profile").innerHTML = '<div>Hola Mundo</div>';
      break;
    case "/profile":
      document.getElementById("general_profile").innerHTML = listpages.profile();
      break;
    default: 
      document.getElementById("general_profile").innerHTML = listpages.home();
      break
  }

}


function showprofile(){
  window.history.pushState({},"hola","/profile");
  autenticar();
}

function showhome(){
  window.history.pushState({},"hola","/home");
  autenticar();
}

function sendback(){
  window.history.go(-1);
  autenticar();
}

function autenticar(){

  userstate = firebase.auth().currentUser;
  
  
    if(userstate){
      pages();
      console.log("autenticador_si_logeado");
    }
    else{
      document.getElementById("general_profile").innerHTML='<p>Inicia Secion Por Favor</p>';
      window.history.pushState({},"","/");
      console.log("autenticador_no_logeado");
    }
    
  
  console.log(window.history.length );
  
    if(window.history.length > 0){
      document.getElementById("btnback").style.display = "block";
    }
  

}