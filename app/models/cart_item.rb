# == Schema Information
#
# Table name: cart_items
#
#  id          :bigint           not null, primary key
#  customer_id :integer          not null
#  product_id  :integer          not null
#  quantity    :integer          not null
#  purchased   :boolean          default(FALSE), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class CartItem < ApplicationRecord
    belongs_to :user,
        foreign_key: :customer_id,
        class_name: :User

    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product
end
