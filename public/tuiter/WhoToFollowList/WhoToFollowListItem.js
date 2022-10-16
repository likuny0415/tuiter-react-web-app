const WhoToFollowListItem = (who) => {
    return (`
    <li class="list-group-item">
      <div class="row">
        <div class="col-3 my-auto">
          <img class="img-fluid rounded-circle" src="${who.avatarIcon}" />
        </div>
        <div class="col-5">
          <span class="fw-bold">${who.userName}</span
          ><i class="fas fa-check-circle"></i>
          <p class="text-secondary">@${who.handle}</p>
        </div>
        <div class="col-4 my-auto">
          <button
            class="float-end btn btn-primary rounded-pill ms-auto"
          >
            Follow
          </button>
        </div>
      </div>
    </li>
    `)
}

export default WhoToFollowListItem