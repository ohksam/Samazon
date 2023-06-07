require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


# ApplicationRecord.transaction do 
    puts "Destroying tables..."
    User.destroy_all
  
    puts "Resetting primary keys..."
    # from aa.io - for easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('products')
    ApplicationRecord.connection.reset_pk_sequence!('cart_items')
  
    puts "Creating users..."
    User.create!(
      name: 'John Cena', 
      email: 'john@cena.com', 
      password: 'youcantseeme'
    )
  
    # 10.times do 
    #   User.create!({
    #     name: Faker::Name.name,
    #     email: Faker::Internet.unique.email,
    #     password: 'password'
    #   }) 
    # end

    # 10.times do
    #   Product.create!({
    #     name: Faker::Book.title,
    #     description: Faker::Lorem.paragraph(sentence_count: 6),
    #     price: Faker::Commerce.price(range: 9.99..24.99),
    #     category: 'Books'
    #   })
    # end
  
  puts "Done!"
# end

#Books
monte_cristo = Product.create(name: 'The Count of Monte Cristo', description: 'On the day of his wedding, Edmond Dantès is falsely accused of treason, arrested, and imprisoned without trial in a grim island fortress off Marseilles.* A fellow prisoner inspires Dantès to escape and guides him to a fortune in treasure; Dantès returns home under the pseudonym of the mysterious Count of Monte Cristo, in order to avenge himself on the men who conspired to destroy him.', price: 23.99, category: 'books')
monte_cristo.photo.attach(
  io: URI.open("https://samazon-seeds.s3.amazonaws.com/monte_cristo.jpg"),
  filename: "monte_cristo.jpg"
)

crime = Product.create(name: 'Crime and Punishment', description: 'With the same suppleness, energy, and range of voices that won their translation of The Brothers Karamazov the PEN/Book-of-the-Month Club Prize, Richard Pevear and Larissa Volokhonsky offer a brilliant translation of Dostoevsky\'s astounding pyschological thriller, newly revised for his bicentenniel.* When Raskolnikov, an impoverished student living in the St. Petersburg of the tsars, commits an act of murder and theft, he sets into motion a story that is almost unequalled in world literature for its excruciating suspense, its atmospheric vividness, and its depth of characterization and vision.* Dostoevsky\'s drama of sin, guilt, and redemption transforms the sordid story of an old woman\'s murder into the nineteenth century\'s profoundest and most compelling philosophical novel' , price: 15.99, category: 'books')

crime.photo.attach(
  io: URI.open("https://samazon-seeds.s3.amazonaws.com/crime.jpg"),
  filename: "crime.jpg"
)

sherlock = Product.create(name: 'The Complete Sherlock Holmes Collection (Wordsworth Box Sets)', description: 'The Complete Sherlock Holmes Collection by Sir Arthur Conan Doyle.* The perfect gift for any Sherlock Holmes fan.* Each box set contains six books, together creating a comprehensive collection of the famous detective\'s cases and adventures.* They are beautifully packaged in a ridged, matt-laminated slipcase with metallic detailing, complete with strikingly attractive, bespoke artwork.* Includes: Adventures & Memoirs of Sherlock Holmes Best of Sherlock Holmes Casebook of Sherlock Holmes & His Last Bow Hound of the Baskervilles & The Valley of Fear, Study in Scarlet & Sign of the Four', price: 24.99, category: 'books')

# oliver = Product.create(name: , description: , price: , category: )
# great_ex = Product.create(name: , description: , price: , category: )
# two_cities = Product.create(name: , description: , price: , category: )
# dumbcode = Product.create(name: , description: , price: , category: )
# goodjava = Product.create(name: , description: , price: , category: )
# midnight = Product.create(name: , description: , price: , category: )
# littleprince = Product.create(name: , description: , price: , category: )


# #Electronics
switch = Product.create(name: 'Nintendo Switch™ with Neon Blue and Neon Red Joy‑Con™', description: '3 Play Styles: TV Mode, Tabletop Mode, Handheld Mode* 6.2-inch, multi-touch capacitive touch screen* 4.5-9 plus Hours of Battery Life Will vary depending on software usage conditions* Connects over Wi-Fi for multiplayer gaming; Up to 8 consoles can be connected for local wireless multiplayer* Model number: HAC-001(-01)', price: 299.99, category: 'electronics')
switch.photo.attach(
  io: URI.open("https://samazon-seeds.s3.amazonaws.com/switch.jpg"),
  filename: "switch.jpg"
)

keyboard = Product.create(name: 'Logitech G 213 Prodigy Gaming Keyboard, LIGHTSYNC RGB Backlit Keys, Spill-Resistant, Customizable Keys, Dedicated Multi-Media Keys – Black', description: 'Based on independent aggregated sales data (FEB ‘19 - FEB’20) of Gaming Keyboard, Mice, and PC Headset in units from: US, CA, CN, JP, KR, TW, TH, ID, DE, FR, RU, UK, SE, TR* Brilliant color spectrum illumination - personalize five individual lighting Zones from a spectrum of over 16. 8 million colors. Change colors to match your setup, specific games, or to showcase your favorite colors. Synchronize lighting effects with other Logitech G devices using Logitech gaming software.* Low light leak around each keycap means less more light comes through the lettering – and less leaks around the keycaps. This helps make the illumination of each key more brilliant, making it easier to find your keys in the dark.', price: 69.99, category: 'electronics')
keyboard.photo.attach(
  io: URI.open('https://samazon-seeds.s3.amazonaws.com/keyboard.jpg'),
  filename: 'keyboard.jpg'
)

mouse = Product.create(name: 'Corsair Nightsword RGB - Comfort Performance Tunable FPS/MOBA Optical Ergonomic Gaming Mouse with Backlit RGB LED, 18000 DPI, Black', description: 'Corsair exclusive software automatically detects the center of gravity in real time, allowing you to adjust weight between 119g and 141g and fine tune balance to perfectly fit your grip* A custom PixArt PMW3391 native 18, 000 DPI optical sensor, adjustable in 1 DPI resolution steps, gives you total sensitivity customization and ultra accurate tracking* Built with a comfortable contoured shape that naturally fits your hand, with high-performance rubber grips inspired by Pro sports equipment* Ten fully programmable buttons let you customize your gaming, with the in game advantage of powerful macros and key Remaps* Includes two sets of weights with six mounting locations, Offering 120 different weight and balance configurations for a precisely calibrated gaming experience', price: 89.99, category: 'electronics')
mouse.photo.attach(
  io: URI.open('https://samazon-seeds.s3.amazonaws.com/mouse.jpg'),
  filename: 'mouse.jpg'
)
# headphones = Product.create(name: , description: , price: , category: )
# monitor = Product.create(name: , description: , price: , category: )
# visionpro = Product.create(name: , description: , price: , category: )
# airpods = Product.create(name: , description: , price: , category: )
# bose = Product.create(name: , description: , price: , category: )


# #Home
# potty = Product.create(name: , description: , price: , category: )
# couch = Product.create(name: , description: , price: , category: )
# trolley = Product.create(name: , description: , price: , category: )
# hammock = Product.create(name: , description: , price: , category: )
# pillow = Product.create(name: , description: , price: , category: )
# lamp = Product.create(name: , description: , price: , category: )
# candle = Product.create(name: , description: , price: , category: )
# charcuterie = Product.create(name: , description: , price: , category: )
# wine = Product.create(name: , description: , price: , category: )
# comforter = Product.create(name: , description: , price: , category: )


# #Active
# bike = Product.create(name: , description: , price: , category: )
# tent = Product.create(name: , description: , price: , category: )
# yoga = Product.create(name: , description: , price: , category: )
# frisbee = Product.create(name: , description: , price: , category: )
# water = Product.create(name: , description: , price: , category: )
# kayak = Product.create(name: , description: , price: , category: )


# = Product.create(name: , description: , price: , category: )
# = Product.create(name: , description: , price: , category: )
# = Product.create(name: , description: , price: , category: )
# = Product.create(name: , description: , price: , category: )
# = Product.create(name: , description: , price: , category: )
# = Product.create(name: , description: , price: , category: )


  #put AWS stuff here

  # Product.create(name: 'Switch', description: 'yay nintendo', price: 300, category: 'Electronics')
  # Product.create(name: 'bike', description: 'yay bike', price: 600, category: 'active')
  # Product.create(name: 'The Count of Monte Cristo', description: 'a great book. one of the highest-rated classics. highly recommended. 10/10. yes. very nice', price: 19.99, category: 'books')
  # Product.create!(name: 'Better Couch', description: 'This couch is so much better.Even more comfortable than the last one.Made of the finest materials from across the world.Great stuff', price: 599.99, category: 'home')

  Product.create(name: 'Cheez-Its', description: 'Delicious breakfast.', price: 4.99, category: 'food')
  Product.create(name: 'Bananas', description: 'Also a delicious breakfast', price: 0.69, category: 'food')
  Product.create(name: 'Goldfish', description: 'The snack that smiles back', price: '3.99', category: 'food')
