import React, { useEffect, useState } from 'react';
import CheckListItem from './CheckListItem';

/**
 * get data from database base on below parameters
 *  wid: 1,
 * boradId: 1,
 * taskId: 1,
 */
let taskCheck = [
    {
        wid: 1,
        boradId: 1,
        taskId: 1,
        _id: 1,
        taskDoneActivity: true,
        taskText: 'Initial Task',
        taskCheckAssignDate: new Date(),
    },
    {
        wid: 1,
        boradId: 1,
        taskId: 1,
        _id: 2,
        taskDoneActivity: true,
        taskText: 'Second Task',
        taskCheckAssignDate: new Date(),
    },
    {
        wid: 1,
        boradId: 1,
        taskId: 1,
        _id: 3,
        taskDoneActivity: true,
        taskText: 'Third Task',
        taskCheckAssignDate: new Date(),
    },
    {
        wid: 1,
        boradId: 1,
        taskId: 1,
        _id: 4,
        taskDoneActivity: false,
        taskText: 'Fourth Task',
        taskCheckAssignDate: new Date(),
    },
    {
        wid: 1,
        boradId: 1,
        taskId: 1,
        _id: 5,
        taskDoneActivity: true,
        taskText: 'Last Task',
        taskCheckAssignDate: new Date(),
    },
]
const CheckList = ({ currentTask }) => {
    const [totalSelectedCheckboxes, setTotalSelectedCheckboxes] = useState(0);
    const [change, setChange] = useState(false)
    const handleNewTaskCheckAdd = (e) => {
        // post task on database
        e.preventDefault();
        const assignCheckListTask = e.target.assignTask.value;
        // console.log data send on database
        console.log({
            wid: currentTask.wid,
            boradId: currentTask.boradId,
            taskId: currentTask._id,
            CheckListTask: assignCheckListTask,
            taskDoneActivity: false,
            taskCheckAssignDate: new Date()
        })
        e.target.reset();

    }
    const handleTaskCheckChange = (taskId) => {
        // update task on database _id===taskId and set taskDoneActivity: !task.taskDoneActivity
        taskCheck = [...taskCheck.map(task => task._id !== taskId ? task : { ...task, taskDoneActivity: !task.taskDoneActivity })]
    }
    /**
     * handle check mainly check number of checkbox items are checked 
     * and recheck after any change
     *  */
    useEffect(() => {
        setTotalSelectedCheckboxes(taskCheck.filter(task => task.taskDoneActivity).length);
    }, [change])
    return (
        <div>
            {/* Calculate percentage of checked items and show a progress bar */}
            <div>
                <div className='flex items-center justify-start gap-2 my-2'>
                    {Math.floor(totalSelectedCheckboxes / taskCheck.length * 100)}%
                    <progress className="progress progress-accent" value={totalSelectedCheckboxes / taskCheck.length * 100} max="100"></progress>
                </div>
            </div>
            {/* -----------checklist tasks area---------- */}
            <div className="text-gray-600 mt-2">
                <div className="flex justify-between ">
                    <h3 className="text-md font-semibold">Task Done Activity</h3>
                </div>
                <div>
                    {/* Static checklist tasks start*/}
                    {/* show all assign checklist tasks */}
                    <div className='checkTask'>
                        {
                            taskCheck.map((item, i) => <CheckListItem key={i} text={item.taskText} taskDoneActivity={item.taskDoneActivity} taskId={item._id} handleCheck={handleTaskCheckChange} setChange={setChange} change={change} />)
                        }
                    </div>
                    {/* Static checklist tasks end*/}
                    {/* new checklist task Assign area  */}
                    <form onSubmit={handleNewTaskCheckAdd} className="flex flex-col py-6 space-y-4 md:py-0 ng-untouched ng-pristine ng-valid">
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
