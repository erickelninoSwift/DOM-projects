// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯

const clientID = "a2d2ac77a1f245a17e1f";
const clientScretkey = "87f1c28cffefae27a5153df25b8c094982f59a3d";


const userUrl = fetch("https://api.github.com/users/andrew");


userUrl.then(result =>{

    console.log(result.json());

})

async function fetchData(name)
{
    const userUrl = await fetch(`https://api.github.com/users/${name}?client_id=${clientID}&client_secret=${clientScretkey}`);

    return await userUrl.json();
}


document.querySelector("#search").addEventListener('submit', async (e) =>{

    e.preventDefault()

    const username = document.querySelector("#findByUsername").value;
    const profile = await fetchData(username)
    const follower = profile.followers;
    const following = profile.following;
    const profileImageUrl = profile.avatar_url;
    const location = profile.location;
    const company = profile.company;
    const user = profile.name;
    const login = profile.login;
    const biouser = profile.bio;


    const profiledocument = document.querySelector(".profile");

   


    const datahtml = `
    <div class="profile">
    <img
      src=${profileImageUrl}
      alt="letstrie"
    />
    <p class="name">${user}</p>
    <p class="username login">${login}</p>
    <p class="bio">
      ${biouser}
    </p>

    <div class="followers-stars">
      <p>
        <ion-icon name="people-outline"></ion-icon>
        <span class="followers"> ${follower} </span> followers
      </p>
      <span class="dot">·</span>
      <p><span class="following"> ${following} </span> following</p>
    </div>

    <p class="company">
      <ion-icon name="business-outline"></ion-icon>
      ${company}
    </p>
    <p class="location">
      <ion-icon name="location-outline"></ion-icon>${location}
    </p>
  </div>
    `;
    profiledocument.innerHTML = datahtml;
    console.log(`Followers :${follower}`);
    console.log(`Following: ${following}`);


    console.log(profile);

})

  