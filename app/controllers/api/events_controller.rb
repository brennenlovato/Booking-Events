class Api::EventsController < ApplicationController
  before_action :set_user
  def index
    render json: @user.events
  end

  def show
    @event = @user.events.find(params[:id])
    render json: @event
  end

  def create
    @event = user.events.new(event_params)
    if @event.save
      render json: @event
    else
      render json: { errors: @event.errors }, status: :unprocessable_entity
    end
  end

  def update
    @event = user.events.find(params[:id])
    if @event.update(event_params)
      render json: @event
    else
      render json: {errors: @event.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @event = user.events.find(params[:id])
    @event.destroy
    render json: { message: 'event deleted' }
  end

  private
  def event_params
    params.require(:event).permit(:resort)
  end

  def set_user
    @user = User.find(params[:user_id])
  end

  def set_event
    @event = @user.events.find(params[:id])
  end
end
