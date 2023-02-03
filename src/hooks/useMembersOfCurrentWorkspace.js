import { useEffect, useState } from "react";

const useMembersOfCurrentWorkspace = (currentWorkspace, logOut) => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        if (!currentWorkspace) return;
        fetch(process.env.REACT_APP_SERVER_URL + `/get-workspace-member/${currentWorkspace._id}`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(res => {
                setMembers(res);
            });
    }, [currentWorkspace]);
    return [members];
}

export default useMembersOfCurrentWorkspace;