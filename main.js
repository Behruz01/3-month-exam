const elSelect = document.querySelector("#select");
const elList = document.querySelector("#list");

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
//
//
//
//
//
//
//
//
//

const renderPosts = (array, element = elList) => {
  element.innerHTML = "";

  array.forEach((post) => {
    const newLi = document.createElement("li");
    newLi.className = "col-3";
    const newCard = document.createElement("div");
    newCard.className = "card";

    newLi.appendChild(newCard);
    newCard.innerHTML = `
    <div class="card-body">
                <h2 class="card-title">${post.name}</h2>
                <p class="card-text">
                  ${post.body}
                </p>
                <a href="#" class="text-decoration-none">${post.email}</a>
              </div>
              `;
    element.appendChild(newLi);
  });
};
renderPosts(data);
