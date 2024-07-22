import { initialState } from "@/dummydata";
import * as React from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

export default function DashBoard(): JSX.Element {
  const onDragEnd = React.useCallback((result: DropResult) => {
    console.log(result);
  }, []);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId="dashboard"
        type="COLUMN"
        direction="horizontal" //mobile vertical
      >
        {(provided, snapshot) => (
          <ul
            className="border border-red-500"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            columns
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}
