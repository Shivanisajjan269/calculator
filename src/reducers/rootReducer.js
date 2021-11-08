const initialState = {
    total: 0,
  };
  export function rootReducer(state = initialState, action) {
    switch (action.type) {
      case "total":
        return {
          ...state,
          total: action.total,
        };
      case "":
        return initialState;
      default:
        return state;
    }
  }