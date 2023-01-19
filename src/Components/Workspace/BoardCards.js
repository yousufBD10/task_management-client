import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TodoCard from "../ToDoCard/ToDoCard"

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
const BoardCards = () => {
  const [tasks, setTasks] = useState(initialTask);
  return (


    //   <div className="flex gap-1 border" >
    //         <DragDropContext onDragEnd={(result) => console.log(result)}>
    //      <Droppable droppableId="tas">
    //      {(droppableProvided) => (
    //          <ul 
    //          {...droppableProvided.droppableProps}
    //          ref={droppableProvided.innerRef}
    //          className="w-1/4 h-48 border">
    //          {
    //            tasks.map((task,i) => 
    //               ( 
    //               <Draggable key={task.id} draggableId={task.id} index={i}>
    //               {(draggableProvided) => (
    //               <li {...draggableProvided.draggableProps}
    //               ref={draggableProvided.innerRef}
    //              {...draggableProvided.dragHandleProps}  
    //             className="bg-slate-400 p-3      mb-1" >
    //                   {task.taskName} 
    //                </li>
    //                )}
    //                </Draggable>
    //                ))}
    //                {droppableProvided.placeholder}
    //          </ul>
    //      )}

    //       </Droppable>
    //    </DragDropContext>
    //     </div>
    <div>
      <DragDropContext onDragEnd={(result) => {
        console.log(result);
        const { source, destination } = result;
        if (!destination) {
          return;
        }
        if (source.index === destination.index && source.droppableId === destination.droppableId) {
          return;
        }
        setTasks((preTasks) => reorder(preTasks, source.index, destination.index))
      }}>
        <div>
          <div className="flex gap-1 border ">
            <Droppable droppableId="tasks">
              {(droppableProvided) => (
                <div
                  {...droppableProvided.droppableProps}
                  ref={droppableProvided.innerRef}
                  className="w-1/4 h-48 border "
                >
                  {tasks.map((tsk, i) => (
                    <Draggable key={tsk.id} index={i} draggableId={tsk.id}>
                      {(draggableProvided) =>
                      (
                        <li
                          {...draggableProvided.draggableProps}
                          ref={draggableProvided.innerRef}
                          {...draggableProvided.dragHandleProps}
                          className="bg-slate-400 p-3      mb-1"
                        >
                          {tsk.taskName}
                        </li>
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
      <TodoCard></TodoCard>
    </div>
  );
};

export default BoardCards;
