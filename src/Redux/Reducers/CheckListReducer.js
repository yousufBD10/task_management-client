const initialState = {
    checkListData: []
};

const CheckListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_CHECK_LIST_DATA":
            return {
                ...state,
                checkListData: action.payload,
            }
        default:
            return state;
    }
};

export default CheckListReducer;
