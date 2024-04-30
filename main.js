//DOM API
// Obtener elementos por id 
//

const div1 = document.getElementById("div-1");
console.log(div1);

const divColletion = document.getElementsByTagName ("div");
console.log(divColletion);

const p = document.getElementById("p1");
const userNameInputs = document.getElementsByName("userName");
const userNameInput = userNameInputs[0];

console.log(p , userNameInput);

//Events
//Cualquier evento que coincida con lo que voy a decir tiene la siguiente funcion.
//Tiene dos tipos de parametros, primero el evento que va a utilizar, y luego lo que va a suceder
//userNameInput.addEventListener ("input", (event) => console.log(event));

//Events
userNameInput.addEventListener ("input", (event) => {
    console.log(event.target.value);
    p.innerText = event.target.value;
});