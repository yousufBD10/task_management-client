const LoadCheckList = (taskId) => {
    console.log("taskId chek: ", taskId);
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000' + `/check-list/${taskId}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        });
        const data = await res.json();
        data && console.log("load Data: ", data);
        if (data) {
            dispatch({ type: "LOAD_CHECK_LIST_DATA", payload: data });
        }
    };
};

export default LoadCheckList;
