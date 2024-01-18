import React from 'react';
import './App.css';
import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";

let tasks: Task[] = [
  {
    start: new Date(2024, 1, 18),
    end: new Date(2024, 1, 25),
    name: 'Idea',
    id: 'Task 0',
    type: 'task',
    progress: 45,
    isDisabled: true,
    styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
  },
];

const App = () => {
  return (
    <>
      <Gantt tasks={tasks} />
    </>
  );
}

export default App;
