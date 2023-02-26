import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import LoadCheckList from '../../Redux/Thunk/LoadCheckList';
import CheckListItem from './CheckListItem';

const CheckList = ({ currentTask }) => {
    const [totalSelectedCheckboxes, setTotalSelectedCheckboxes] = useState(0);
    const [checkList, setCheckList] = useState([]);
    /* -------------------------------------------------------------------------- */
    /* ---------------------------------- Redux --------------------------------- */
    // const dispatch = useDispatch();
    // const checkListData = useSelector((state) => state.checkList);
    // checkListData.length > 0 && console.log("checkListData Check: ", checkListData);
    // useEffect(() => {
    //     currentTask && dispatch(() => LoadCheckList(currentTask._id))
    // }, [currentTask._id])
    /* -------------------------------------------------------------------------- */

    /* -------------------------------- checklist handle start ------------------------------- */
    const loadCheckList = (taskId) => {
        fetch(process.env.REACT_APP_SERVER_URL + `/check-list/${taskId}`, {
            method: "GET",
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setTotalSelectedCheckboxes(res.filter(task => task.taskDoneActivity).length);
                setCheckList(res);
            });
    };
    const handleNewCheckListItemAdd = (e) => {
        e.preventDefault();
        const assignCheckListTask = e.target.assignTask.value;
        const assignCheckListData = {
            taskId: currentTask._id,
            CheckListTask: assignCheckListTask,
            taskDoneActivity: false,
            taskCheckAssignDate: new Date()
        }
        fetch(process.env.REACT_APP_SERVER_URL + `/create-checklist-item`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(assignCheckListData),
        })
            .then((res) => res.json())
            .then((data) => {
                loadCheckList(currentTask._id);
                e.target.reset();
            })
    }
    const handleCheckListUpdate = (checkListItemId, taskId, taskDoneActivity) => {
        fetch(process.env.REACT_APP_SERVER_URL+`/update-checklist-item/${checkListItemId}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ taskDoneActivity }),
        })
            .then((res) => res.json())
            .then((data) => {
                loadCheckList(taskId);
            })
    }
    const handleRemoveChecklist = (checkListItemId, taskId) => {
        fetch(process.env.REACT_APP_SERVER_URL+`/remove-checklist-item/${checkListItemId}`, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                loadCheckList(taskId);
            })
    }

    useEffect(() => {
        currentTask && loadCheckList(currentTask._id);
    }, [currentTask && currentTask._id])
    /* -------------------------------- checklist handle end ------------------------------- */

    return (
        <div>
            <div className="text-gray-600 mt-2">
                <div className="flex justify-between ">
                    {checkList.length > 0 && <h3 className="text-md font-semibold">Task Done Activity</h3>}
                </div>
                {checkList.length > 0 && <div>
                    <div className='flex items-center justify-start gap-2 my-2'>
                        {Math.floor(totalSelectedCheckboxes / checkList.length * 100) || 0}%
                        <progress className="progress progress-accent" value={totalSelectedCheckboxes / checkList.length * 100} max="100"></progress>
                    </div>
                </div>}

                <div>
                    <div className='checkTask'>
                        {
                            checkList && checkList.map((item, i) => <CheckListItem key={i} text={item.CheckListTask} taskDoneActivity={item.taskDoneActivity} checkListItemId={item._id} handleCheckListUpdate={handleCheckListUpdate} handleRemoveChecklist={handleRemoveChecklist} taskId={currentTask._id} />)
                        }
                    </div>

                    <form onSubmit={handleNewCheckListItemAdd} className="flex flex-col py-6 space-y-4 md:py-0 ng-untouched ng-pristine ng-valid">
                        <label className="block">
                            <h3 className="text-md font-semibold">New Task Assign</h3>
                            <textarea
                                required
                                placeholder="Write a Task..."
                                name='assignTask'
                                className="input input-bordered p-2 mt-2 w-full rounded-sm outline-border"
                            ></textarea>
                        </label>
                        <div className="flex flex-wrap">
                            {/* ----- Task Submit button------ */}
                            <button
                                type="submit"
                                className="btn btn-ghost btn-sm rounded-md bg-gray-800 text-gray-400"
                            >
                                Assign
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default CheckList;
