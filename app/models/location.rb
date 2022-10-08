class Location < ApplicationRecord
  belongs_to :event
  has_many :addresses, :notes, dependent: :destroy
  validates :resort_name, presence: true
end
