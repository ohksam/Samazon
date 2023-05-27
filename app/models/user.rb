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
    
        
    before_action
    #attr_reader
    
    def self_find_by_credentials(email, password)
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
