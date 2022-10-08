class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :title
      t.datetime :edate
      t.text :desc
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
