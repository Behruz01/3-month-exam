const elSelect = document.querySelector("#select");
const elList = document.querySelector("#list");
const elSearch = document.querySelector("#search");

// for select option
function renderPostId(postArray, p) {
  let postIdArray = [];

  postArray.forEach((element) => {
    if (!postIdArray.includes(element.postId)) {
      postIdArray.push(element.postId);
    }
  });

  postIdArray.forEach((elemen) => {
    let elOption = document.createElement("option");
    elOption.value = elemen;
    elOption.textContent = elemen;
    p.appendChild(elOption);
  });
}
renderPostId(data, elSelect);

// for render post
const renderPosts = (array, element = elList) => {
  element.innerHTML = "";

  array.forEach((post) => {
    const newLi = document.createElement("li");
    newLi.className = "col-3 mb-3";
    const newCard = document.createElement("div");
    newCard.className = "card";

    newLi.appendChild(newCard);
    newCard.innerHTML = `
    <div class="card-body flex-column justify-content-between shadow p-4" style="min-height: 550px">
                <p class="parag text-center">Post ID:${post.postId}</p>
                <h2 class="card-title">${post.name}</h2>
                <p class="card-text">
                  ${post.body}
                </p>
                <a href="#" class="text-decoration-none">${post.email}</a>
                <button data-id="${post.id}" class="btn btn-outline-danger delete-btn d-block mt-3"> Delete </button>
              </div>
              `;
    element.appendChild(newLi);
  });
};
renderPosts(data);

// search
elSearch.addEventListener("input", (i) => {
  let element = i.target;

  let array = [];

  data.forEach(function (post) {
    if (post.name.toLowerCase().includes(element.value.toLowerCase())) {
      array.push(post);
    }
  });

  renderPosts(array);
});
renderPosts(data);

// for delete button
elList.addEventListener("click", (evt) => {
  const target = evt.target;
  console.log(target);

  if (target.className.includes("delete-btn")) {
    let newPost = [];
    const id = Number(target.dataset.id);

    data.forEach((post) => {
      if (post.id !== id) {
        newPost.push(post);
      }
    });
    data = newPost;
    renderPosts(data);
  }
});

// for filtered post
elSelect.addEventListener("change", () => {
  const opt = elSelect.value;

  let filteredPost = [];

  if (opt == "All") {
    renderPosts(data);
  } else {
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      if (element.postId == opt) {
        filteredPost.push(element);
      }
    }
    renderPosts(filteredPost);
  }
});
