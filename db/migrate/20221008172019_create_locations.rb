class CreateLocations < ActiveRecord::Migration[7.0]
  def change
    create_table :locations do |t|
      t.string :resort_name
      t.belongs_to :event, null: false, foreign_key: true

      t.timestamps
    end
  end
end
