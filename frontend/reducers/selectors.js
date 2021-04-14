export const allProjects = state => {
    return Object.values(state.entities.projects)
}

// export const tasksByProjectId = ({ tasks }, projectId) => {
//     const tasksByProjectId = [];
//     if (tasks(taskId).projectId === projectId) tasksByProjectId.push(task)
// };
// return tasksByProjectId;
// };