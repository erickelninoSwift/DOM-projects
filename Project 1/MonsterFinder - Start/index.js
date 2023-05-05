// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯
const monsters = document.querySelector(".monsters");
const monster = document.querySelector(".monster");
const monstersChilden = monsters.children;
const monsterChildren = monster.children;


function showMonster()
{
const name = "Kazi Ariyan";
const myemail = "info@easylearningbd.com";

const div =  document.createElement("div");
div.className = "monster";

const img = document.createElement("img");
const p1 = document.createElement("p");

const p2 = document.createElement("p");

img.src = 'https://robohash.org/6?set=set8';
img.alt = 'Kazi Ariyan';

p1.className = "name";
p2.className = "email";


p1.innerText = `Kazi Ariyan`;
p2.innerText = `info@easylearningbd.com`;



console.log(img);
console.log(p1);
console.log(p2);

div.appendChild(img);
div.appendChild(p1);
div.appendChild(p2);

monsters.appendChild(div);
console.log(div);
}

showMonster();
// const secondChild = pageNotFound();
// monsters.appendChild(secondChild);


function pageNotFound()
{

   const div = document.createElement("div");
   const span = document.createElement("span");
   const h1 = document.createElement("h1");

   div.className = "p-5 not-found";
   span.innerText = "404";
   h1.innerText = "🧟‍♂️ No Monster Found 🧟‍♂️";


   div.append(span,h1);

   return div;
   
}