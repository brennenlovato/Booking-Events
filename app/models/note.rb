class Note < ApplicationRecord
  belongs_to :location
  validates :title, :body, presence: true
end
