// const apiurl = `https://jsonplaceholder.typicode.com/posts`;
// const tbody = document.querySelector("#todos-listing");
// const postform = document.querySelector('#create-post-form');
// const postformtitle = document.getElementById('post_title');
// const postformbody = document.querySelector('#post_body');
// const postformsubmitBTN = document.querySelector('#create-post-form button');
// const editbtntbody = document.querySelector('.edit-btn');
// const editposttitlefield = document.querySelector('#edit_post_title');
// const editPostBodyField = document.querySelector('#edit_post_body');
// const editpostfeildID = document .querySelector('#edit_post_id')
// const editpostformbtn = document.querySelector('#edit-post-form');
// const loader = document.querySelector('.loader-container');

// //working on post form

// postform.addEventListener('submit',(e)=>{
//   e.preventDefault();
//   const postformtitlevalue = postformtitle.value;
//   const postformbodyvalue = postformbody.value;

//   if(!postformtitlevalue || !postformbodyvalue){
//     alert("please fill the form")
//     return;
//   }

//   postformsubmitBTN.setAttribute("disabled","disabled")
//   loader.style.display = "flex";


//   const body = {
//     title:postformtitlevalue,
//     body:postformbodyvalue,
//   }
// //making a request

// editpostformbtn.addEventListener('submit',(e)=>{
//   e.preventDefault();

//   const editPostFielTitleValue = editposttitlefield.value;
//   const editPostFieldBodyValue = editPostBodyField.value;
//   const editPostFielIdValue = editpostfeildID.value;

//   if(!editPostFielTitleValue||!editPostFieldBodyValue ||!editPostFielIdValue){
//     alert("Oops something went wrong")
//     return;
//   }
//   const body ={
//     title:editPostFielTitleValue,
//     body:editPostFieldBodyValue,
//   };
//   fetch(`${apiurl}/${editPostFielIdValue}`,{
//     method:"PUT",
//     headers:{
//       "Content-Type":"application/json",
//     },
//     body: JSON.stringify(body),
//   })
//   .then((data)=>{
//     const convertingDataToJson = data.json();

//     $('edit-post').modal("hide");
//     selectLoader.style.display = "none";

//   })
// })

// //
// fetch(apiurl, {
//   method:"POST",
//   headers:{
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(body),
// })
// .then(async(data) =>{
// const jasondata = await data.json();
// postformtitle.value ="";
// postformbody.value ="";
// postformsubmitBTN.removeAttribute("disabled");
// $("#create-post").modal("hide");
// await createpost();

// })
// .catch((error) =>{
//   console.log("error");
//   alert("Something went wrong");
// })

// })
// //fetchin data
// //making function
// const createpost = async () =>{
//   loader.style.display = "flex";

//   return(
//    await fetch(apiurl)
   
//     .then((resolve) => resolve.json())
//     .then((data) => {
//     let outputdata = "";
//     data?.forEach((eachdata) => {
//         outputdata +=`<tr>
//         <td>${eachdata?.id}</td>
//         <td>${eachdata?.userId}</td>
//         <td>${eachdata?.title}</td>
//         <td>
//         <a class="btn btn-primary edit-btn"  href="#edit-post" data-post-id="${eachdata?.id}">Edit</a>
//          </td>
//         <td>
//           <a href="#" class="btn btn-danger delete-btn" data-post-id="${eachdata?.id}">Delete</a>
//         </td>
//       </tr>`
//     });
//     tbody.innerHTML = outputdata;
//     loader.style.display = "none";
// })
// .catch((worstAction) => console.log(worstAction,"worst action is taken"))
//   );
// };
// createpost();

// const getPostById = (postsid)=>{
//   return fetch(`${apiurl}/${postsid}`)
//   .then((data)=>data.json())
//   .then((data)=> {return data})
//   .catch(console.error)
// }


// tbody.addEventListener('click',async(e)=>{
//   e.preventDefault();
//   const currentElement = e.target;

//   //delete btn

//   if(currentElement.classList.contains("delete-btn") && confirm("ARE YOU SURE?")){
//     const postsid = currentElement.getAttribute("data-post-id");
//     loader.style.display = "flex";

//     fetch(`${apiurl}/${postsid}`,{
//       method:"DELETE",
//     })
//     .then(async(DATA)=>{
//       const convertinDataToJson = DATA.json();
//       console.log(convertinDataToJson,"converted");
//       createpost();
//       loader.style.display = "none";

//     })
//   };

//   //editing post

//   if(currentElement.classList.contains("edit-btn")){
//     loader.style.display = "flex";

//     const postsid = currentElement.getAttribute("data-post-id");
//     const eachdata = await getPostById(postsid);
//     $("#edit-post").modal("show");
//     editposttitlefield.value = eachdata?.title;
//     editPostBodyField.value = eachdata?.body;
//     editpostfeildID.value = eachdata?.id;
//     loader.style.display = "none";

//   }
// });
// createpost();



// // making a request on api








const apiBaseUrl = `https://jsonplaceholder.typicode.com/posts`;
const tbody = document.querySelector("#todos-listing");
// const createPostForm = document.querySelector("#create-post-form");
const createPostForm = document.getElementById("create-post-form");
const postTitleInputField = document.querySelector("#post_title");
const postBodyInputField = document.querySelector("#post_body");
const editPostForm = document.querySelector("#edit-post-form");
const editPostTitleField = document.querySelector("#edit_post_title");
const editPostBodyField = document.querySelector("#edit_post_body");
const editPostIdField = document.querySelector("#edit_post_id");
const selectLoader = document.querySelector(".loader-container");
// function() {}  = () => {}

createPostForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const createPostFormBtn = document.querySelector("#create-post-form button");
  const postTitleInputValue = postTitleInputField?.value;
  const postBodyValue = postBodyInputField?.value;

  if (!postTitleInputValue || !postBodyValue) {
    alert("please fill the input values");
    return;
  }

  const body = {
    title: postTitleInputValue,
    body: postBodyValue,
  };

  createPostFormBtn.setAttribute("disabled", "disabled");

  selectLoader.style.display = "flex";

  fetch(apiBaseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(async (data) => {
      const jsonData = await data.json();
      console.log(jsonData, "jsonData");
      postTitleInputField.value = "";
      postBodyInputField.value = "";
      $("#create-post").modal("hide");
      createPostFormBtn.removeAttribute("disabled");
      await getPosts();

      selectLoader.style.display = "none";
    })
    .catch((error) => {
      // console.log(error)'
      createPostFormBtn.removeAttribute("disabled");
      alert("oops something went wrong");
      selectLoader.style.display = "none";
    });
});

editPostForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const editPostIdFieldValue = editPostIdField?.value;
  const editPostBodyFieldValue = editPostBodyField?.value;
  const editPostTitleFieldValue = editPostTitleField?.value;

  if (
    !editPostIdFieldValue ||
    !editPostBodyFieldValue ||
    !editPostTitleFieldValue
  ) {
    alert("oops something went wrong! we cannot edit the post");
    return;
  }
  const body = {
    title: editPostTitleFieldValue,
    body: editPostBodyFieldValue,
  };

  selectLoader.style.display = "flex";

  fetch(`${apiBaseUrl}/${editPostIdFieldValue}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(async (data) => {
      // const jsonData = await data.json();
      // console.log(jsonData, "jsonData");
      $("#edit-post").modal("hide");
      await getPosts();
      selectLoader.style.display = "none";
    })
    .catch((error) => {
      console.error(error);
      selectLoader.style.display = "none";
    });
});

const getPostById = (postId) => {
  return fetch(`${apiBaseUrl}/${postId}`)
    .then((data) => data.json())
    .then((data) => {
      console.log(data, "data");
      return data;
    })
    .catch(console.error);
};

// const singleData = await getPostById(1);

const getPosts = () => {
  selectLoader.style.display = "flex";
  return (
    fetch(apiBaseUrl)
      .then((response) => response.json())
      // .then((response) => console.log(response, "response"));
      .then((data) => {
        // console.log(data, "data");
        let output = "";
        data?.forEach((singleData) => {
          output += `<tr>
          <td>${singleData?.id}</td>
          <td>${singleData?.userId}</td>
          <td>${singleData?.title}</td>
          <td>
           <a class="btn btn-primary edit-btn"  href="#edit-post" data-post-id="${singleData?.id}">Edit</a>
           </td>
          <td>
          <a href="#" class="btn btn-danger delete-btn" data-post-id="${singleData?.id}">Delete</a>
          </td>
        </tr>`;
        });

        // console.log(output, "output");
        // tbody.append(output);
        tbody.innerHTML = output;
        selectLoader.style.display = "none";
      })
      .catch((error) => {
        console.log(error);
        selectLoader.style.display = "none";
      })
  );
};

getPosts();

tbody.addEventListener("click", async (event) => {
  event.preventDefault();
  const currentElement = event.target;

  if (
    currentElement.classList.contains("delete-btn") &&
    confirm("Are you sure ?")
  ) {
    const postId = currentElement.getAttribute("data-post-id");
    selectLoader.style.display = "flex";
    fetch(`${apiBaseUrl}/${postId}`, {
      method: "DELETE",
    })
      .then(async (data) => {
        const convertDataToJson = await data.json();
        console.log(convertDataToJson, "convertDataToJson");
        getPosts();
        selectLoader.style.display = "none";
      })
      .catch(console.error);
    // .catch((error) => console.error(error));
  }

  if (currentElement.classList.contains("edit-btn")) {
    const postId = currentElement.getAttribute("data-post-id");
    selectLoader.style.display = "flex";
    const singleData = await getPostById(postId);
    selectLoader.style.display = "none";
    $("#edit-post").modal("show");

    editPostTitleField.value = singleData?.title;
    editPostBodyField.value = singleData?.body;
    editPostIdField.value = singleData?.id;
  }
});
/*  
Rest Api Pattern

Request Methods

GET	    /posts              (get all posts)
GET	    /posts/1            (get post by id)
GET	    /comments?postId=1  (get post comments by postId)
POST	  /posts              (create post)
PUT	    /posts/1            (update specific post with all data like title,body)
PATCH	  /posts/1            (update specific post partially with some data like only title or body)
DELETE  /posts/1            (delete post by id)



*/
