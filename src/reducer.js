export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //TO ADD A ITEM TO BASKET
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      //TO REMOVE A ITEM FROM BASKET
      return { state };

    default:
      return state;
  }
};

export default reducer;
