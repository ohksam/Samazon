require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ApplicationRecord.transaction do 
    puts "Destroying tables..."
    User.destroy_all
  
    puts "Resetting primary keys..."
    # from aa.io - for easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
  
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
end

#Books
monte_cristo = Product.create(name: 'The Count of Monte Cristo', description: 'On the day of his wedding, Edmond Dantès is falsely accused of treason, arrested, and imprisoned without trial in a grim island fortress off Marseilles. A fellow prisoner inspires Dantès to escape and guides him to a fortune in treasure; Dantès returns home under the pseudonym of the mysterious Count of Monte Cristo, in order to avenge himself on the men who conspired to destroy him.', price: 23.99, category: 'Books')
monte_cristo.photo.attach(
  io: URI.open("https://samazon-seeds.s3.amazonaws.com/monte_cristo.jpg"),
  filename: "monte_cristo.jpg"
)

crime_and_pun = Product.create(name: , description: , price: , category: )
oliver = Product.create(name: , description: , price: , category: )
sherlock = Product.create(name: , description: , price: , category: )
great_ex = Product.create(name: , description: , price: , category: )
two_cities = Product.create(name: , description: , price: , category: )
dumbcode = Product.create(name: , description: , price: , category: )
goodjava = Product.create(name: , description: , price: , category: )
midnight = Product.create(name: , description: , price: , category: )
littleprince = Product.create(name: , description: , price: , category: )


#Electronics
switch = Product.create(name: , description: , price: , category: )
keyboard = Product.create(name: , description: , price: , category: )
mouse = Product.create(name: , description: , price: , category: )
headphones = Product.create(name: , description: , price: , category: )
monitor = Product.create(name: , description: , price: , category: )
visionpro = Product.create(name: , description: , price: , category: )
airpods = Product.create(name: , description: , price: , category: )
bose = Product.create(name: , description: , price: , category: )


#Home
potty = Product.create(name: , description: , price: , category: )
couch = Product.create(name: , description: , price: , category: )
trolley = Product.create(name: , description: , price: , category: )
hammock = Product.create(name: , description: , price: , category: )
pillow = Product.create(name: , description: , price: , category: )
lamp = Product.create(name: , description: , price: , category: )
candle = Product.create(name: , description: , price: , category: )
charcuterie = Product.create(name: , description: , price: , category: )
wine = Product.create(name: , description: , price: , category: )
comforter = Product.create(name: , description: , price: , category: )


#Active
bike = Product.create(name: , description: , price: , category: )
tent = Product.create(name: , description: , price: , category: )
yoga = Product.create(name: , description: , price: , category: )
frisbee = Product.create(name: , description: , price: , category: )
water = Product.create(name: , description: , price: , category: )
kayak = Product.create(name: , description: , price: , category: )


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
