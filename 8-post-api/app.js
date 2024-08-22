const apiBaseUrl = `https://jsonplaceholder.typicode.com/posts`;
const tbody = document.querySelector("#todos-listing");
// const createPostForm = document.querySelector("#create-post-form");
const createPostForm = document.getElementById("create-post-form");
const postTitleInputField = document.querySelector("#post_title");
const postBodyInputField = document.querySelector("#post_body");

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
    })
    .catch((error) => {
      // console.log(error)'
      createPostFormBtn.removeAttribute("disabled");
      alert("oops something went wrong");
    });
});

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
           <a class="btn btn-primary edit-btn"  href="#edit-post">Edit</a>
           </td>
          <td>
          <a href="#" class="btn btn-danger delete-btn">Delete</a>
          </td>
        </tr>`;
    });

    // console.log(output, "output");
    // tbody.append(output);
    tbody.innerHTML = output;
  })
  .catch((error) => console.log(error));

/*  
Rest Api Pattern

Request Methods

GET	    /posts              (get all posts)
GET	    /posts/1            (get post by id)
GET	    /posts/1/comments   (get post comments by postId)
GET	    /comments?postId=1  (get post comments by postId)
POST	  /posts              (create post)
PUT	    /posts/1            (update specific post with all data like title,body)
PATCH	  /posts/1            (update specific post partially with some data like only title or body)
DELETE  /posts/1            (delete post by id)



*/
