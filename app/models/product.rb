class Product < ApplicationRecord

    # has_many :reviews,
    #     foreign_key: :product_id,
    #     class_name: :Review,
    #     dependent: :destroy

    # has_many :cart_items,
    #     foreign_key: :product_id,
    #     class_name: :CartItem,
    #     dependent: :destroy
end
