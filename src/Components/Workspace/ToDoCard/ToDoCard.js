import React from 'react';
import { useState } from 'react';

const ToDoCard = ({ list }) => {
    const [data, setData] = useState([]);

    return (
        <div>
            <div className="box-border">
                <div className="bg-gray-200 p-3 w-60">
                    <div className="flex justify-between items-start gap-2">
                        <h4 className="w-10/12 font-semibold text-justify hover:cursor-pointer">{list.ListName}
                        </h4>
                    </div>
                    <div className="py-2">
                        {
                            data && data.map((item, i) => <>
                                <div key={i} className="bg-gray-50 hover:cursor-pointer hover:bg-gray-100 p-2 my-1 relative">
                                    <a className='block' href="#new-board-modal" contentEditable={true}>{item}</a>
                                </div>
                            </>)
                        }
                    </div>
                    <div className="py-1">
                        <div className="flex justify-between items-center gap-1">
                            <button className="w-10/12 hover:bg-gray-300 px-2 py-1 text-start" onClick={() => setData([...data, ""])}>➕ Add a Card</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDoCard;
