import React, { useState } from 'react';

const CheckListItem = ({ text, handleCheck, taskId, taskDoneActivity, setChange, change }) => {
    const [check, setCheck] = useState(taskDoneActivity)
    return (
        <div className='flex items-start justify-start gap-2 my-2'>
            <input type="checkbox" defaultChecked={taskDoneActivity || false} onChange={(e) => { setCheck(e.target.checked); handleCheck(taskId); setChange(!change) }} />
            <textarea className={`${check && 'line-through'} w-full px-1`}>{text}</textarea>
        </div>
    );
};

export default CheckListItem;

