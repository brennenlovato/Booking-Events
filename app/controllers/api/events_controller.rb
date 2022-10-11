class Api::EventsController < ApplicationController

  before_action :authenticate_user!
  before_action :set_user, only: [:show, :update, :destroy]
  def index
    render json: @user.events
  end

  def show
    render json: @event
  end

  def create
    @event = current_user.events.new(event_params)
    if @event.save
      render json: @event
    else
      render json: { errors: @event.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @event.update(event_params)
      render json: @event
    else
      render json: {errors: @event.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @event.destroy
    render json: { message: 'event deleted' }
  end

  private
  def event_params
    params.require(:event).permit(:title, :edate, :desc)
  end

  def set_event
    @event = current_user.events.find(params[:id])
  end
end
