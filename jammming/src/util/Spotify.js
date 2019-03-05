


//const keyAPP='9794f21feb1c4c12bb6c76ce1d7b44bd';
let access_token=null;
let expires_in=0;
                  // 4e981f52e1c24b3a9d441bbfb1820cb6
const client_id = "4e981f52e1c24b3a9d441bbfb1820cb6"; // Your client id
const client_secret = "b6c2ee32edcb42729c9e5c98ccceb0e7"; // Your secret
const redirect_uri = "http://localhost:3000/"; // Your redirect uri


const Spotify={
  getAccessToken(){
    if(access_token!==null){
      console.log("0   "+access_token+"ll "+ expires_in)
      return access_token
    }
    else{

      let URL = window.location.href;
      access_token=String(URL.match(/access_token=([^&]*)/));
      if(access_token!==null) {access_token=access_token.replace('access_token=','')};
      let expires_in_S=String(URL.match(/expires_in=([^&]*)/));
	  if(expires_in_S!==null) {expires_in=Number(expires_in_S.replace('expires_in=',''))};
	  console.log("1   "+access_token +"ll "+ expires_in+"URL  "+URL)

      if(access_token===null){
        let URL_login ="https://accounts.spotify.com/authorize?client_id="+client_id+"&response_type=token&scope=playlist-modify-public&state=123&redirect_uri="+redirect_uri;
        //https://accounts.spotify.com/authorize?client_id=CLIENT_ID&response_type=token&scope=playlist-modify-public&redirect_uri=REDIRECT_URI
        //GET https://accounts.spotify.com/authorize?client_id=9794f21feb1c4c12bb6c76ce1d7b44bd&response_type=token&scope=playlist-modify-public&redirect_uri=http://localhost:3000/




        console.log("2a   "+access_token +"ll "+ expires_in+"URL_login  "+URL_login)
        //const URL_log = //async ()=>{await fetch(window.location.assign(URL_login))}
        //console.log("2b   "+URL_log)

        window.location.assign(URL_login)
        //check
        let URL = window.location.href;
		console.log("2b   "+URL)  //alert(str.split("_").pop());
        access_token=URL.match(/access_token=([^&]*)/).split("=").pop();
        expires_in=URL.match(/expires_in=([^&]*)/).split("=").pop();
        console.log("2   "+access_token +"ll "+ expires_in+"URL  "+URL)
      }else{  //or 0

        window.setTimeout(() => access_token = '', expires_in * 1000);
        window.history.pushState('Access Token', null, '/');
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
      console.log("all"+accessToken)
      console.log("Jall"+jsonRep)
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
	    let g=[{}]
       return g;
//      }
    }

    );
  },

  savePlaylist(name, trackURIs){
  if(!name || !trackURIs.length) {
    return;
  }
    const accessToken = Spotify.getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`};
    let userId = '';
    return fetch('https://api.spotify.com/v1/me', {headers: headers}
    ).then(response => response.json()
  ).then(jsonResponse => {
    userId = jsonResponse.id;
      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({name: name})
      }).then(response => response.json()
    ).then(jsonResponse => {
        const playlistId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({uris: trackURIs})
        });
      });
  });
}
}

export default Spotify;
