export const fetchTasks = (projectId) => {
    return $.ajax({
        method: "GET",
        url: `/api/projects/${projectId}/tasks`
    })
};

export const createTask = (projectId, task) => {
    return $.ajax({
        method: "POST",
        url: `/api/projects/${projectId}/tasks`,
        data: {
            task
        }
    })
};