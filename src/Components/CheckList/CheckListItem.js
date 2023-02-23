import React from 'react';

const CheckListItem = ({ text, handleCheckListUpdate, checkListItemId, taskDoneActivity, taskId, handleRemoveChecklist }) => {
    return (
        <div className='flex justify-between'>
            <div className='flex items-center justify-start gap-2 my-2'>
                <input type="checkbox" checked={taskDoneActivity} onChange={() => { handleCheckListUpdate(checkListItemId, taskId, taskDoneActivity) }} />
                <span className={`${taskDoneActivity && 'line-through'} w-full px-1`}>{text}</span>
            </div>
            <div>
                <button className='btn btn-ghost p-0 ' onClick={() => handleRemoveChecklist(checkListItemId, taskId)}>✂</button>
            </div>
        </div>
    );
};

export default CheckListItem;

