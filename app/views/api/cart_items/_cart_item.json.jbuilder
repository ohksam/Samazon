json.extract! cart_item, :id, :quantity, :customer_id, :product_id, :purchased, :updated_at

product = cart_item.product
json.product do
    json.extract! product, :name, :price
    json.photoUrl product.photo.url
end



#:product? #cart_item.product?
#do I need photo stuff here? maybe not?