export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    token: null,
    playlists: null
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'SET-USER':
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

        default: return state

    }
}

export default reducer;