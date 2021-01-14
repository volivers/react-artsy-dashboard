import React from 'react';
import './TaskList.scss';
import Alert from '@material-ui/lab/Alert';

const TaskList = ({ tasks }) => {

  return (
    <div className="tasks-list">
      {tasks.map(task => {
        return(
          <Alert variant="filled" severity={task.priority === "High" ? "error" : task.priority === "Medium" ? "warning" : "info"} key={task.id} className="m-2" onClose={() => {}}>
            {task.title}
          </Alert>
        );
      })}
    </div>
  );
}

export default TaskList;