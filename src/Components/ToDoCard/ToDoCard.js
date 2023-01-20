import React from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import { useState } from 'react';

const ToDoCard = () => {
    const [data, setData] = useState([])
    const listItems = [
        "Add card...",
        "Copy list...",
        "Move list...",
        "Watch",
        "Sort by...",
        "When a Card is Added to the list",
        "Every day. sort list by...",
        "Every Monday. sort list by...",
        "Create a custom rule ",
        "Move all card in this list...",
        "Archive all Cards in this list...",
        "Archive this list"
    ]

    return (
        <div>
            <div className="box-border">
                <div className="bg-gray-200 p-3 w-60">
                    <div className="flex justify-between items-start gap-2">
                        <h4 className="w-10/12 font-semibold text-justify hover:cursor-pointer" contentEditable={'true'}>Milestone
                        </h4>
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-sm rounded-md hover:bg-gray-300 px-2 py-1 font-semibold"><BiDotsHorizontalRounded /></label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    listItems.map((item, i) =>
                                        <li key={i}>
                                            <a
                                                href="#"
                                                class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                                role="menuitem"
                                            >
                                                {item}
                                            </a>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="py-2">
                        <div
                            className="bg-gray-50 hover:cursor-pointer hover:bg-gray-100 p-2 my-1 relative"
                            contentEditable={'true'}
                        >
                            <div >Text</div>
                            <div>
                                <AiOutlineAlignLeft />
                            </div>
                        </div>
                        {
                            data && data.map((item, i) => <>
                                <div key={i}
                                    className="bg-gray-50 hover:cursor-pointer hover:bg-gray-100 p-2 my-1 relative"
                                    contentEditable={true}
                                >
                                    <div >{item}</div>
                                    <div>
                                        <AiOutlineAlignLeft />
                                    </div>
                                </div>
                            </>)
                        }
                    </div>
                    <div className="py-1">
                        <div className="flex justify-between items-center gap-1">
                            <button className="w-10/12 hover:bg-gray-300 px-2 py-1 text-start" onClick={() => setData([...data, "."])}>➕
                                Add a Card</button>
                            <a href="#new-board-modal" className="hover:bg-gray-300 px-2 py-1">📝</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDoCard;
