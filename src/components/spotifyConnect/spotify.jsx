export const authEndpoint = "https://accounts.spotify.com/authorize";
//  here i put my id in order to get  a malo id which is helping 
const clientId = "6662ade64fab4fb098674e489d97a6cb";
// Here is the link i get from spotify client side
const redirectUri = "http://localhost:5174/";
//   here is some element in url which i wanna use in order to take some infos about user
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
"user-library-read",
 " playlist-read-private"
];
//  This function helps me to get in my url a whole url 
export const getTokenFromResponse = () => {
  //  here i am going to take url from # 
  return window.location.hash
    //  here i delete # of my url which is the first element
    .substring(1)
    //  here i convert all elements of my url in the array element without &
    .split("&")
    //  here reduce method is gonna help  me to put that element in array
    .reduce((initial, item) => {
      //  here i get the url without all =
      var parts = item.split("=");
      //  here i take the first element of my array parts and i insert to it like the first value 
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};
//  that is my final url which will be use in Login file .jsx
export  const  LoginUrl  = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;