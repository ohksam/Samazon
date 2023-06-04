json.extract! product, :id, :name, :description, :price, :category
json.photoUrl product.photo.attached? ? product.photo.url : nil