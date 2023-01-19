import React from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import WorkSpaceModal from '../WorkSpaceModal/WorkSpaceModal';
import { useState } from 'react';

const data = [];
const ToDoCard = () => {
    const [data, setData] = useState()
    return (
        <div>
            <div className="box-border">
                <div className="bg-gray-200 p-3 w-60">
                    <div className="flex justify-between items-start gap-2">
                        <h4 className="w-10/12 font-semibold text-justify hover:cursor-pointer" contentEditable={'true'}>Milestone
                        </h4>
                        <button className="hover:bg-gray-300 px-2 py-1 font-semibold"><BiDotsHorizontalRounded /><p></p>
                            <WorkSpaceModal />
                        </button>
                    </div>
                    <div className="py-2">
                        <div
                            className="bg-gray-50 hover:cursor-pointer hover:bg-gray-100 p-2 my-1 relative"
                            contentEditable={'true'}
                        >
                            {/* <div className="absolute flex justify-end w-11/12 z-30 " >✍</div> */}
                            <div >Milestone-2 : Shufhhhhhhhhhhhhhfle the Square (16 January - 20
                                January 2023)</div>
                            <div>
                                <AiOutlineAlignLeft />
                            </div>
                        </div>
                        <div
                            className="bg-gray-50 hover:cursor-pointer hover:bg-gray-100 p-2 my-1 relative"
                            contentEditable={'true'}
                        >
                            <div >Milestone-2 : Shufhhhhhhhhhhhhhfle the Square (16 January - 20
                                January 2023)</div>
                            <div>
                                <AiOutlineAlignLeft />
                            </div>
                        </div>
                        <div
                            className="bg-gray-50 hover:cursor-pointer hover:bg-gray-100 p-2 my-1 relative"
                            contentEditable={'true'}
                        >
                            <div >Milestone-2 : Shufhhhhhhhhhhhhhfle the Square (16 January - 20
                                January 2023)</div>
                            <div>
                                <AiOutlineAlignLeft />
                            </div>
                        </div>
                        <div
                            className="bg-gray-50 hover:cursor-pointer hover:bg-gray-100 p-2 my-1 relative"
                            contentEditable={'true'}
                        >
                            <div >Milestone-2 : Shufhhhhhhhhhhhhhfle the Square (16 January - 20
                                January 2023)</div>
                            <div>
                                <AiOutlineAlignLeft />
                            </div>
                        </div>
                        <div
                            className="bg-gray-50 hover:cursor-pointer hover:bg-gray-100 p-2 my-1 relative"
                            contentEditable={'true'}
                        >
                            <div >Milestone-2 : Shufhhhhhhhhhhhhhfle the Square (16 January - 20
                                January 2023)</div>
                            <div>
                                <AiOutlineAlignLeft />
                            </div>
                        </div>

                    </div>
                    <div className="py-1">
                        <div className="flex justify-between items-center gap-1">
                            <button className="w-10/12 hover:bg-gray-300 px-2 py-1 text-start" onClick={() => setData([...data, "1"])}>➕
                                Add a Card</button>
                            <button className="hover:bg-gray-300 px-2 py-1">📝</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDoCard;