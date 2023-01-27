import React, { useContext } from 'react';
import { toast } from "react-toastify";
import { AuthContext } from '../../../Context/UserContext';

const InviteMember = () => {
    const { user, currentWorkspace } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const data = { email, wid: currentWorkspace._id };

        fetch(`${process.env.REACT_APP_SERVER_URL}/invite-workspace-member`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                toast.info(data.message);
                form.reset();
                document.querySelector(".close_modal").click();
            })
            .catch((error) => toast.error(error.message));
    };
    return (
        <div id="invite-member" className="modal">
            <div className="modal-box">
                <a href="#" className="btn btn-sm btn-circle absolute right-2 top-2 z-30 hover:rotate-90 transition-all ease-in close_modal">✕</a>
                <form onSubmit={handleSubmit}>
                    <div className="mt-6 space-y-6">
                        <div>
                            <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Invite member</label>
                            <input required type="email" name="email" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter user email" />
                        </div>
                    </div>
                    <div className="space-x-4 mt-8">
                        <button type="submit" className="w-full btn btn-primary rounded-md font-bold">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InviteMember;