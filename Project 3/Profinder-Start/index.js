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


    console.log("=================");
    if(profile.login)
    {

        document.querySelector(".notFound").style.display = "none";
        document.querySelector(".user-details").style.display = "flex";

    const follower = profile.followers;
    const following = profile.following;
    const profileImageUrl = profile.avatar_url;
    const location = profile.location;
    const company = profile.company;
    const user = profile.name;
    const login = profile.login;
    const biouser = profile.bio;
    const reposURl = profile.repos_url;



    console.log(profile);
    const profiledocument = document.querySelector(".profile");
  
    console.log(`Repository url: ${reposURl}`);
    const repositoryData = await getRepository(reposURl);

    let repositoryfile = document.querySelector(".repos")

    console.log(repositoryfile);

    for(let index of repositoryData)
    {
        const repoName = index.name;
        console.log(index);

        let repoHtml = `

        <div class="repo">
        <div class="repo_name">
          <a href="#">${repoName}</a>
        </div>
        <p>
          <span class="circle"></span> ${index.language}
          <ion-icon name="star-outline"></ion-icon> ${index.stargazers_count}
          <ion-icon name="git-branch-outline"></ion-icon> ${index.forks_count}
        </p>
      </div>
        
        `;
        repositoryfile.insertAdjacentHTML('afterbegin',repoHtml);
    }


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
       
    }else
    {
        document.querySelector(".notFound").style.display = "block";
        document.querySelector(".user-details").style.display = "none";
    }
    console.log("=================");



})

async function getRepository(repoUrl)
{
    const fetchrepo = await fetch(`${repoUrl}`);

    const repoJSOn = await fetchrepo.json();

    return repoJSOn;

}

  