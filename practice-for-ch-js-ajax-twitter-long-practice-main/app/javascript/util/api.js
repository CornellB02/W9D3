const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    // Your code here
    ...options.headers
  };

  return await fetch(url, options);
}

function followUser(id) {
  return $.ajax({
    method: "POST",
    url: `/users/${id}/follow`

  })
}


function unfollowUser(id) {
  // debugger
  return $.ajax({
    method: "DELETE",
    url: `/users/${id}/follow`

  })

}

export const unfollow =  this.unfollowUser;




