export default (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case "GET_URHEILIJAT":
      return {
        ...state,
        urheiljat: payload,
      };
    case "GET_URHEILIJA":
      return {
        ...state,
        urheilijat: payload,
      };
    case "DELETE_URHEILIJA":
      return {
        ...state,
        urheilijat: state.urheilijat.filter(
          (urheilija) => urheilija.id !== action.payload
        ),
      };
    case "ADD_UREHILIJA":
      return {
        ...state,
        urheilijat: [action.payload, ...state.urheilijat],
      };
    case "EDIT_UREHEILIJA":
      return {
        ...state,
        urheilijat: state.urehilijat.map((urheilija) =>
          urheilija.id === action.payload.id
            ? (urheilija = action.payload)
            : urheilija
        ),
      };
    default:
      return state;
  }
};
