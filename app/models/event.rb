class Event < ApplicationRecord
  belongs_to :user
  has_many :locations
  validates :title, :edate, presence: true
end
