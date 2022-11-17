class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.integer :question_id
      t.string :response
      t.timestamps
    end
  end
end
