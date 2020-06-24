import * as Types from './ActionTypes'
import * as Status from '../utils/constants'
import socket from '../socket'

export const login = userName => dispatch => {
    console.log(userName);

    socket.emit('login', { userName }, status => {
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
    const { currentChat, chatRooms } = getState()
    // no state changes
    if (chat.localeCompare(currentChat) === 0) {
        return
    }

    const chatActionTemplate = (type, chat) => ({
        type,
        payload: {
            room: chat
        }
    })
    console.log(chatRooms, chat, chatRooms.includes(chat));

    if (!(chatRooms.includes(chat))) {
        socket.emit('join room', chat, status => {
            switch (status) {
                case Status.SUCCESS:
                    dispatch(chatActionTemplate(Types.NEW_CHAT, chat))
                    dispatch(chatActionTemplate(Types.JOIN_CHAT, chat))
                    break

                default:
                    break
            }
        })
    } else {
        dispatch(chatActionTemplate(Types.JOIN_CHAT, chat))
    }
}

export const sendMessage = msg => (dispatch, getState) => {
    const { user, currentChat } = getState()
    const msgBody = {
        origin: user,
        room: currentChat,
        time: Date.now(),
        payload: msg
    }
    socket.emit('message', msgBody, () => {
        dispatch({
            type: Types.SEND_MESSAGE,
            payload: {
                chat: currentChat,
                message: msgBody
            }
        })
    })
}

