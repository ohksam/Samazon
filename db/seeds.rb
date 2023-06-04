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
      email: 'John@cena.com', 
      password: 'youcantseeme'
    )
  
    10.times do 
      User.create!({
        name: Faker::Name.name,
        email: Faker::Internet.unique.email,
        password: 'password'
      }) 
    end

    10.times do
      Product.create!({
        name: Faker::Book.title,
        description: Faker::Lorem.paragraph(sentence_count: 6),
        price: Faker::Commerce.price(range: 9.99..24.99),
        category: 'books'
      })
    end
  
    puts "Done!"
  end

  Product.create(name: 'Switch', description: 'yay nintendo', price: 300, category: 'electronics')
  Product.create(name: 'bike', description: 'yay bike', price: 600, category: 'active')
  Product.create(name: 'The Count of Monte Cristo', description: 'a great book. one of the highest-rated classics. highly recommended. 10/10. yes. very nice', price: 19.99, category: 'Books')
  Product.create!(name: 'Better Couch', description: 'This couch is so much better.Even more comfortable than the last one.Made of the finest materials from across the world.Great stuff', price: 599.99, category: 'home')

  Product.create(name: 'Cheez-Its', description: 'Delicious breakfast.', price: 4.99, category: 'food')
  Product.create(name: 'Bananas', description: 'Also a delicious breakfast', price: 0.69, category: 'food')
  Product.create(name: 'Goldfish', description: 'The snack that smiles back', price: '3.99', category: 'food')
  # Product.create(name: , description: , price: , category: )
  # Product.create(name: , description: , price: , category: )