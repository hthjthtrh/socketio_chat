import * as Types from './ActionTypes'
import * as Status from '../utils/constants'

export const login = userName => (dispatch, getState) => {
    const {socket} = getState()
    socket.emit('login', {userName}, status => {
        switch (status) {
            case Status.SUCCESS:
                dispatch({
                    type: Types.LOGIN,
                    payload: {
                        user: userName
                    }
                })
                break;
            default:
                break;
        }
    })
}

export const joinChat = chat => (dispatch, getState) => {
    const {socket, currentChat, chatRooms} = getState()
    // no state changes
    if (chat === currentChat){
        return
    }

    const chatActionTemplate = (type, chat) => ({
        type,
        payload: {
            chat
        }
    })

    if (!(chat in chatRooms)){
        socket.emit('join room', chat, (status) => {
            switch (status) {
                case Status.SUCCESS:
                    dispatch(chatActionTemplate(Types.NEW_CHAT,chat))
                    
                    dispatch(chatActionTemplate(Types.JOIN_CHAT,chat))
                    break

                default:
                    break
            }
        })
    } else {
        dispatch(chatActionTemplate(Types.JOIN_CHAT,chat))
    }
}

export const sendMessage = msg => (dispatch,getState) => {
    const {socket, currentChat} = getState()
    socket.emit('message', msg, () => {
        dispatch({
            type: Types.SEND_MESSAGE,
            payload: {
                chat: currentChat,
                message: msg
            }
        })
    })
}

export const receiveMessage = msg => (dispatch, getState) => {
    const {currentChat} = getState()
    dispatch({
        type: Types.RECEIVE_MESSAGE,
        payload: {
            chat: currentChat,
            message: msg
        }
    })
}

export const populateHistory = history => (dispatch, getState) => {
    dispatch({
        type: Types.POPULATE_HISTORY,
        payload: history
    })
}

