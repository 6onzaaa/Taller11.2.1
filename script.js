const url1="https://restcountries.com/v3.1/name/";
let btn = document.getElementById("btnBuscar");
let container = document.getElementById("contenedor");

async function search(a){
    let response = await fetch (a);
    if (response.ok){
        let responseContents= await response.json();
        console.log(responseContents)
        let data=responseContents
        showInfo(data)
    } else {
        alert ("País no encontrado")
    }
    }
    
    function showInfo(data){
            data.forEach(function (item){
            const flag = item.flags.png;
            const name = item.name.common;
            const title = item.name.official;
            let lenguage = item.languages.spa;
            //if (lenguage===undefined){
            //    lenguage=item.lenguages.eng
            //}
            const continent = item.continents;
            const capital = item.capital;
            const popul = item.population;
            const map = item.maps.googleMaps;
            let contenido = `<div id="country">
            <h2 class="titulo">${title}</h2>
            <img src=${flag}>
            <p class="description"> Continente: ${continent}</p>
            <p class="description"> Capital: ${capital}</p>
            <p class="description"> Población: ${popul}</p>
            <p class="description"> Idioma: ${lenguage}</p>
            <p class="description"> Mapa: <a href="${map}">${name}</a></p>
            </div>
            `
            container.innerHTML += contenido
        }
    )}
    
    btn.addEventListener("click", ()=>{
        container.innerHTML=""
        let input = document.getElementById("inputBuscar")
        let contenido = input.value;
        let URL = url1 + contenido;
        console.log(contenido);
        search(URL)
    })
