import { fetchConToken } from "../helpers/fetch";
import { prepareEvents } from "../helpers/prepareEvents";
import { types } from "../types/types";


export const eventSartAddNew = (event) => {
    return async(dispatch, getState) => {

        const { uid, name } = getState().auth;

        try {
            const resp = fetchConToken(`events`, event, 'POST');
            const body = await resp.json();
            if (body.ok) {
                event.id = body.evento.id;
                event.user = {
                    _id: uid,
                    name,
                    name
                }

                dispatch(eventAddNew(event))
            }
        } catch (err) {
            console.error(err)
        }
    }
}

const eventAddNew = (event) => ({
    type: types.eventAddNew,
    payload: event
})

export const eventSetActive = (event) => ({
    type: types.eventSetActive,
    payload: event
})

export const eventClearActiveEvent = () => ({
    type: types.eventClearActive
})

export const eventUpdate = (event) => ({
    type: types.eventUpdate,
    payload: event
})

export const eventDelete = () => ({
    type: types.eventDelete
})



//CRUD
export const eventStartLoading = () => {
    return async(dispatch) => {
        try {
            const resp = await fetchConToken('events')
            const body = await resp.json();
            const events = prepareEvents(body.eventos)
            dispatch(eventLoaded(events))
        } catch (error) {
            console.error(error)
        }
    }
}

const eventLoaded = (events) => ({
    type: types.eventLoaded,
    payload: events
})