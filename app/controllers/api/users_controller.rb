class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = current_user
        @user.update(user_params)
        render "api/users/show"
    end

    def index
        @users = User.all
        render :index
    end

    private

    def user_params
        params.require(:user).permit(:full_name, :email, :password, :id, :pronouns, :role, :team, :about)
    end
end
