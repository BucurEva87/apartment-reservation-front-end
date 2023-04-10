const GET_RESERVATIONS = './GET_RESERVATIONS';

const url = 'http://localhost:3000/';
// Action Creators
const ReservationRequest = (data) => ({
  type: GET_RESERVATIONS,
  payload: {
    data,
  },
});

// Thunk
const getReservation = () => (dispatch) => {
  const params = {
    method: 'GET',
   
  };
  fetch(`${url}reservations`, params)
    .then((res) => res.json())
    .then((data) => {
      dispatch(ReservationRequest(data));
    })
    .catch((err) => {
      throw new Error(err);
    });
};

// Reducer
const initialState = {
  data: {
    error: 'Loading...',
  },
};

const ReservationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_RESERVATIONS:
      return action.payload;
    default:
      return state;
  }
};

export default ReservationReducer;
export { ReservationRequest, getReservation };