async function addPerson(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const age = document.getElementById("idade").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("telefone").value;
    const address = document.getElementById("endereco").value;
    const city = document.getElementById("cidade").value;

    if(!name || !age || !email || !phone || !address || !city){
        alert("Preencha todos os campos corretamente");
        return;
    }

    const PERSON = {
        name: name,
        age: age,
        email: email,
        phone: phone,
        address: address,
        city: city
    }

    await fetch("http://localhost:3000/person", {
        method: 'POST',
        body: JSON.stringify(PERSON), //STRINGFY consverte o conteudo para o formato json
        headers: {'Content-Type': 'application/json'}

    })

    console.log(PERSON)
}