class Api::TasksController < ApplicationController
    def index
        @tasks = Project.find(params[:project_id]).tasks
        render json: @tasks
    end

    def create
        @task = Task.new(task_params)
        @task.project_id = params[:project_id]

        if @task.save
            render json: @task
        else
            render json: @task.errors.full_messages
        end
    end

    def destroy
        task = Task.find_by_id(params[:id])
        if task
            task.delete
        end
        render json: task
    end

    private

    def task_params
        params.require(:task).permit(:name, :due_date, :status, :assignee_id)
    end
end
