class Api::ReviewsController < ApplicationController

    def show
        @review = Review.find(params[:id])

        if @review
            render :show
        else
            render json: { errors: @review.errors.full_messages }, status: 422
        end
    end

    def index
        @reviews = Review.#where(product_id: params[:product_id])
        
        render :index
    end

    def create
        @review = Review.new(review_params)

        if @review.save
            render :show
        else
            render json: errors: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find(params[:id])

        if @review&.update(review_params)
            render :show
        else
            render json: {error: 'Failed to update review' } status: 422
    end

    def destroy
        @review = Review.find(params[:id])
        if @review
            @review.delete
        end
    end


    private 

    def review_params
        params.require(:review).permit(:id, :title, :body, :rating, :product_id, :reviewer_id)
    end
end
