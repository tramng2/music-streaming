export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    token: null,
    playlists: null,
    playlistId: null,
    playlistInfo: null
}

const reducer = (state, action) => {
    console.log(state.playlistInfo)
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_PLAYLIST_ITEM':
            return {
                ...state,
                playlistId: action.playlistId
            }
        case 'SET_PLAYLIST_INFO':
            return {
                ...state,
                playlistInfo: action.playlistInfo
            }
        default: return state

    }
}

export default reducer;