const api={
    key: "d23bde7359041fc30ec60d3aeffb369";
    base: "https://api.openweathermap.org/data/2.5"
}
const searchbox=document.querySelector('.search-box');
searchbox.addEventListener('keypress',setQuery);

function setQuery(evt)
{
    if (evt.keyCode ==13){
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}