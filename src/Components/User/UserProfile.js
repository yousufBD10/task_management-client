import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
        <div class="card lg:card-side bg-base-100 shadow-xl w-1/2 h-full  m-11 p-8  ">
        <figure><img className='w-full h-80' src={user?.photoURL} alt="Album"/></figure>
        <div class="card-body">
        <div class="d-flex bread-crumb justify-content-between align-items-center px-md-4 px-3">
        <div class="d-flex align-items-center">
            <h3 class="m-0 mx-2">My Profile</h3>
        </div>
        </div>
            <h2 class="card-title">{user?.displayName}</h2>
        <div class="col-md-8 col-lg-9 pb-5 pt-3">
        <div class="form-group">
            <label for="FullName" className='font-bold'>User ID:</label>
            <p>N/A</p></div><div class="form-group">
            <label for="FullName" className='font-bold'>Full name</label>
            <p>{user?.displayName}</p>
        </div>
        <div class="form-group">
            <label for="email" className='font-bold'>Email Address</label>
            <p>{user?.email}</p>
        </div>
        </div>
        <div class="card-actions justify-end">
{/* The button to open modal */}
<label htmlFor="my-modal-3" className="btn btn-primary">Edit Profile</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">Edit/Update your profile</h3>
    <label className="label">
    <h4 className='font-bold'>Name</h4>
  </label>
    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
    <label className="label">
    <h4 className='font-bold'>Email</h4>
  </label>
    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
    <label className="label">
    <h4 className='font-bold'>Contact No.</h4>
  </label>
    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
    <label className="label">
    <h4 className='font-bold'>Address</h4>
  </label>
    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
    <label className="label">
    <h4 className='font-bold'>Image</h4>
  </label>
    <input type="file" placeholder="" className="" />
    
    <label htmlFor="my-modal-3" className="btn btn-primary">Update</label>
    </div>
</div>

        </div>
        </div>
        </div>
        </div>
    );
};
export default UserProfile;