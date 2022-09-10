import axios from "axios";

export const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "6662ade64fab4fb098674e489d97a6cb";
const redirectUri = "http://localhost:5174/";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "user-library-read",
  " playlist-read-private",
  'ugc-image-upload',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'streaming',
  'app-remote-control',
  'user-read-email',
  'user-read-private',
  'playlist-read-collaborative',
  'playlist-modify-public',
  'playlist-read-private',
  'playlist-modify-private',
  'user-library-modify',
  'user-library-read',
  'user-top-read',
  'user-read-playback-position',
  'user-read-recently-played',
  'user-follow-read',
  'user-follow-modify'
];

export const LoginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join("%20")}&response_type=token&show_dialog=true`;

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

export const apiClient = axios.create({
   baseURL:"https://api.spotify.com/v1/"
})

export const setClientToken = (token) => {
  
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorizations = "Bearer" + token;
    return config;
  })
}

