@cart_items.each do |item|
    json.set! item.id do
        json.partial! 'cart_item', cart_item: item
    end
end

#everything should be wrapped in one object, which will contain cart_items and also products
#then on the front end we'll key into whichever slice of state we need depending on which page we're on