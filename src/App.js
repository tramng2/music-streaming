import React, { useEffect, useContext } from "react"
import './App.css';
import { getTokenFromUrl } from './spotify'
import Login from "./Login/Login"
import SpotifyWebAbi from "spotify-web-api-js"
import Player from "./Player/Player";
import { DataContext } from "./DataContext"

const spotify = new SpotifyWebAbi();

function App() {
  const [{ user, token, playlistId }, dispatch] = useContext(DataContext)
  // console.log(playlistId)
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""
    //hash is object includes access-token
    const _token = hash.access_token

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        // console.log('line 20 user', user)
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })
      // console.log('line 36 token', token)
      spotify.getUserPlaylists().then((playlist) => {
        // console.log('line 36 token', playlist)
        dispatch({
          type: 'SET_PLAYLIST',
          playlists: playlist
        })
      })
      //hard code
    }
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      spotify.getPlaylist(playlistId)
        .then((response) =>
          dispatch({
            type: "SET_PLAYLIST_INFO",
            playlistInfo: response,
          }))
        .catch(e => {
          console.log(e);
        });
    }, 500)
  }, [dispatch, playlistId])

  return (
    <div className="app">
      {token ? <Player /> : <Login spotify={spotify} />}
    </div>
  )
}

export default App;
