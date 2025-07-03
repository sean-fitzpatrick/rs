import { DraggingExerciseColumns } from "@/types/components/editableTableCell";
import { Exercise } from "@/types/exercises";

import { AssignmentExercisesTable } from "./AssignmentExercisesTable";
import { ExercisesToolbar } from "./ExercisesToolbar";
import { SetCurrentEditExercise, ViewModeSetter, MouseUpHandler } from "./types";

interface ExerciseListViewProps {
  globalFilter: string;
  setGlobalFilter: (filter: string) => void;
  selectedExercises: Exercise[];
  setSelectedExercises: (exercises: Exercise[]) => void;
  handleRemoveSelected: () => void;
  assignmentExercises: Exercise[];
  setViewMode: ViewModeSetter;
  setResetExerciseForm: (reset: boolean) => void;
  setCurrentEditExercise: SetCurrentEditExercise;
  startItemId: number | null;
  draggingFieldName: DraggingExerciseColumns | null;
  handleMouseDown: (itemId: number, fieldName: DraggingExerciseColumns) => void;
  handleMouseUp: MouseUpHandler;
  handleChange: (itemId: number, fieldName: DraggingExerciseColumns, value: any) => void;
}

export const ExerciseListView = ({
  globalFilter,
  setGlobalFilter,
  selectedExercises,
  setSelectedExercises,
  handleRemoveSelected,
  assignmentExercises,
  setViewMode,
  setResetExerciseForm,
  setCurrentEditExercise,
  startItemId,
  draggingFieldName,
  handleMouseDown,
  handleMouseUp,
  handleChange
}: ExerciseListViewProps) => {
  return (
    <div className="surface-card p-3 border-round">
      <ExercisesToolbar
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        selectedExercises={selectedExercises}
        handleRemoveSelected={handleRemoveSelected}
        setViewMode={setViewMode}
        setResetExerciseForm={setResetExerciseForm}
      />
      <AssignmentExercisesTable
        assignmentExercises={assignmentExercises}
        selectedExercises={selectedExercises}
        setSelectedExercises={setSelectedExercises}
        globalFilter={globalFilter}
        setCurrentEditExercise={setCurrentEditExercise}
        setViewMode={setViewMode}
        startItemId={startItemId}
        draggingFieldName={draggingFieldName}
        handleMouseDown={handleMouseDown}
        handleMouseUp={handleMouseUp}
        handleChange={handleChange}
      />
    </div>
  );
};
