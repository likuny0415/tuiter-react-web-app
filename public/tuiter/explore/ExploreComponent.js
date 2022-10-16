import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
    
    <div class="row align-items-center">
      <div class="col-9">
        <input
          class="w-100 p-2 rounded-pill"
          placeholder="Search Twitter"
        />
      </div>
      <div class="col-1 ms-auto me-3">
        <i class="fas fa-cog fa-2x"></i>
      </div>
    </div>

 
    <div class="mt-3">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="#">For you</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sports</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Entertainment</a>
        </li>
      </ul>
    </div>

    
    <div class="mt-2 position-relative">
      <img class="w-100" src="spacex.jpeg" />
      <h1 class="position-absolute ms-2 bottom-0 start-0 text-white">
        SpaceX's Starship
      </h1>
    </div>

    ${PostSummaryList()}
    `)
}

export default ExploreComponent