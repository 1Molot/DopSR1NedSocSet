import {ActionsTypes, DialogsPagesType, StoreType} from "./State";


 let initialState ={
    dialogsData: [
        {id: 1, name: "Yulia"},
        {id: 2, name: "Semen"},
        {id: 3, name: "Evgenia"},
        {id: 4, name: "Anna"},
        {id: 5, name: "Maria"},
        {id: 6, name: "Anastasia"}
    ],
    messagesData: [
        {id: 1, text: "Hi"},
        {id: 2, text: "Hello"},
        {id: 3, text: "How are you?"},
        {id: 4, text: "Yo"},
    ],
    newMessageBody: ""
}
export const dialogsReducer = (state: DialogsPagesType = initialState, action: ActionsTypes): DialogsPagesType => {
    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_BODY':
            // state.newMessageBody = action.body;
        {
            return {...state, newMessageBody: action.body}
        }
        case 'SEND_MESSAGE':
            let body = {
                id: state.messagesData.length+1,
                text: state.newMessageBody
            }
            return {...state, messagesData: [...state.messagesData, body]}
        default: return state;
    }
}