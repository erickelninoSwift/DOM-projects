// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯
const monsters = document.querySelector(".monsters");
const monster = document.querySelector(".monster");
const monstersChilden = monsters.children;
const monsterChildren = monster.children;

console.log(monstersChilden);
console.log(monsterChildren);

{/* <div class="monster">
<img src="https://robohash.org/6?set=set2" alt="Kazi Ariyan" />
<p class="name">Kazi Ariyan</p>
<p class="email">info@easylearningbd.com</p>
</div> */}

const div =  document.createElement("div");
div.className = "monster";

const img = document.createElement("img");
const p1 = document.createElement("p");

const p2 = document.createElement("p");

img.src = 'https://robohash.org/6?set=set2';
img.alt = 'Kazi Ariyan';

p1.className = "name";
p2.className = "email";

console.log(div);
console.log(img);
console.log(p1);
console.log(p2);
