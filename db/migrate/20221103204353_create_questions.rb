class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.integer :user_id
      t.integer :course_id
      t.string :title
      t.string :details
      t.boolean :open
      t.timestamps
    end
  end
end
