class Api::LocationsController < ApplicationController
  def index
    render json: @event.locations
  end

  def show
    @location = @event.locations.find(params[:id])
    render json: @location
  end

  def create
    @location = event.locations.new(location_params)
    if @location.save
      render json: @location
    else
      render json: { errors: @location.errors }, status: :unprocessable_entity
    end
  end

  def update
    @location = event.locations.find(params[:id])
    if @location.update(location_params)
      render json: @location
    else
      render json: {errors: @location.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @location = event.locations.find(params[:id])
    @location.destroy
    render json: { message: 'location deleted' }
  end

  private
  def location_params
    params.require(:location).permit(:resort)
  end

  def set_event
    @user = event.find(params[:user_id])
  end

  def set_location
    @location = @event.locations.find(params[:id])
  end
end
