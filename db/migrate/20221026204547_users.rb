class Users < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :image_url
      t.string :display_name
      t.timestamps
    end
  end
end
