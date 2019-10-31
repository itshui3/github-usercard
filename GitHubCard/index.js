/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get("https://api.github.com/users/itshui3")
  .then(response => {
    document.querySelector(".cards").append(makeMyCard(response));
  })

function makeMyCard(obj) {
  const cont = document.createElement("div");
  const img = document.createElement("img");
  const textDiv = document.createElement("div");
  const fullName = document.createElement("h1");
  const handle = document.createElement("h2");
  const location = document.createElement("p");
  const profileUrl = document.createElement("p");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  img.src = obj.data.avatar_url;
  fullName.textContent = obj.data.name;
  handle.textContent = obj.data.login;
  location.textContent = `Location: ${obj.data.location}`;
  profileUrl.textContent = `Profile: ${obj.data.html_url}`;
  followers.textContent = `Followers: ${obj.data.followers}`;
  following.textContent = `Following: ${obj.data.following}`;
  bio.textContent = `Bio: ${obj.data.bio}`;

  cont.classList.add("card");
  fullName.classList.add("name");
  handle.classList.add("username");

  cont.append(img);
  cont.append(textDiv);
  textDiv.append(fullName);
  textDiv.append(handle);
  textDiv.append(location);
  textDiv.append(profileUrl);
  textDiv.append(followers);
  textDiv.append(following);
  textDiv.append(bio);

  return cont;
}
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// axios.get()
//   .then(response => {
//     response.data.forEach( (elem) => {
//       followersArray.push(elem.url);
//     });
//   });



const followersArray = [];
axios.get("https://api.github.com/users/itshui3/followers")
  .then(response => {
    const arr = Array.from(response.data);
    for (let i = 0; i < arr.length; i++) {
      followersArray.push(arr[i].url);
    }
  })

console.log(followersArray);
let arr = [1, 2, 3, 4];
console.log(arr);
axios.get(followersArray[0][0])
  .then(response => {
    document.querySelector(".cards").append(makeMyCard(response));
  });

// for (let i = 0; i < followersArray.length; i++) {
//   axios.get(followersArray[i])
//     .then(response => {
//       document.querySelector(".card").append(makeMyCard(reponse));
//     });

// }



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
