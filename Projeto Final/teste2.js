var candidatos 

async function getRandomUser() {
    const response = await fetch("https://randomuser.me/api/?results=5&nat=br");
    //https://randomuser.me/api/?results=5&nat=br&seed=0042c8038085f5c6
    const data = await response.json();
    candidatos = data.results;
}

function preencher(user0) {
    user0 = candidatos[user0];
    const name0 = document.getElementById("name0");
    const gender0 = document.getElementById("gender0");
    const email0 = document.getElementById("email0");
    const phone0 = document.getElementById("phone0");
    const location0 = document.getElementById("location0");
    const image0 = document.getElementById("image0");

    name0.innerText = `${user0.name.first} ${user0.name.last}`;
    gender0.innerText = `${user0.gender}`;
    email0.innerText = `${user0.email}`;
    phone0.innerText = `${user0.phone}`;
    location0.innerText = `${user0.location.timezone.description}`;
    image0.setAttribute('src', `${user0.picture.large}`);
}

getRandomUser();