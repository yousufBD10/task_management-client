import React from 'react';

const CreateTask = ({ handleTaskSubmit, cardInfo, modalID }) => {
    return (
        <div>
            <div id={modalID} className="modal">
                <div className="modal-box">
                    <a href="#" className="btn btn-sm btn-circle absolute right-2 top-2 z-30 hover:rotate-90 transition-all ease-in close_modal">✕</a>
                    <form onSubmit={(e) => handleTaskSubmit(e, cardInfo.id)}>
                        <div className="mt-6 space-y-6">
                            <div>
                                <label htmlFor="note" className="text-sm text-gray-700 block mb-1 font-medium">{cardInfo.ListName}</label>
                                <textarea className="textarea textarea-accent bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full h-40" placeholder="Enter your Note" name='note'></textarea>
                            </div>
                        </div>
                        <div className="space-x-4 mt-8">
                            <input type="submit" className="w-full btn btn-primary rounded-md font-bold" value="Save" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateTask;
