async function loadprofile(){
    const username = document.getElementById("buscarNome").value;
    if(!username){
        alert("Voçê precisa digitar o nome de um Usuario");
        return;
    }

    const response = await fetch(`https://api.github.com/users/${username}`, {      /*fetch cria requisições*/
        method:'GET'
    })   

    const user = await response.json();

    const profiles = document.getElementById("profiles");
    const profileElement = document.createElement("div");
    profileElement.classList.add("profile-item");
    profileElement.innerHTML = `
        <img src= "${user.avatar_url}"/>
        <h2>${user.name || user.login}</h2>
        <p> </p>
    `
    profiles.appendChild(profileElement)

    console.log(user)

}