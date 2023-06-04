class CreateCartItems < ActiveRecord::Migration[7.0]
  def change
    create_table :cart_items do |t|
      t.integer :customer_id, null: false
      t.integer :product_id, null: false
      t.integer :quantity, null: false
      t.boolean :purchased, null: false, default: false

      t.timestamps
    end

    add_index :cart_items, :customer_id

    add_foreign_key :cart_items, :users, column: :customer_id
    add_foreign_key :cart_items, :products, column: :product_id
  end
end
