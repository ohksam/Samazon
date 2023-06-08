class ChangeReviews < ActiveRecord::Migration[7.0]
  def change

    add_index :reviews, :product_id
    add_index :reviews, [:reviewer_id, :product_id], unique: true

  end
end
