// En este ejercicio deberas crear tu solción en ES5, asegurarte que funcione
//var login = 'laboratoria';
// declara el prompt
//var loginUser = prompt('escribe una contraseña');

/*function user () {
// escribe tu código aqui..
     if(loginUser === null) {
       console.log('falso')
       return false;
    }else if(login !== loginUser) {
       console.log('falso')
       return false;
    }else if( login === loginUser){
      console.log('correcto')
      return true;
    }
}
 user();*/

// comenta todo lo anterior y escribelo en ES6
let login = 'laboratoria';
let loginUser = prompt('escribe una contraseña');



let user = () => {
// escribe tu código aqui..
     if(loginUser === null) {
       console.log('falso')
       return false;
    }else if(login !== loginUser) {
       console.log('falso')
       return false;
    }else if( login === loginUser){
      console.log('correcto')
      return true;
    }
}
 user();
