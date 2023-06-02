class Api::ProductsController < ApplicationController

    def index
        # @products = Product.all
        @products = Product.where(category: (params[:category]))
        #product.where(category = params[:category], select *)
        render :index
    end

    def show
        # @product = Product.find_by(id: params[:id])
        @product = Product.find(params[:id])
        
        if @product
            render :show
        else
            nil
        end
    end
    
end
