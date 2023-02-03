import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';

const UpdateUser = () => {
  const { emailUpdate, user } = useContext(AuthContext);
  const updateUserInfo = (e) => {
    e.preventDefault();
    const form = e.target;
    const newEmail = form.email.value;

    emailUpdate(newEmail)
      .then((result) => {
        const user = result.user;
        console.log(user);

      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className='bg-base-100 shadow-xl md:w-1/2 h-full mx-auto my-11 p-8'>

      <h3 className="text-lg font-bold m-5 p-5">Edit/Update your profile</h3>
      <form onSubmit={updateUserInfo} className="w-full max-w-sm">

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Full Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input defaultValue={user?.displayName} name='name' className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" />
          </div>
        </div>


        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input defaultValue={user?.email} readOnly name='email' className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3"></div>

        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
              Update
            </button>
          </div>
        </div>
      </form>


    </div>

  );
};

export default UpdateUser;