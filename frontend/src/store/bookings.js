import { csrfFetch } from './csrf';

//todo: define types ----------------------------------------------------------

const GET_SPOT_ALL_BOOKINGS = 'bookings/getSpotAllBookings';
const GET_USER_ALL_BOOKINGS = 'bookings/getUserAllBookings';
const CREATE_SPOT_BOOKING = 'bookings/createSpotBooking';
const EDIT_USER_BOOKING = 'bookings/editUserBooking';
const DELETE_ONE_BOOKING = 'bookings/deleteOneBooking';


//todo: define action creators ------------------------------------------------


//action: get spot all bookings
const getSpotAllBookingsAction = (bookings) => {
    return {
        type: GET_SPOT_ALL_BOOKINGS,
        bookings,
    }
}

//action: get user all bookings
const getUserAllBookingsAction = (bookings) => {
    return {
        type: GET_USER_ALL_BOOKINGS,
        bookings,
    }
}

//action: create spot booking
const createSpotBookingAction = (booking) => {
    return {
        type: CREATE_SPOT_BOOKING,
        booking,
    }
}

//action: edit user booking
const editUserBookingAction = (booking) => {
    return {
        type: EDIT_USER_BOOKING,
        booking,
    }
}

//action: delete one booking by id
const deleteOneBookingAction = (id) => {
    return {
        type: DELETE_ONE_BOOKING,
        id,
    }
}


//todo: thunks section -------------------------------------------------------
// thunk: get spot all bookings
export const getSpotAllBookingsThunk = (spotId) => async (dispatch) => {
    const response = await fetch(`/api/spots/${spotId}/bookings`);
    if (response.ok) {
        const data = await response.json();
        // console.log('thunk bookings--------------', data)
        dispatch(getSpotAllBookingsAction(data.Bookings));
        return data;
    }
};

// thunk: get user all bookings
export const getUserAllBookingsThunk = () => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings/current`);
    if (response.ok) {
        const data = await response.json();
        // console.log('thunk bookings--------------', data)
        dispatch(getUserAllBookingsAction(data.Bookings));
        return data;
    }
};

// thunk: create spot booking
export const createSpotBookingThunk = (newBooking) => async (dispatch) => {
    try {
        const { spotId, startDate, endDate } = newBooking
        // console.log('backend spotId-------------------', spotId)
        const response = await csrfFetch(`/api/spots/${spotId}/bookings`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ startDate, endDate }),
        })
        if (response.ok) {
            const booking = await response.json();
            await dispatch(createSpotBookingAction(booking));
            return booking;
        }
    } catch (err) {
        // console.log('thunk err========================', err);
        throw err;
    }
}

// thunk: edit one booking for current user
export const editUserBookingThunk = (booking, bookingId) => async dispatch => {
    try {
        const response = await csrfFetch(`/api/bookings/${bookingId}`, {
            method: 'PUT',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(booking)
        })

        if (response.ok) {
            const data = await response.json();
            dispatch(editUserBookingAction(data));
            return data
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

// thunk: delete one booking for current user
export const deleteOneBookingThunk = (bookingId) => async dispatch => {
    try {
        const response = await csrfFetch(`/api/bookings/${bookingId}`, {
            method: 'DELETE',
        })
        if (response.ok) {
            dispatch(deleteOneBookingAction(bookingId));
            return response;
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}


//todo: reducer stuff
const initialState = { allBookings: {}, singleBooking: {}, userBookings: {} };

const bookingsReducer = (state = initialState, action) => {
    // console.log('Booking reducer action:', action); // added console log here
    let newState = {};
    switch (action.type) {
        case GET_SPOT_ALL_BOOKINGS:
            let allBookings = {};
            action.bookings.forEach(booking => { allBookings[booking.id] = booking });
            newState = { ...state };
            newState.allBookings = allBookings;
            return newState;

        case GET_USER_ALL_BOOKINGS:
            let userBookings = {};
            action.bookings.forEach(booking => { userBookings[booking.id] = booking });
            newState = { ...state };
            newState.userBookings = userBookings;
            return newState;

        case CREATE_SPOT_BOOKING:
            newState = { ...state, allBookings: { ...state.allBookings }, singleBooking: {} };
            const addBooking = { ...action.booking };
            newState.allBookings[action.booking.id] = addBooking;
            newState.singleBooking = addBooking;
            return newState;

        case EDIT_USER_BOOKING:
            newState = { ...state };
            newState.allBookings = { ...state.allBookings, [action.booking.id]: { ...state.allBookings[action.booking.id], ...action.booking } }
            newState.singleBooking = { ...state.singleBooking, ...action.booking }
            return newState;

        case DELETE_ONE_BOOKING:
            newState = { allBookings: { ...state.allBookings }, singleBooking: { ...state.singleBooking }, userBookings: { ...state.userBookings } };
            // console.log('user booking delete id-----------', action.id)
            delete newState.allBookings[action.id];
            delete newState.userBookings[action.id];
            if (action.id == newState.singleBooking.id) { newState.singleBooking = {} }
            // console.log("user bookings newState3", newState)
            return newState;

        default:
            return state;
    }
}

export default bookingsReducer;
