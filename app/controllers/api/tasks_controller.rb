class Api::TasksController < ApplicationController
    def index
        @tasks = Project.find(params[:project_id]).tasks
        render json: @tasks
    end

    def create
        @task = Task.new(task_params)
        @task.assignee_id = current_user.id
        @task.project_id = params[:project_id]

        if @task.save
            render json: @task
        else
            render json: @task.errors.full_messages
        end
    end

    private

    def task_params
        params.require(:task).permit(:name, :due_date, :status)
    end
end
