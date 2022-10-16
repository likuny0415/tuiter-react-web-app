const PostSummaryItem = (post) => {
    return (`
    <li class="list-group-item">
    <div class="row">
      <div class="col-10">
        <p class="text-secondary mb-1">${post.topic}</p>
        <span class="fw-bold">${post.userName}</span
        ><i class="fas fa-check-circle"></i
        ><span class="text-secondary"> - ${post.time}</span>
        <p class="fw-bold">
            ${post.title}
        </p>
      </div>
      <div class="col-2 my-auto">
        <img class="img-fluid" src="${post.image}" />
      </div>
    </div>
  </li>
    `)
}

export default PostSummaryItem