const randomUserData=()=>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res=>res.json())
    .then(data=>displayUsers(data.results))
}
const displayUsers=users=>{
    
    const usersContainer=document.getElementById('users-container')
    users.forEach(user => {
        // console.log(user)
    const userDiv=document.createElement('div')
    userDiv.classList.add('card')
    userDiv.innerHTML=`
    <img src="${user.picture.large}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">Street: ${user.location.street.name}</h5>
       <p class="card-text">City: ${user.location.city}</p>
       <p class="card-text">Coordinates: ${user.location.coordinates.longitude}</p>
       <p class="card-text">Timezone: ${user.location.timezone.description}</p>
      
    </div>
    `
   usersContainer.appendChild(userDiv)
    });
    
}
randomUserData()