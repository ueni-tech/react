import { Task } from "./common/types/public-types";

export function initTasks() {
  const currentDate = new Date();
  const tasks: Task[] = [
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      name: "Some Project",
      id: "ProjectSample",
      progress: 25,
      type: "project",
      hideChildren: false,
      displayOrder: 1,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        2,
        23,
        59
      ),
      name: "Idea",
      id: "Task 0",
      progress: 45,
      type: "task",
      project: "ProjectSample",
      displayOrder: 2,
    },
    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
    //   end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
    //   name: "Research",
    //   id: "Task 1",
    //   progress: 25,
    //   dependencies: ["Task 0"],
    //   type: "task",
    //   project: "ProjectSample",
    //   displayOrder: 3,
    // },
    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
    //   end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
    //   name: "Discussion with team",
    //   id: "Task 2",
    //   progress: 10,
    //   dependencies: ["Task 1"],
    //   type: "task",
    //   project: "ProjectSample",
    //   displayOrder: 4,
    // },
    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
    //   end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
    //   name: "Developing",
    //   id: "Task 3",
    //   progress: 2,
    //   dependencies: ["Task 2"],
    //   type: "task",
    //   project: "ProjectSample",
    //   displayOrder: 5,
    // },
    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
    //   end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
    //   name: "Review",
    //   id: "Task 4",
    //   type: "task",
    //   progress: 70,
    //   dependencies: ["Task 2"],
    //   project: "ProjectSample",
    //   displayOrder: 6,
    // },
    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
    //   end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
    //   name: "Release",
    //   id: "Task 6",
    //   progress: currentDate.getMonth(),
    //   type: "milestone",
    //   dependencies: ["Task 4"],
    //   project: "ProjectSample",
    //   displayOrder: 7,
    // },
    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
    //   end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
    //   name: "Party Time",
    //   id: "Task 9",
    //   progress: 0,
    //   isDisabled: true,
    //   type: "task",
    // },
  ];
  return tasks;
}

export function getStartEndDateForProject(tasks: Task[], projectId: string) {
  const projectTasks = tasks.filter(t => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  const getStartOfDay = (date: any) => {
    const start = new Date(date);
    start.setHours(0, 0, 0, 0); // その日の0:00に設定
    console.log("start:" + start);
    return start;
  };

  const getEndOfDay = (date: any) => {
    const end = new Date(date);
    end.setHours(23, 59, 59, 999); // その日の23:59に設定
    console.log("end:" + end);
    return end;
  };

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    const taskStart = getStartOfDay(task.start);
    const taskEnd = getEndOfDay(task.end);
    if (start.getTime() > taskStart.getTime()) {
      start = taskStart;
    }
    if (end.getTime() < taskEnd.getTime()) {
      end = taskEnd;
    }
  }
  return [start, end];
}
