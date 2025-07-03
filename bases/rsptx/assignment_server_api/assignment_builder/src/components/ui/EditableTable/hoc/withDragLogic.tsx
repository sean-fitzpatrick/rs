import { ComponentType, useState } from "react";

import { useUpdateExercises } from "@/hooks/useUpdateExercises";
import { Nullable } from "@/types/common";
import { DraggingExerciseColumns } from "@/types/components/editableTableCell";

export interface WithDragLogicProps {
  startItemId: Nullable<number>;
  draggingFieldName: Nullable<DraggingExerciseColumns>;
  handleMouseDown: (itemId: number, colKey: DraggingExerciseColumns) => void;
  handleMouseUp: () => void;
  handleChange: (
    itemId: number,
    fieldName: DraggingExerciseColumns,
    value: string | number
  ) => void;
}

export function withDragLogic<P extends WithDragLogicProps>(Component: ComponentType<P>) {
  return function WrappedComponent(props: Omit<P, keyof WithDragLogicProps>) {
    const { handleChange } = useUpdateExercises();
    const [startItemId, setStartItemId] = useState<Nullable<number>>(null);
    const [draggingFieldName, setDraggingFieldName] =
      useState<Nullable<DraggingExerciseColumns>>(null);

    const handleMouseDown = (itemId: number, colKey: DraggingExerciseColumns) => {
      setStartItemId(itemId);
      setDraggingFieldName(colKey);
    };

    const handleMouseUp = () => {
      setStartItemId(null);
      setDraggingFieldName(null);
    };

    return (
      <Component
        {...(props as P)}
        startItemId={startItemId}
        draggingFieldName={draggingFieldName}
        handleMouseDown={handleMouseDown}
        handleMouseUp={handleMouseUp}
        handleChange={handleChange}
      />
    );
  };
}
