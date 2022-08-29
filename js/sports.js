const sportsDb=(search)=>{
    fetch(`https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?c=${search}`)
    .then(res=> res.json())
    .then(data=> displaySports(data.countries))
    // .catch(error=>console.log(error))
}
const displaySports=users=>{
    const cardContainer=document.getElementById('card-container')
    cardContainer.innerText='';
    for(const  user of users){
        console.log( user)
        const cardDiv=document.createElement('div')
        cardDiv.classList.add('col')
        cardDiv.innerHTML=`
        <div onclick="countryDetail('${user.strCountry}')" class="card h-100">
        <img src="${user.strBadge}" class="card-img-top" alt="...">
         <div class="card-body">
         <p>Country: ${user.strCountry}</p>
         <h5 class="card-title">Current Session: ${user.strCurrentSeason}</h5>
        <p class="card-text">${user.strLeague}</p>
         </div>
         </div>
        `
        cardContainer.appendChild(cardDiv)
    };
}
const searchCountry=()=>{
   const searchField=document.getElementById('search-field')
   searchText=searchField.value;
   sportsDb(searchText)
}

const countryDetail=countries=>{

   fetch(`https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?c=${countries}`)
   .then(res=>res.json())
   .then(data=>displayDetailsData(data.countries[0]))
 
}
const displayDetailsData=country=>{
    const detailContainer=document.getElementById('cardDetail-container')
    detailContainer.innerHTML=``;
    const detailDiv=document.createElement('div')
    detailDiv.classList.add('card')
    detailDiv.innerHTML=`
    <img src="${country.strBadge}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Country: ${country.strCountry}</h5>
        <h2 class="card-text">Session: ${country.strCurrentSeason}</h2>
         <p>${country.strLeague}</P>           
      </div>
    `
    detailContainer.appendChild(detailDiv)
}
sportsDb('England')