# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string           not null
#  price       :float            not null
#  category    :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Product < ApplicationRecord
    validates :name, :description, :price, :category, presence: true
    validates :category, inclusion: { in: ['electronics', 'books', 'home', 'active', 'food']}

    has_one_attached :photo

    has_many :reviews,
        foreign_key: :product_id,
        class_name: :Review,
        dependent: :destroy

    has_many :cart_items,
        foreign_key: :product_id,
        class_name: :CartItem,
        dependent: :destroy
end
