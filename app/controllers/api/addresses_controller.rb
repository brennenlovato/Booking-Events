class Api::AddressController < ApplicationController
    before_action :set_location
    before_action :set_address, only: [:show, :update, :destroy]
  
    def index
      render json: @location.addresses 
    end
  
    def show
      render json: @address 
    end
  
    def create
      @address = @location.addresses.new(address_params)
      if @address.save
        render json: @address 
      else 
        render json: { errors: @address.errors }, status: :unprocessable_entity 
      end
    end
  
    def update
      if @address.update(address_params)
        render json: @address 
      else 
        render json: { errors: @address.errors }, status: :unprocessable_entity 
      end
    end
  
    def destroy
      @address.destroy
      render json: { message: 'address Deleted' }
    end
  
    private 
      def address_params
        params.require(:address).permit(:title, :body)
      end 
  
      def set_location
        @location = Location.find(params[:location_id])
      end
  
      def set_address
        @address = @location.addresses.find(params[:id])
      end
  end
end
