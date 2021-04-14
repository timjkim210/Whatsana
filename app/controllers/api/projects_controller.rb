class Api::ProjectsController < ApplicationController
    def show
        render json: Project.find(params[:id])
    end

    def index
        @projects = Project.all
        render :index
    end

    def create
        @project = Project.new(project_params)
        @project.owner_id = current_user.id
        if !@project.save
            render json: @project.errors.full_messages
        end
    end

    def update
        @project = Project.find_by(id: params[:id])
        if @project && @project.update(project_params)
            render :show
        else
            render json: "Project was not found"
        end
    end

    def destroy
        project = Project.find_by_id(params[:id])
        if project
            project.delete
        end
        render json: project
    end

    private

    def project_params
        params.require(:project).permit(:name, :description, :due_date, :view)
    end


end
