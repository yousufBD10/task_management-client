import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="card bg-base-100 shadow-xl md:w-1/2 h-full mx-auto my-11 p-8">
                <figure><img className='w-52 h-52' src={user?.photoURL} alt="Album" /></figure>
                <div className="card-body">
                    <div className="d-flex bread-crumb justify-content-between align-items-center px-md-4 px-3">
                        <div className="d-flex align-items-center">
                            <h3 className="m-0 mx-2">My Profile</h3>
                        </div>
                    </div>
                    <h2 className="card-title">{user?.displayName}</h2>
                    <div className="col-md-8 col-lg-9 pb-5 pt-3">
                        <div className="form-group">
                            <label for="FullName" className='font-bold'>Full name</label>
                            <p>{user?.displayName}</p>
                        </div>
                        <div className="form-group">
                            <label for="email" className='font-bold'>Email Address</label>
                            <p>{user?.email}</p>
                        </div>
                    </div>
                    <Link to='/updateprofile' className="btn btn-primary">Update Profile</Link>
                </div>
            </div>
        </div>
    );
};
export default UserProfile;