const apiurl = `http://localhost:5000`;
// console.log(apiurl,"apiurl")
const postform = document.querySelector('#create-post-form');
const createPostTitle = document.querySelector('#post_title');
const createPostBody = document.querySelector('#post_body');
const tBody = document.querySelector('#todos-listing')

// making a data in api
postform.addEventListener('submit',(e)=>{
  e.preventDefault();
  const createPostTitleValue = createPostTitle.value;
  const createPostBodyValue = createPostBody.value;


  const body ={
    Title:createPostTitleValue,
    Body:createPostBodyValue,
  }

  fetch(apiurl,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify(body),
  })
  .then( async(response)=>{
    const dataconvertedIntOJson = await response.json();
    console.log(dataconvertedIntOJson,"data is converted");
    
   await CreatePost();
  })
  .catch(console.log("Worst Action IS taken"))
})


const CreatePost =async ()=> {
  return(
   await fetch(apiurl)
.then((data)=>{ data.json()})
.then((data)=>{
  let fetchingData ="";
  data?.forEach((singleData)=>{
    fetchingData += `<tr>
    <td>${singleData?.id}</td>
    <td>${singleData?.userId}</td>
    <td>${singleData?.title}</td>
    <td>
    <a class="btn btn-primary edit-btn"  href="#edit-post" data-post-id="${singleData?.id}">Edit</a>
     </td>
    <td>
      <a href="#" class="btn btn-danger delete-btn" data-post-id="${singleData?.id}">Delete</a>
    </td>
  </tr>`
  });
  tBody.innerHTML=fetchingData;
})
  )
 await CreatePost();
}