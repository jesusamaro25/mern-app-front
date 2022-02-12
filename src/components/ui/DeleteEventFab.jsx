import React from 'react';
import { useDispatch } from 'react-redux';
import { eventDelete, eventStartDeleting } from '../../actions/events';


export const DeleteEventFab = () => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(eventStartDeleting())
    }

    return (
        <button className='btn btn-danger fab-danger' onClick={handleDelete}>
            <i className='fas fa-trash'></i>
            <span>Borrar</span>
        </button>
    );
};
