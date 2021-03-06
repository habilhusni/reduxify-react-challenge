const initialState = [];

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_SUCCESS': {
      const newDatas = action.payload; // results
      return newDatas;
    }
    default: return state;
  }
};

export default dataReducer;
