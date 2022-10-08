class Address < ApplicationRecord
  belongs_to :location
  validates :street, :city, :state, :country, presence: true
end
