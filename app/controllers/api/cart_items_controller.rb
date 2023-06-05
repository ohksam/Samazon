class Api::CartItemsController < ApplicationController

    def index
        @cart_items = current_user.cart_items
        render :index
    end

    def create
        @cart_item = CartItem.new(item_params)

        if @cart_item.save
            render :show
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    def update
        @cart_item = CartItem.find(params[:id])
        if @cart_item && @cart_item.update(item_params)
            render :show
        else
            render json: { error: 'Failed to update cart item'}, status: 422
        end
    end

    def destroy
        @cart_item = CartItem.find(params[:id])
        if @cart_item
            @cart_item.delete
        end
    end

    private

    def item_params 
        params.require(:cart_item).permit(:customer_id, :product_id, :quantity, :purchased)
    end
end
