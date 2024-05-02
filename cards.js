/*
* Crear tarjeta
* Crear secciones para tarjeta
* Nombre, desc, edad, lista de algo
* Insertar en la tarjeta
* Mostrar dentro de div.container
*/
//Implementar funciones para el codigo
const CARDS_CONTAINER = document.querySelector("#card-container");
//const CARDS_CONTAINER = document.getElementById("card-container");
const USER = {
    id: 1,
    username: "Alexandra",
    desc: "No pases desapercibido, Sé diferente al resto y denota frescura en lo que cuentas",
    age: 27,
    fav_books: {
        books: ["Hush Hush", "Mírame y dispara", "After", "El principito", "La chica del tren",
        ],
    },
};

//CREAR secciones
function createElements(){
    const cardObj = {
       name_section: document.createElement("h3"),
       desc_section: document.createElement("p"),
       age_section: document.createElement("p"),
       book_section: document.createElement("div"),

    };
    return cardObj;

}
//Crear tarjeta
//Inyectando información 

function injectData(obj){
   const booklist = USER.fav_books.books.map((e) => {
    const item = document.createElement("ul");
    item.textContent = e;
    return item;
});

obj.name_section.textContent = USER.username;
    obj.desc_section.textContent = USER.desc;
    obj.age_section.textContent = USER.age;
    obj.book_section.append(...booklist);
    renderCard(obj);
}

function renderCard(cardObj){
    const card = document.createElement("div");
    card.append(
        cardObj.name_section,
        cardObj.desc_section,
        cardObj.age_section,
        cardObj.book_section,
    )
    CARDS_CONTAINER.appendChild(card);
}
 const cardData = createElements();
 injectData(cardData);
