const commentsData=()=>{
    fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(res=> res.json())
    .then(data=> displaycomments(data.slice(0,20)))
}
const displaycomments=datas=>{
   const commentsContainer=document.getElementById('comments-container')
  datas.forEach(data => {
    //   console.log(data)
    const commentsDiv=document.createElement('div');
    commentsDiv.classList.add('comments')
    commentsDiv.innerHTML=`
    <h3>Id: ${data.id}</h3>
    <h3>Email: ${data.email}</h3>
    <h3>Name: ${data.name}</h3>
    <p>${data.body}</p>
    <button  onclick="dynamicDataLoad('${data.postId}')">Details</button>
    
    `
    commentsContainer.appendChild(commentsDiv)
});
}
const dynamicDataLoad=datas=>{
fetch(`https://jsonplaceholder.typicode.com/posts/${datas}`)
.then(res=> res.json())
.then(data => displaydetailData(data))

}
const displaydetailData=post=>{
console.log(post)
const postContainer=document.getElementById('post-container')
postContainer.innerText='';
const postDiv=document.createElement('div')
postDiv.classList.add('post')
postDiv.innerHTML=`
 <h2>postId: ${post.userId}</h2>
 <h4>Id: ${post.id}</h4>
 <p>Title: ${post.title}</p>
 <p>${post.body}</P>
`
postContainer.appendChild(postDiv)
}
commentsData()