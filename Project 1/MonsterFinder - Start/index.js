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

img.src = 'https://robohash.org/6?set=set2';
img.alt = 'Kazi Ariyan';

p1.className = "name";
p1.style.color ="#655a56";

p2.className = "email";
p2.style.color = "#655a56";

p1.innerText = `${this.name}`;
p2.innerText = `${this.myemail}`;



console.log(img);
console.log(p1);
console.log(p2);

div.appendChild(img,p1,p2);

monsters.appendChild(div);
console.log(div);
}

showMonster();
const secondChild = pageNotFound();
monsters.appendChild(secondChild);


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