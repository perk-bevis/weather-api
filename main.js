var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var value = document.querySelector('.value');
var shortDesc= document.querySelector('.short-desc');
var visibility = document.querySelector('.visibility span');
var wind = document.querySelector('.wind span');
var sun = document.querySelector('.sun span');
var value = document.querySelector('.value');

async function changweatherUI(){
    search.value.trim()
    let apiURL =`https://api.openweathermap.org/data/2.5/weather?q=ha noi&appid=c523697cf97add0c2cf3f42505863f26`

    let data = await fetch(apiURL).then(res => res.json())
    console.log(data)
}

changweatherUI()
