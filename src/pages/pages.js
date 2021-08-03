export const listpages = {


profile: () =>{
let profile = `
<div>
  
  <img id="picture_profile" src="https://scontent.fclq1-1.fna.fbcdn.net/v/t1.6435-9/149440322_245337167127549_5651393321050719590_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_eui2=AeFYPKl1gnferLoQsAwrgcNExJAIz2s49YXEkAjPazj1hWUekJUXVFetk5jMzI5wRZaSCwZIwuWEshzaX-MLQx6M&_nc_ohc=5ZMMQ8va3_0AX_5hsig&_nc_ht=scontent.fclq1-1.fna&oh=0088fef1779c101d8e79c03812c0c8e3&oe=612855C6" alt="Avatar">

  <div id="content_profile">

    <div id="menu_profile">
        <input type="button" id="btn_menu_profile_post" value="Publicaciones">
        <input type="text" id="find_post" placeholder="Buscar Publicacion">
        <input type="button" id="btn_menu_profile_findpost" value="Buscar">
    </div>

    <div id="info_profile"> 
     
    </div>

  </div>

 

</div>`

return profile


},

home: () =>{
    let home = `
    <div>
  
    <h1>Bien Benid@ a la RED de Desarolladores mas grande del mundo DevSocial</h1>

    </div>`
    
    return home
    
    
    },

 errorp: () =>{
     let errorp = `
    <div>
  
    <h1>Pana no encontre esa Pagina</h1>
  
    </div>`
        
    return errorp
        
        
    }



}