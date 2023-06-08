class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :rating, null: false
      t.integer :product_id, null: false
      t.integer :reviewer_id, null: false

      t.timestamps
    end

    add_foreign_key :reviews, :products, column: :product_id
    add_foreign_key :reviews, :users, column: :reviewer_id
  end
end
