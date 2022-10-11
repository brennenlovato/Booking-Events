class Api::UsersController < ApplicationController
  before_action :authenticate_user! 
  
  def update
    user = User.find(params[:id])
    user.name = params[:name] ? params[:name] : user.name
    
    user.email = params[:email] ? params[:email] : user.email

    begin
      # if user.save 
      #   render json: user 
      # else 
      #   render json: { errors: user.errors.full_messages}, status: 422
      # end
      # rescue => e 
      #   render json: { errors: e }, status: 422
      # end
      # else
        if user.save 
          render json: user 
        else 
          render json: { errors: user.errors.full_messages}, status: 422
        end
    end
  end
end