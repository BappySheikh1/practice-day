const sportsPlayerData=search=>{
    fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
    .then(res=>res.json())
    .then(data=>displayPlayerData(data.player))
}
const displayPlayerData=players=>{
    const playersContainer=document.getElementById('players-container')
    playersContainer.innerText='';
    players.forEach(player => {
        console.log(player)
     const playerDiv=document.createElement('div')
     playerDiv.classList.add('col')
     playerDiv.innerHTML=`
     <div onclick="playerDetailData(${player.idPlayer})" class="card h-100">
         <img src="${player.strThumb}" class="card-img-top" alt="logo">
      <div class="card-body">
      <h5 class="card-title">Name: ${player.strPlayer}</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
     </div>
     `
     playersContainer.appendChild(playerDiv)
    });
}
const searchPlayersName=()=>{
    const searchField=document.getElementById('search-field')
    const searchText=searchField.value
    sportsPlayerData(searchText)
    searchField.value='';
}

const playerDetailData=playerId=>{
    fetch(`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${playerId}`)
    .then(res=> res.json())
    .then(data=>displayDetail(data.players[0]))
   
}
const displayDetail=player=>{
    // console.log(player)
    const detailContainer=document.getElementById('detail-container')
    detailContainer.innerHTML=``;
    const detailDiv=document.createElement('div')
    detailDiv.classList.add('card')
    detailDiv.innerHTML=`
    <img src="${player.strThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Name: ${player.strPlayer}</h5>
                  <p class="card-text">${player.strDescriptionEN.slice(0,50)}</p>
                 <p>Weight: ${player.strWeight}</p>
                </div>
    `
    detailContainer.appendChild(detailDiv)
}
sportsPlayerData('messi')