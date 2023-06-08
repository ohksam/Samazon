# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    has_secure_password

    validates :email,
        presence: true,
        length: { in: 3..255 },
        format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :session_token,
        presence: true,
        uniqueness: true
    validates :name, presence: true
    validates :password, length: { minimum: 6}, allow_nil: true
    validates :password_digest, presence: true #is this line necessary?
    
    before_validation :ensure_session_token


    has_many :cart_items,
        foreign_key: :customer_id,
        class_name: :CartItem,
        dependent: :destroy

    has_many :reviews,
        foreign_key: :reviewer_id,
        class_name: :Review,
        dependent: :destroy
    
    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        if user&.authenticate(password)
            return user
        else
            nil
        end
    end

    def reset_session_token!
        self.session_token = generate_unique_session_token
        self.save!
        self.session_token
    end

    private 

    def generate_unique_session_token
        loop do
            session_token = SecureRandom::urlsafe_base64
            return session_token unless User.exists?(session_token: session_token)
        end
    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end


end
