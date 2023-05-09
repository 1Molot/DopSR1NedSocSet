import React, {ChangeEvent} from "react";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import store from "../../redux/Redux-store";
import { Dispatch } from "redux";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/State";


type DialogsContainerPropsType = {
    // dialogsData: Array<DialogsDataType>
    // messagesData: Array<MessagesDataType>
    // newMessageBody: string
    // dispatch: (action: ActionsTypes) => void
}
type MessagesDataType = {
    id: number,
    text: string
}
// export const DialogsContainer = () => {
    // let state = store.getState().dialogsReducer
    //
    // const onSendMessageClick = () => {
    //     store.dispatch(sendMessageAC())
    // }
    // const onNewMessageChange = (newText: string) => {
    //     store.dispatch(updateNewMessageBodyAC(newText))
    // }
    //
    // return (
    //     <div className={styles.dialogs}>
    //         <Dialogs
    //             dialogsData={state.dialogsData}
    //             messagesData={state.messagesData}
    //             newMessageBody={state.newMessageBody}
    //             onSendMessageClick={onSendMessageClick}
    //             onNewMessageChange={onNewMessageChange}/>
    //     </div>
    // )

const mapStateToProps = (store:any)=> {
    return {
        dialogsData: store.dialogsPage.dialogsData,
        messagesData:store.dialogsPage.messagesData,
        newMessageBody: store.dialogsPage.newMessageBody
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
return {
    onSendMessageClick: ()=> {
        dispatch(sendMessageAC())
    },
    onNewMessageChange: (newText: string)=> {
        dispatch(updateNewMessageBodyAC(newText))
    }

}
}
    export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
