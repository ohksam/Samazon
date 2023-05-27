class ApplicationController < ActionController::API
    include ActionController::RequestForgeryProtection

    protect_from_forgery with: :exception

    before_action :snake_case_params
    before_action :attach_authenticity_token


    def test
        render json: { message: ["Hello from Rails"] }
    end

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_logged_in
        unless current_user
            render json: { message: 'Unauthorized' }, status: :unauthorized 
        end
    end

    def login!(user)
        session[:session_token] = user.reset_session_token!
    end

    def logout!
        session[:session_token] = nil
        current_user.reset_session_token!
        @current_user = nil
    end

    private

    def snake_case_params
        params.deep_transform_keys(&:underscore)
    end

    def attach_authenticity_token
        headers['X-CSRF-Token'] = masked_authenticity_token(session)
    end
end
