import React from 'react';

const WorkSpaceModal = () => {
    const workImage = 'https://www.cygnismedia.com/images/post-images/ui-for-web-apps/Main.jpg';

    return (
        <div>
            <div id="WorkSpaceModal-1" className="modal">
                <div className="modal-box w-11/12 max-w-6xl m-0 p-0">
                    <a href="#" className="btn btn-sm btn-circle absolute right-2 top-2  z-30 hover:rotate-90 transition-all ease-in">✕</a>
                    <div>
                        <div className="relative flex flex-col-reverse  lg:py-0 lg:flex-col">
                            <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
                                <div className="mb-0 lg:max-w-lg py-4 lg:pr-8 xl:pr-6">
                                    <div className="px-8">
                                        <h1 className="font-medium text-3xl">Let's build a Workspace</h1>
                                        <p className="text-gray-600 mt-6">Boost your productivity by making it easier for everyone to access boards in one location.</p>
                                        <form>
                                            <div className="mt-6 space-y-6">
                                                <div>
                                                    <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Workspace name</label>
                                                    <input type="text" name="name" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter Workspace name" />
                                                    <small>This is the name of your company, team or organization.</small>
                                                </div>
                                                <div>
                                                    <label htmlFor="email" className="text-sm text-gray-700 block mb-1 font-medium">Workspace type</label>
                                                    <select className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full">
                                                        <option>Operation</option>
                                                        <option>Small Business</option>
                                                        <option>Engineering-IT</option>
                                                        <option>Marketing</option>
                                                        <option>Human Resources</option>
                                                        <option>Sales CRM</option>
                                                        <option>Education</option>
                                                        <option>Other</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label htmlFor="job" className="text-sm text-gray-700 block mb-1 font-medium">Workspace description</label>
                                                    <textarea className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full h-36" placeholder="Our team organizes everything here" defaultValue={""} />
                                                    <small>Get your members on board with a few words about your Workspace.</small>
                                                </div>
                                            </div>
                                            <div className="space-x-4 mt-8">
                                                <button type="submit" className="w-full btn btn-primary rounded-md font-bold">Continue</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="inset-y-0 top-0 right-0 w-full max-w-xl mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                                <img className="object-center w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full" src={workImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default WorkSpaceModal;