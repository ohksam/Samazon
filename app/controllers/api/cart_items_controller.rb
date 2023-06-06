class Api::CartItemsController < ApplicationController

    def index
        @cart_items = current_user.cart_items #.where(purchased: false) could do this here ORRR on the front end o.o
        render :index
    end

    def create
        # debugger
        @cart_item = CartItem.new(item_params)
        @user = current_user
        # debugger

        if @cart_item.save
            render :show
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    def update
        # debugger
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
