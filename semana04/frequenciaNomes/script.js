let chart

async function loadName(){
    const name = document.getElementById("buscarNome").value;
    if(!name){
        alert("Indique um nome valido");
        return;
    }

    const response = await fetch(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${name.toUpperCase()}`, {      /*fetch cria requisições*/
        method:'GET'
    })   

    const dados = await response.json(); 
    
    const registro = dados[0].res;

    // const vetorDecadas = [];
    // const vetorValores = [];
    // for(let i = 0; i < registro.lenght; i++){
    //     vetorDecadas.push(registro[i].periodo);
    //     vetorValores.push(registro[i].frequencia);
    // }

    const vetorDecadas = registro.map((item) => {
        

        item.periodo.replace(/[^0-9]/g, "").substring(4, 9)
    )}; 
    const vetorValores = registro.map((item) => item.frequencia)/*A função map ja retorna um vetor com os os dados manipulados*/

    if(chart){
        chart.destroy()
    }
    
    const ctx = document.getElementById('chart');
        chart = new Chart(ctx, {
        type:'line',
        data:{
            labels: vetorDecadas, /*linha horizontal*/
            datasets: [{
                label: `Frequencia do nome ${name} por decada`,
                data: vetorValores
                
            }]
        }
    })


    console.log(dados)
    
}

// servicodados.ibge.gov.br/api/v2/censos/nomes/diego
// const profiles = document.getElementById("profiles");
// const profileElement = document.createElement("div");
// profileElement.classList.add("profile-item");
// profileElement.innerHTML = `
//     <h2>${dados.nome}</h2>
//     <h3>${}</h3>
    
// `;

// profiles.appendChild(profileElement)