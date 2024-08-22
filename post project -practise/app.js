// const apiurl = `https://jsonplaceholder.typicode.com/posts`;
// const todosListing = document.getElementById('todos-listing');




// const getPost = async ()=>{
//   return (
//     await fetch(apiurl)
//     .then((resolve)=>resolve.json())
//     .then((data)=>{
//       let outputData = "";
//       data?.forEach((eacData)=>{
//         outputData +=`<tr>
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

//       });
//       todosListing.innerHTML=outputData;
//     })
//   )

// }
// getPost();
// const apiurl = `https://jsonplaceholder.typicode.com/posts`;
// const todosListing = document.getElementById('todos-listing');

// const getPost = async () => {
//   try {
//     const response = await fetch(apiurl);
//     const data = await response.json();
//     let outputData = "";
    
//     data.forEach((eachData) => {
//       outputData += `
//         <tr>
//           <td>${eachData?.id}</td>
//           <td>${eachData?.userId}</td>
//           <td>${eachData?.title}</td>
//           <td>
//             <a class="btn btn-primary edit-btn" href="#edit-post" data-post-id="${eachData?.id}">Edit</a>
//           </td>
//           <td>
//             <a href="#" class="btn btn-danger delete-btn" data-post-id="${eachData?.id}">Delete</a>
//           </td>
//         </tr>`;
//     });
    
//     todosListing.innerHTML = outputData;
//   } catch (error) {
//     console.error('Error fetching posts:', error);
//   }
// };

// getPost();
const apiurl = `https://jsonplaceholder.typicode.com/posts`;
const todosListing = document.getElementById('todos-listing');

const getPost = async () => {
  try {
    const response = await fetch(apiurl);
    const data = await response.json();
    let outputData = "";
    
    data.forEach((eachData) => {
      outputData += `
        <tr>
          <td>${eachData?.id}</td>
          <td>${eachData?.userId}</td>
          <td>${eachData?.title}</td>
          <td>
            <a class="btn btn-primary edit-btn" href="#edit-post" data-post-id="${eachData?.id}">Edit</a>
          </td>
          <td>
            <a href="#" class="btn btn-danger delete-btn" data-post-id="${eachData?.id}">Delete</a>
          </td>
        </tr>`;
    });
    
    todosListing.innerHTML = outputData;
    addEventListeners();
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

const addEventListeners = () => {
  const editButtons = document.querySelectorAll('.edit-btn');
  const deleteButtons = document.querySelectorAll('.delete-btn');
  
  editButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const postId = event.target.dataset.postId;
      console.log(`Edit post with ID: ${postId}`);
      // Add your edit functionality here
    });
  });

  deleteButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const postId = event.target.dataset.postId;
      console.log(`Delete post with ID: ${postId}`);
      // Add your delete functionality here
    });
  });
};

getPost();
