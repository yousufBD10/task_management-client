import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/UserContext';
import CreateTask from '../Modals/CreateTask';

const ToDoCard = ({ list }) => {
    const { user, currentWorkspace, logOut } = useContext(AuthContext);
    /* ----------- Static data to Check task distribution on list card Start ---------- */
    const taskInformation = [
        {
            _id: '1',
            cardID: "1",
            note: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
            createTime: new Date()
        },
        {
            _id: '2',
            cardID: "2",
            note: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
            createTime: new Date()
        },
        {
            _id: '3',
            cardID: "1",
            note: "Lorem ipsum dolor sit amet.",
            createTime: new Date()
        },
        {
            _id: '4',
            cardID: "1",
            note: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
            createTime: new Date()
        },
        {
            _id: '5',
            cardID: "3",
            note: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
            createTime: new Date()
        },
        {
            _id: '6',
            cardID: "1",
            note: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
            createTime: new Date()
        },
    ]
    /* ----------- Static data to Check task distribution on list card End ---------- */
    /* ----------------- Collect data After Submit Task on modal Start ----------------- */
    const handleTaskSubmit = (event, cardID) => {
        event.preventDefault();
        const form = event.target;
        const note = form.note.value;
        const taskData = {
            wid: currentWorkspace._id,
            cardID: cardID,
            note: note,
            createTime: new Date().toLocaleString()
        }
        form.reset();
        document.querySelector(".close_modal").click();
    };
    /* ----------------- Collect data After Submit Task on modal End ----------------- */

    return (
        <div>
            <div className="box-border">
                <div className="bg-gray-200 p-3 w-60">
                    <div className="flex justify-between items-start gap-2">
                        <h4 className="w-10/12 font-semibold text-justify hover:cursor-pointer">{list.ListName}
                        </h4>
                    </div>
                    <div className="py-2">
                        {/*  ---------------------- map and distribute card data Start ----------------------  */}
                        {
                            taskInformation && taskInformation.map((item, i) => <>
                                {
                                    item.cardID === list.id &&
                                    <div key={i} className="bg-gray-50 hover:cursor-pointer hover:bg-gray-100 p-2 my-1 relative">
                                        <a className='block' href="#new-board-modal">{item.note}</a>
                                    </div>
                                }
                            </>)
                        }
                        {/*  ---------------------- map and distribute card data End ----------------------  */}

                    </div>
                    <div className="py-1">
                        <div className="flex justify-between items-center gap-1">
                            {/* -------------------- To Show CreateTask Modal trigger Start -------------------- */}
                            <a href={`#_${list.id}_`} className="btn btn-primary w-full hover:bg-gray-300 px-2 py-1 text-start">➕ Add a Card</a>
                            {/* -------------------- To Show CreateTask Modal trigger End -------------------- */}
                        </div>
                        {/* -------------------- To Show CreateTask Modal body Start -------------------- */}
                        <CreateTask modalID={'_' + list.id + '_'} handleTaskSubmit={handleTaskSubmit} cardInfo={list}></CreateTask>
                        {/* -------------------- To Show CreateTask Modal body End -------------------- */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDoCard;
