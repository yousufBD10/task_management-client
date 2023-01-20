import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import WorkSpaceModal from "../WorkSpaceModal/WorkSpaceModal";


const initialTask = [
  {
    taskName: "design",
    id: "0"
  },
  {
    taskName: "Template",
    id: "2"
  },
  {
    taskName: "Business",
    id: "3"
  },
  {
    taskName: "Markeing",
    id: "4"
  },
];

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};
const datas = [];
const BoardCards = () => {
  const [tasks, setTasks] = useState(initialTask);

    const [data, setData] = useState(datas)
  return (
    <div>
      <DragDropContext onDragEnd={(result) => {
        console.log(result);
        const { source, destination } = result;
        if (!destination) {
          return;
        }
        if (source.index === destination.index   && source.droppableId === destination.droppableId) {
          return;
        }
        setTasks((preTasks) => reorder(preTasks, source.index, destination.index))
      }}>
        <div>
          <div >
            <Droppable droppableId="tasks">
              {(droppableProvided) => (
                <div 
                  {...droppableProvided.droppableProps}
                  ref={droppableProvided.innerRef}
                  className="w-1/4 h-48 border flex  gap-1  "
                >
                  {tasks.map((tsk, i) => (
                    <Draggable key={tsk.id} index={i} draggableId={tsk.id}>
                      {(draggableProvided) =>
                      (
                      
                        <div 
                          {...draggableProvided.draggableProps}
                          ref={draggableProvided.innerRef}
                          {...draggableProvided.dragHandleProps}
                         className='p-4'>
            <div className="box-border">
                <div className="bg-gray-200 p-3 w-60">
                    <div className="flex justify-between items-start gap-2">
                        <h4 className="w-10/12 font-semibold text-justify hover:cursor-pointer" contentEditable={'true'}>Milestone
                        </h4>
                        <button className="hover:bg-gray-300 px-2 py-1 font-semibold"><BiDotsHorizontalRounded /><p></p>
                            <WorkSpaceModal />
                        </button>
                    </div>
                    < div>
                   {
                    tasks.map((task,i)=> (
                      <div
                      className="bg-gray-50 hover:cursor-pointer hover:bg-gray-100 p-2 my-1 relative"
                      contentEditable={'true'}
                  >
                      {/* <div className="absolute flex justify-end w-11/12 z-30 " >✍</div> */}
                      <div >{task.taskName}</div>
                      <div>
                          <AiOutlineAlignLeft />
                      </div>
                  </div>
                    ))
                   }
                
                    
                       
                         <div
                            className="bg-gray-50 hover:cursor-pointer hover:bg-gray-100 p-2 my-1 relative"
                            contentEditable={'true'}
                        >
                            <div >Milestone-2 : Shufle the Square (16 January - 20
                                January 2023)</div>
                            <div>
                                <AiOutlineAlignLeft />
                            </div>
                        </div>
                        <div 
                            className="bg-gray-50 hover:cursor-pointer hover:bg-gray-100 p-2 my-1 relative"
                            contentEditable={'true'}
                        >
                            <div >Milestone-2 : Shuffle the Square (16 January - 20
                                January 2023)</div>
                            <div>
                                <AiOutlineAlignLeft />
                            </div>
                        </div>

                        <div
                            className="bg-gray-50 hover:cursor-pointer hover:bg-gray-100 p-2 my-1 relative"
                            contentEditable={'true'}
                        >
                            <div >Milestone-2 : Shuffle the Square (16 January - 20
                                January 2023)</div>
                            <div>
                                <AiOutlineAlignLeft />
                            </div>
                        </div>
                        <div
                            className="bg-gray-50 hover:cursor-pointer hover:bg-gray-100 p-2 my-1 relative"
                            contentEditable={'true'}
                        >
                            <div >Milestone-2 : Shufle the Square (16 January - 20
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
                            <a href="#new-board-modal" className="hover:bg-gray-300 px-2 py-1">📝</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                      )}
                    </Draggable>
                  ))}
                  {droppableProvided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </DragDropContext>
      
    </div>
  );
};

export default BoardCards;
