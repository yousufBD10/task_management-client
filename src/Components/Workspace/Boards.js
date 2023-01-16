import React from 'react';
import WorkspaceNameAndInvite from './WorkspaceNameAndInvite';

const Boards = () => {
    const cards = [
        {
            image: 'https://cdn.pixabay.com/photo/2017/06/11/02/05/wheat-2391348__340.jpg',
            title: 'WorkSpace', 
        },
        {
            image: 'https://www.shutterstock.com/image-photo/grass-flowers-during-sunset-shadow-260nw-1433901557.jpg',
            title: 'WorkSpace', 
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLsiiM_FzbrKVFZ9Bh-i2oVYtMlqknjHc3tUz8oKDhLAgjhUwPJTu5buAApydXjKLslQs&usqp=CAU',
            title: 'WorkSpace', 
        }
    ]
    return (
        <div className=' min-h-screen '>
            <WorkspaceNameAndInvite></WorkspaceNameAndInvite>
          <h1 className="text-xl font-medium px-5">Boards</h1>

         <div className='lg:flex justify-around px-5'>
         <div className='lg:flex items-center gap-2'>
          <div className="form-control w-full max-w-xs mt-3">
  <label className="label">
    <span className="label-text font-medium">Sort by</span>
   
  </label>
  <select className="select select-bordered rounded-sm select-sm">
    <option disabled selected>Pick one</option>
    <option>Star Wars</option>
    <option>Harry Potter</option>
    <option>Lord of the Rings</option>
    <option>Planet of the Apes</option>
    <option>Star Trek</option>
  </select>
 
</div>
          <div className="form-control w-full max-w-xs mt-3">
  <label className="label">
    <span className="label-text font-medium">Filter by</span>
   
  </label>
  <select className="select select-bordered rounded-sm select-sm">
    <option>Lord of the Rings</option>
    <option>Star Wars</option>
    <option>Harry Potter</option>
    <option>Planet of the Apes</option>
    <option>Star Trek</option>
  </select>
 
</div>
          </div>
          <input type="text" placeholder="Search " className="input input-bordered w-full mt-12 input-sm rounded-sm max-w-xs" />
         </div>
         <div className='flex justify-around mt-8'>
            <p>Showing 3 of 3 boards</p>
            <button className='btn btn-primary btn-sm rounded-sm'>Create new board</button>
         </div>

         <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 px-5 '>
            {
                cards.map((card,i) =>
                    <div className="card mt-6 bg-base-50 shadow-xl image-full">
  <img className='w-full h-32' src={card.image} alt="Shoes" />
  <div className="card-body">
    <h2 className="card-title">{card.title}</h2>
  </div>
</div>
                )
            }
         </div>

        </div>
    );
};

export default Boards;