async function getRandomUser() {
    const response = await fetch("https://randomuser.me/api/?results=5&nat=br");
    //https://randomuser.me/api/?results=5&nat=br&seed=0042c8038085f5c6
    const data = await response.json();
   

    const user0 = data.results[0]
    const user1 = data.results[1]
    const user2 = data.results[2]
    const user3 = data.results[3]
    const user4 = data.results[4]

    displayUser0(user0);
    displayUser1(user1);
    displayUser2(user2);
    displayUser3(user3);
    displayUser4(user4);

    console.log(data);
}

function displayUser0(user0) {
    const name0 = document.getElementById("name0");
    const gender0 = document.getElementById("gender0");
    const email0 = document.getElementById("email0");
    const phone0 = document.getElementById("phone0");
    const location0 = document.getElementById("location0");
    const image0 = document.getElementById("image0");

    name0.innerText = `${user0.name.first} ${user0.name.last}`;
    if(user0.gender === "female"){
        gender0.innerText = "Mulher";
    }else{
        gender0.innerText = "Homem";
    }
    
    email0.innerText = `${user0.email}`;
    phone0.innerText = `${user0.phone}`;
    location0.innerText = `${user0.location.timezone.description}`;
    image0.setAttribute('src', `${user0.picture.large}`);
}

function displayUser1(user1) {
    const name1 = document.getElementById("name1");
    const gender1 = document.getElementById("gender1");
    const email1 = document.getElementById("email1");
    const phone1 = document.getElementById("phone1");
    const location1 = document.getElementById("location1");
    const image1 = document.getElementById("image1");

    name1.innerText = `${user1.name.first} ${user1.name.last}`;
    if(user1.gender === "female"){
        gender1.innerText = "Mulher";
    }else{
        gender1.innerText = "Homem";
    }
    email1.innerText = `${user1.email}`;
    phone1.innerText = `${user1.phone}`;
    location1.innerText = `${user1.location.timezone.description}`;
    image1.setAttribute('src', `${user1.picture.large}`);
}

function displayUser2(user2) {
    const name2 = document.getElementById("name2");
    const gender2 = document.getElementById("gender2");
    const email2 = document.getElementById("email2");
    const phone2 = document.getElementById("phone2");
    const location2 = document.getElementById("location2");
    const image2 = document.getElementById("image2");

    name2.innerText = `${user2.name.first} ${user2.name.last}`;
    if(user2.gender === "female"){
        gender2.innerText = "Mulher";
    }else{
        gender2.innerText = "Homem";
    }
    email2.innerText = `${user2.email}`;
    phone2.innerText = `${user2.phone}`;
    location2.innerText = `${user2.location.timezone.description}`;
    image2.setAttribute('src', `${user2.picture.large}`);
}

function displayUser3(user3) {
    const name3 = document.getElementById("name3");
    const gender3 = document.getElementById("gender3");
    const email3 = document.getElementById("email3");
    const phone3 = document.getElementById("phone3");
    const location3 = document.getElementById("location3");
    const image3 = document.getElementById("image3");

    name3.innerText = `${user3.name.first} ${user3.name.last}`;
    if(user3.gender === "female"){
        gender3.innerText = "Mulher";
    }else{
        gender3.innerText = "Homem";
    }
    email3.innerText = `${user3.email}`;
    phone3.innerText = `${user3.phone}`;
    location3.innerText = `${user3.location.timezone.description}`;
    image3.setAttribute('src', `${user3.picture.large}`);
}

function displayUser4(user4) {
    const name4 = document.getElementById("name4");
    const gender4 = document.getElementById("gender4");
    const email4 = document.getElementById("email4");
    const phone4 = document.getElementById("phone4");
    const location4 = document.getElementById("location4");
    const image4 = document.getElementById("image4");

    name4.innerText = `${user4.name.first} ${user4.name.last}`;
    if(user4.gender === "female"){
        gender4.innerText = "Mulher";
    }else{
        gender4.innerText = "Homem";
    }
    email4.innerText = `${user4.email}`;
    phone4.innerText = `${user4.phone}`;
    location4.innerText = `${user4.location.timezone.description}`;
    image4.setAttribute('src', `${user4.picture.large}`);
}
getRandomUser();