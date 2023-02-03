import React, { useEffect, useState } from 'react';
import CheckListItem from './CheckListItem';

const taskCheck = [
    {
        workBoardId: 1,
        boardCardID: 1,
        taskDataID: 1,
        taskDoneActivity: true,
        taskText: 'Initial Task',
        taskCheckAssignDate: new Date(),
    },
    {
        workBoardId: 1,
        boardCardID: 1,
        taskDataID: 1,
        taskDoneActivity: true,
        taskText: 'Second Task',
        taskCheckAssignDate: new Date(),
    },
    {
        workBoardId: 1,
        boardCardID: 1,
        taskDataID: 1,
        taskDoneActivity: true,
        taskText: 'Third Task',
        taskCheckAssignDate: new Date(),
    },
    {
        workBoardId: 1,
        boardCardID: 1,
        taskDataID: 1,
        taskDoneActivity: false,
        taskText: 'Fourth Task',
        taskCheckAssignDate: new Date(),
    },
    {
        workBoardId: 1,
        boardCardID: 1,
        taskDataID: 1,
        taskDoneActivity: true,
        taskText: 'Last Task',
        taskCheckAssignDate: new Date(),
    },
]
const CheckList = () => {
    const [totalSelectedCheckboxes, setTotalSelectedCheckboxes] = useState(0);
    /**
     * handle check mainly check number of checkbox items are checked 
     * under checkTask class
     *  */
    function handleCheck() {
        setTotalSelectedCheckboxes(document.querySelectorAll('.checkTask input[type=checkbox]:checked').length);
    }
    useEffect(() => {
        handleCheck();
    }, [])
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
                            taskCheck.map((item, i) => <CheckListItem key={i} text={item.taskText} taskDoneActivity={item.taskDoneActivity} handleCheck={handleCheck} />)
                        }
                    </div>
                    {/* Static checklist tasks end*/}
                    {/* new checklist task Assign area  */}
                    <form className="flex flex-col py-6 space-y-4 md:py-0 ng-untouched ng-pristine ng-valid">
                        <label className="block">
                            <h3 className="text-md font-semibold">New Task Assign</h3>
                            <textarea
                                placeholder="Write a Task..."
                                className="input input-bordered p-2 mt-2 w-full rounded-sm outline-border"
                            ></textarea>
                        </label>
                        <div className="flex flex-wrap">
                            {/* ----- Task Submit button------ */}
                            <button
                                onClick={""}
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
