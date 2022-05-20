import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        dialogPage : state.dialogPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateMessage: (text) => {
            dispatch(updateNewMessageActionCreator(text))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer