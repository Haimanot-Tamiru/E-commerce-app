//In Reducer,we tell them how it works
const addItem = [];//the initialstate
//addItems is the reducer 
//reducer is  listen the action
const addItems = (state = addItem, action) => {
  switch (action.type) {
    case "ADDITEM":
      return [...state, action.payload];

    case "DELITEM":
      return (state = state.filter((x) => {
        return x.id !== action.payload.id;
      }));

    default:
      return state;
  }
};
export default addItems;
