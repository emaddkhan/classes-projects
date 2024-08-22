const apiurl = `https://jsonplaceholder.typicode.com/posts`;
const tbody = document.querySelector("#todos-listing");
const postform = document.querySelector('#create-post-form');
const postformtitle = document.getElementById('post_title');
const postformbody = document.querySelector('#post_body');
const postformsubmitBTN = document.querySelector('#create-post-form button');
const editbtntbody = document.querySelector('.edit-btn');
const editposttitlefield = document.querySelector('#edit_post_title');
const editPostBodyField = document.querySelector('#edit_post_body');
const editpostfeildID = document .querySelector('#edit_post_id')
const editpostformbtn = document.querySelector('#edit-post-form');
const loader = document.querySelector('.loader-container');

//working on post form

postform.addEventListener('submit',(e)=>{
  e.preventDefault();
  const postformtitlevalue = postformtitle.value;
  const postformbodyvalue = postformbody.value;

  if(!postformtitlevalue || !postformbodyvalue){
    alert("please fill the form")
    return;
  }

  postformsubmitBTN.setAttribute("disabled","disabled")
  loader.style.display = "flex";


  const body = {
    title:postformtitlevalue,
    body:postformbodyvalue,
  }
//making a request

editpostformbtn.addEventListener('submit',(e)=>{
  e.preventDefault();

  const editPostFielTitleValue = editposttitlefield.value;
  const editPostFieldBodyValue = editPostBodyField.value;
  const editPostFielIdValue = editpostfeildID.value;

  if(!editPostFielTitleValue||!editPostFieldBodyValue ||!editPostFielIdValue){
    alert("Oops something went wrong")
    return;
  }
  const body ={
    title:editPostFielTitleValue,
    body:editPostFieldBodyValue,
  };
  fetch(`${apiurl}/${editPostFielIdValue}`,{
    method:"PUT",
    headers:{
      "Content-Type":"application/json",
    },
    body: JSON.stringify(body),
  })
  .then((data)=>{
    const convertingDataToJson = data.json();

    $('edit-post').modal("hide");
    selectLoader.style.display = "none";

  })
})

//
fetch(apiurl, {
  method:"POST",
  headers:{
    "Content-Type": "application/json",
  },
  body: JSON.stringify(body),
})
.then(async(data) =>{
const jasondata = await data.json();
postformtitle.value ="";
postformbody.value ="";
postformsubmitBTN.removeAttribute("disabled");
$("#create-post").modal("hide");
await createpost();

})
.catch((error) =>{
  console.log("error");
  alert("Something went wrong");
})

})
//fetchin data
//making function
const createpost = async () =>{
  loader.style.display = "flex";

  return(
   await fetch(apiurl)
   
    .then((resolve) => resolve.json())
    .then((data) => {
    let outputdata = "";
    data?.forEach((eachdata) => {
        outputdata +=`<tr>
        <td>${eachdata?.id}</td>
        <td>${eachdata?.userId}</td>
        <td>${eachdata?.title}</td>
        <td>
        <a class="btn btn-primary edit-btn"  href="#edit-post" data-post-id="${eachdata?.id}">Edit</a>
         </td>
        <td>
          <a href="#" class="btn btn-danger delete-btn" data-post-id="${eachdata?.id}">Delete</a>
        </td>
      </tr>`
    });
    tbody.innerHTML = outputdata;
    loader.style.display = "none";
})
.catch((worstAction) => console.log(worstAction,"worst action is taken"))
  );
};
createpost();

const getPostById = (postsid)=>{
  return fetch(`${apiurl}/${postsid}`)
  .then((data)=>data.json())
  .then((data)=> {return data})
  .catch(console.error)
}


tbody.addEventListener('click',async(e)=>{
  e.preventDefault();
  const currentElement = e.target;

  //delete btn

  if(currentElement.classList.contains("delete-btn") && confirm("ARE YOU SURE?")){
    const postsid = currentElement.getAttribute("data-post-id");
    loader.style.display = "flex";

    fetch(`${apiurl}/${postsid}`,{
      method:"DELETE",
    })
    .then(async(DATA)=>{
      const convertinDataToJson = DATA.json();
      console.log(convertinDataToJson,"converted");
      createpost();
      loader.style.display = "none";

    })
  };

  //editing post

  if(currentElement.classList.contains("edit-btn")){
    loader.style.display = "flex";

    const postsid = currentElement.getAttribute("data-post-id");
    const eachdata = await getPostById(postsid);
    $("#edit-post").modal("show");
    editposttitlefield.value = eachdata?.title;
    editPostBodyField.value = eachdata?.body;
    editpostfeildID.value = eachdata?.id;
    loader.style.display = "none";

  }
});



// making a request on api









