import profileReducer from "./profile-reducer";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs : [
        {id: 1, name: 'Dana'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sara'},
        {id: 4, name: 'Mike'},
        {id: 5, name: 'John'},
        {id: 6, name: 'Anna'}
    ],
    messages : [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Happy Monday)))'},
        {id: 4, message: 'We have to done our project today!'},
        {id: 5, message: "Let's go!"}
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;