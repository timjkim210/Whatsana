export const fetchProjects = () => {
    return $.ajax({
        method: "GET",
        url: "/api/projects",
    })
};

export const fetchProject = (projectId) => {
    return $.ajax({
        method: "GET",
        url: `/api/projects/${projectId}`
    })
};

export const createProject = (project) => {
    return $.ajax({
        method: "POST",
        url: "/api/projects",
        data: {
            project
        }
    })
};

// eslint-disable-next-line arrow-body-style
export const destroyProject = projectId => {
    return $.ajax({
        url: `/api/projects/${projectId}`,
        method: 'DELETE'
    })
};

export const updateProject = project => {
    return $.ajax({
        url: `/api/projects/${project.id}`,
        method: `PATCH`,
        data: { project }
    })
};

