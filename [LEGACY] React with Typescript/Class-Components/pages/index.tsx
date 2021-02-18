import React from 'react';

interface Task {
  title: string;
}

interface TaskListProps {
  initialTasks: Task[];
}

interface TaskListState {
  tasks: Task[];
}

class TaskList extends React.Component<TaskListProps, TaskListState> {
  constructor(props: TaskListProps) {
    super(props);
    this.state = {
      tasks: props.initialTasks
    };
  }

  onAddNewTaskClick = () => {
    this.setState({
      tasks: [...this.state.tasks, { title: 'New Task' }]
    });
  };

  render() {
    const { tasks } = this.state;

    return (
      <>
        <ul>
          {tasks.map((task, i) => {
            return <li key={i}>{task.title}</li>;
          })}
        </ul>
        <button onClick={this.onAddNewTaskClick}>Add new task</button>
      </>
    );
  }
}

const tasks = [{ title: 'Task One' }, { title: 'Task Two' }];

export default () => (
  <div>
    <TaskList initialTasks={tasks} />
  </div>
);
