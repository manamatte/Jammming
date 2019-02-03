


//const keyAPP='9794f21feb1c4c12bb6c76ce1d7b44bd';
let access_token=null;
let expires_in=0;

const client_id = "9794f21feb1c4c12bb6c76ce1d7b44bd"; // Your client id
const client_secret = "b6c2ee32edcb42729c9e5c98ccceb0e7"; // Your secret
const redirect_uri = "'http://localhost:3000/'"; // Your redirect uri


const Spotify={
  getAccessToken(){
    if(access_token!==null){
      console.log("0   "+access_token+"ll "+ expires_in)
      return access_token
    }
    else{

      let URL = window.location.href;
      access_token=URL.match(/access_token=([^&]*)/);
      console.log("1   "+access_token +"ll "+ expires_in+"URL  "+URL)
      expires_in=URL.match(/expires_in=([^&]*)/);

      if(access_token!==null && expires_in!==null){  //or 0

        window.setTimeout(() => access_token = '', expires_in * 1000);
        window.history.pushState('Access Token', null, '/');
      }else {
        let URL_login ="https://accounts.spotify.com/authorize?client_id="+client_id+"&response_type=token&scope=playlist-modify-public&state=123&redirect_uri="+redirect_uri;
        //https://accounts.spotify.com/authorize?client_id=CLIENT_ID&response_type=token&scope=playlist-modify-public&redirect_uri=REDIRECT_URI
        //GET https://accounts.spotify.com/authorize?client_id=9794f21feb1c4c12bb6c76ce1d7b44bd&response_type=token&scope=playlist-modify-public&redirect_uri=http://localhost:3000/
        window.location.assign(URL_login)
        //check
        let URL = window.location.href;
        access_token=URL.match(/access_token=([^&]*)/);
        expires_in=URL.match(/expires_in=([^&]*)/);
        console.log("2   "+access_token +"ll "+ expires_in+"URL  "+URL)
      }
      return access_token;
      //GET https://accounts.spotify.com/authorize
    }

  },
  search(term){
    let accessToken=this.getAccessToken();
    return fetch(" https://api.spotify.com/v1/search?type=track&q="+term,
    {
      headers: {Authorization: `Bearer ${accessToken}`}
    }
    ).then(response => {
      return response;
    }).then( jsonRep =>{
      console.log(accessToken)
      console.log(jsonRep)
//    if(jsonRep.tracks){
//        return jsonRep.tracks.map(track=>(
//          {
//            name: track.name,
//            artist:track.artists[0].name,
//            album:track.album.name,
//            id:track.id,
//            uri:track.uri
//          }
//        )
//        );
//      }else{
       return [{}];
//      }
    }

    );
  }
}

export default Spotify;
