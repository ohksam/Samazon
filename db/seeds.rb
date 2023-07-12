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
    Product.destroy_all
  
    puts "Resetting primary keys..."
    # from aa.io - for easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('products')
    # might not need to reset this if we're not wiping cart items above.
    # ApplicationRecord.connection.reset_pk_sequence!('cart_items')
  
    puts "Creating users..."
    User.create!(
      name: 'John Cena', 
      email: 'john@cena.com', 
      password: 'youcantseeme'
    )

    User.create!(
      name: 'Demo User',
      email: 'demo@user.io',
      password: 'password'
    )

    User.create!(
      name: 'The Reviewer',
      email: 'reviewer@samazon.com',
      password: 'password'
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
  
  # puts "Done!"
# end

puts "Seeding books..."

##### Books
monte_cristo = Product.create(name: 'The Count of Monte Cristo', description: 'On the day of his wedding, Edmond Dantès is falsely accused of treason, arrested, and imprisoned without trial in a grim island fortress off Marseilles.* A fellow prisoner inspires Dantès to escape and guides him to a fortune in treasure; Dantès returns home under the pseudonym of the mysterious Count of Monte Cristo, in order to avenge himself on the men who conspired to destroy him.', price: 23.99, category: 'books')
monte_cristo.photo.attach(
  io: URI.open("https://samazon-seeds.s3.amazonaws.com/monte_cristo.jpg"),
  filename: "monte_cristo.jpg"
)

crime = Product.create(name: 'Crime and Punishment', description: 'With the same suppleness, energy, and range of voices that won their translation of The Brothers Karamazov the PEN/Book-of-the-Month Club Prize, Richard Pevear and Larissa Volokhonsky offer a brilliant translation of Dostoevsky\'s astounding psychological thriller, newly revised for his bicentenniel.* When Raskolnikov, an impoverished student living in the St. Petersburg of the tsars, commits an act of murder and theft, he sets into motion a story that is almost unequalled in world literature for its excruciating suspense, its atmospheric vividness, and its depth of characterization and vision.* Dostoevsky\'s drama of sin, guilt, and redemption transforms the sordid story of an old woman\'s murder into the nineteenth century\'s profoundest and most compelling philosophical novel' , price: 15.99, category: 'books')

crime.photo.attach(
  io: URI.open("https://samazon-seeds.s3.amazonaws.com/crime.jpg"),
  filename: "crime.jpg"
)

sherlock = Product.create(name: 'The Complete Sherlock Holmes Collection (Wordsworth Box Sets)', description: 'The Complete Sherlock Holmes Collection by Sir Arthur Conan Doyle.* The perfect gift for any Sherlock Holmes fan.* Each box set contains six books, together creating a comprehensive collection of the famous detective\'s cases and adventures.* They are beautifully packaged in a ridged, matt-laminated slipcase with metallic detailing, complete with strikingly attractive, bespoke artwork.* Includes: Adventures & Memoirs of Sherlock Holmes Best of Sherlock Holmes Casebook of Sherlock Holmes & His Last Bow Hound of the Baskervilles & The Valley of Fear, Study in Scarlet & Sign of the Four', price: 24.99, category: 'books')
sherlock.photo.attach(
  io: URI.open("https://samazon-seeds.s3.amazonaws.com/sherlock.jpg"),
  filename: "sherlock.jpg"
)

midnight = Product.create(name: 'The Midnight Library', description: 'Somewhere out beyond the edge of the universe there is a library that contains an infinite number of books, each one the story of another reality. One tells the story of your life as it is, along with another book for the other life you could have lived if you had made a different choice at any point in your life. While we all wonder how our lives might have been, what if you had the chance to go to the library and see for yourself? Would any of these other lives truly be better?* In The Midnight Library, Matt Haig\'s enchanting blockbuster novel, Nora Seed finds herself faced with this decision. Faced with the possibility of changing her life for a new one, following a different career, undoing old breakups, realizing her dreams of becoming a glaciologist; she must search within herself as she travels through the Midnight Library to decide what is truly fulfilling in life, and what makes it worth living in the first place.', price: 18.00, category: 'books')
midnight.photo.attach(
  io: URI.open("https://samazon-seeds.s3.amazonaws.com/midnight.jpg"),
  filename: "midnight.jpg"
)

dumbcode = Product.create(name: 'Coding All-in-One For Dummies (For Dummies (Computer/Tech)) 2nd Edition', description: 'The go-to guide for learning coding from the ground-up* Developing native mobile apps for Android and iOS using Flutter* Introducing cloud computing* Expanded JavaScript coverage* Learn the latest JavaScript syntax* Upgraded from Python 2 to Python 3* Learn responsive design with Flexbox', price: 39.99, category: 'books')
dumbcode.photo.attach(
  io: URI.open("https://samazon-seeds.s3.amazonaws.com/dumbcode.jpg"),
  filename: "dumbcode.jpg"
)

goodjava = Product.create(name: 'JavaScript: The Good Parts', description: 'Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. *This authoritative book scrapes away these bad features to reveal a subset of JavaScript that\'s more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code.* Considered the JavaScript expert by many people in the development community, author Douglas Crockford identifies the abundance of good ideas that make JavaScript an outstanding object-oriented programming language-ideas such as functions, loose typing, dynamic objects, and an expressive object literal notation.* Unfortunately, these good ideas are mixed in with bad and downright awful ideas, like a programming model based on global variables.', price: 29.99, category: 'books')
goodjava.photo.attach(
  io: URI.open("https://samazon-seeds.s3.amazonaws.com/goodjava.jpg"),
  filename: "goodjava.jpg"
)

great_ex = Product.create(name: 'Great Expectations: The Original 1860 Edition (A Charles Dickens Classic Novel)', description: 'Great Expectations is Charles Dickens\'s thirteenth novel. It is his second novel, after David Copperfield, to be fully narrated in the first person. *Great Expectations is a bildungsroman, or a coming-of-age novel, and it is a classic work of Victorian literature. It depicts the growth and personal development of an orphan named Pip. *The novel was first published in serial form in Dickens\'s weekly periodical All the Year Round, from 1 December 1860 to August 1861.', price: 9.97, category: 'books')
great_ex.photo.attach(
  io: URI.open("https://samazon-seeds.s3.amazonaws.com/great_ex.jpg"),
  filename: "great_ex.jpg"
)

littleprince = Product.create(name: 'The Little Prince', description: 'This beloved, world-famous allegorical classic about a young prince on a quest for knowledge is an essential read for every home library.* Combining Richard Howard\'s translation with restored original full-color art, this definitive English-language edition of The Little Prince will capture the hearts of readers of all ages.* Few stories are as widely read and as universally cherished by children and adults alike as The Little Prince. When a pilot crashes in the Sahara Desert, he meets a little boy who asks him to draw a sheep. Gradually the Little Prince reveals more about himself: He comes from a small asteroid, where he lived alone until a rose grew there.* But the rose grew demanding, and he was confused by his feelings about her. The story unfolds further from one planet to the next in a thoughtful philosophical exploration of love and the ephemeral.', price: 6.89, category: 'books')
littleprince.photo.attach(
  io: URI.open("https://samazon-seeds.s3.amazonaws.com/littleprince.jpg"),
  filename: "littleprince.jpg"
)

# oliver = Product.create(name: , description: , price: , category: )
# two_cities = Product.create(name: , description: , price: , category: )


puts "Seeding electronics..."

##### Electronics
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

headphones = Product.create(name: 'Sennheiser HD 400S Closed Back, Around Ear Headphone with One-Button Smart Remote on Detachable Cable', description: 'Precision German engineering ensures excellent audio clarity, so you will hear every detail of your music.* One button inline smart Remote makes it convenient to play and pause music and take calls without needing to fumble with your phone.* Lightweight foldable design allows for easy storage making the headphone easy to carry anywhere.* Secure over-ear fit provides excellent reduction of ambient noise, so you can relax and focus on the music.', price: 49.95, category: 'electronics')
headphones.photo.attach(
  io: URI.open("https://samazon-seeds.s3.amazonaws.com/headphones.jpg"),
  filename: "headphones.jpg"
)

monitor = Product.create(name: 'Sceptre 24" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)', description: '24" Ultra slim profile* Contemporary sleek metallic design* Slim bezel with thin chassis. Audio will play from HDMI, there are also built in speakers, and you can also attach your own speakers or use headphones.* 2 x HDMI Ports (convertible to DVI)* VESA wall mount ready', price: 99.97, category: 'electronics')
monitor.photo.attach(
  io: URI.open("https://samazon-seeds.s3.amazonaws.com/monitor.jpg"),
  filename: "monitor.jpg"
)

visionpro = Product.create(name: 'Apple Vision Pro', description: 'A singular piece of three-dimensionally formed laminated glass flows into an aluminum alloy frame that gently curves to wrap around your face.* An array of advanced cameras and sensors work together to let you see the world clearly, understand your environment, and detect hand input.* Speakers are positioned close to your ears, delivering rich Spatial Audio that seamlessly blends with real-world sounds.* The Head Band provides cushioning, breathability, and stretch. The Fit Dial lets you adjust Vision Pro precisely to your head.* A pair of custom micro‑OLED displays deliver more pixels than a 4K TV to each eye — for stunning clarity.', price: 3499.99, category: 'electronics')
visionpro.photo.attach(
  io: URI.open("https://samazon-seeds.s3.amazonaws.com/visionpro.jpg"),
  filename: "visionpro.jpg"
)

airpods = Product.create(name: 'Apple AirPods (3rd Generation) Wireless Earbuds with Lightning Charging Case. Spatial Audio, Sweat and Water Resistant, Up to 30 Hours of Battery Life. Bluetooth Headphones for iPhone', description: 'Personalized Spatial Audio with dynamic head tracking places sound all around you.Note : If the size of the earbud tips does not match the size of your ear canals or the headset is not worn properly in your ears, you may not obtain the correct sound qualities or call performance. Change the earbud tips to ones that fit more snugly in your ear* Single fit* Force sensor lets you control your entertainment and answer or end calls* Sweat and water resistant for AirPods and charging case* Up to 6 hours of listening time', price: 149.00, category: 'electronics')
airpods.photo.attach(
  io: URI.open("https://samazon-seeds.s3.amazonaws.com/airpods.jpg"),
  filename: "airpods.jpg"
)

bose = Product.create(name: 'Bose QuietComfort Earbuds II, Wireless, Bluetooth, World’s Best Noise Cancelling In-Ear Headphones with Personalized Noise Cancellation & Sound, Triple Black', description: 'INTRODUCING QUIETCOMFORT EARBUDS II: These new wireless, bluetooth, noise cancelling earbuds from Bose weren’t designed with a one-size-fits-all approach. These next-generation wireless earbuds are engineered to fit you.* They intelligently personalize the noise cancellation and sound performance to uninterrupted, immersive listening wherever you are. To ensure all-day comfort and a secure fit, they come with three pairs of ear tips and three pairs of custom stability bands, so you can find the best fit for your ears. Own your uniqueness with sound and fit shaped to you.* BOSE World’s Best NOISE CANCELLING EARBUDS: QuietComfort Earbuds II intelligently personalize the noise cancellation and sound performance to your ears, so you can enjoy deep, immersive sound and the world’s best noise cancellation. August 2022. Conclusions derived by Bose Corp., based on ANC measurements made by Michael & Assoc., Inc. per ANSI/ASA S12.42-2010', price: 249.00, category: 'electronics')
bose.photo.attach(
  io: URI.open("https://samazon-seeds.s3.amazonaws.com/bose.jpg"),
  filename: "bose.jpg"
)



puts "Seeding home goods..."

##### Home
potty = Product.create(name: 'Squatty Potty The Original Toilet Stool - Bamboo Flip, 7" & 9" Height, Brown', description: 'Bamboo* Doctor recommended* Easy to alternate between 7" Stool & 9" Stool* Made of 100% natural bamboo* To simulate a squatting position, all you have to do is take a seat, put your feet on the toilet stool, and get comfortable.', price: 24.99, category: 'home')
potty.photo.attach(
  io: URI.open("https://samazon-seeds.s3.amazonaws.com/potty.jpg"),
  filename: "potty.jpg"
)

trolley = Product.create(name: 'Safavieh -Outdoor Collection Orland Natural Wood Tea Trolley Cart', description: 'The teak brown finish of this tea trolly will create a perfect accent to your patio* Crafted of sturdy acacia wood* Perfect for a living room, family room, den, library, or study* This tea trolly measures 23.8 x 39.4 x 29.9* These items can be stored outdoors', price: 185.31, category: 'home')
trolley.photo.attach(
  io: URI.open("https://samazon-seeds.s3.amazonaws.com/trolley.jpg"),
  filename: "trolley.jpg"
)

hammock = Product.create(name: 'Lazy Daze 12 FT Double Quilted Fabric Hammock with Spreader Bars and Detachable Pillow, 2 Person Hammock for Outdoor Patio Backyard Poolside, 450 LBS Weight Capacity, Navy Blue', description: 'Lazy Daze Hammocks are large enough to accommodate 2 people. The hammock bed size is 77 inches x 55 inches.* It’s a 12 feet hammock with 2 steel chain links. A double hammock with a wood spreader bar designed to safely support a maximum capacity of 450 pounds.* The double-layered quilted polyester with inner polyester padding and the polyethylene-stuffing head pillow offers you superior comfort. The 55-inch hardwood spreader bar is powder coated in an oil-rubbed finish, making it more stylish and stable.* Handcrafted polyester ropes add character and authenticity, and thickness of the end cords contribute greatly to the balance and strength of the hammock. ', price: 59.50, category: 'home')
hammock.photo.attach(
  io: URI.open("https://samazon-seeds.s3.amazonaws.com/hammock.jpg"),
  filename: "hammock.jpg"
)

pillow = Product.create(name: 'Vaverto Gel Memory Foam Pillow -Standard Size - Ventilated, Premium Bed Pillows with Washable and Bamboo Pillow Cover, Cooling, Orthopedic Sleeping, Side and Back Sleepers - Dorm Room Essentials', description: 'QUALITY MEMORY FOAM: Gel-infused ventilated cooling memory foam pillow with removable and washable bamboo cover.* This type of memory foam technology allows for a much more sensual and personal night of sleep. It allows users to sleep for a prolonged period of time and not have to worry about aches and pains.* The memory foam provides support for the neck, shoulders, back, and head.', price: 31.49, category: 'home')
pillow.photo.attach(
  io: URI.open("https://samazon-seeds.s3.amazonaws.com/pillow.jpg"),
  filename: "pillow.jpg"
)

candle = Product.create(name: 'Yankee Candle Vanilla Cupcake Scented, Classic 22oz Large Jar Single Wick Candle, Over 110 Hours of Burn Time', description: 'The rich, creamy aroma of vanilla cupcakes with hints of lemon and lots of buttery icing* Long-lasting 110-150 hour burn time* Quality paraffin-grade candle wax delivers a clear, consistent burn* Natural fiber candle wick delivers the best burn for each fragrance', price: 16.88, category: 'home')
candle.photo.attach(
  io: URI.open("https://samazon-seeds.s3.amazonaws.com/candle.jpg"),
  filename: "candle.jpg"
)

charcuterie = Product.create(name: 'KARRYOUNG Acacia Wood Cutting Board with Handle - Wooden Charcuterie Board for Bread, Meat, Fruits, Cheese and Serving，Butcher Block Carving Board for Kitchen Chopping，17 x 7 Inch', description: 'Acacia Wood Construction- This cutting board is made of acacia wood. Acacia is famous for being virtually indestructible. The wood has a beautiful natural polish and a sweet smell and can withstand the demands of weighted objects making it perfect for carving meats.* Comfortable Handle – Non-Slip Grip Makes It Easy to Transfer Chopped Ingredients Directly to Cooking Pot. Keeps Countertops Clean and Clutter-Free.* Heavy-Duty Chopping Board- This cutting board for kitchen is very thick and big enough to withstand large and heavy meats like a whole turkey for Thanksgiving, as well as stand up to the demands of everyday cooking in home and resturants.', price: 11.99, category: 'home')
charcuterie.photo.attach(
  io: URI.open("https://samazon-seeds.s3.amazonaws.com/charcuterie.jpg"),
  filename: "charcuterie.jpg"
)

# lamp = Product.create(name: , description: , price: , category: )
# couch = Product.create(name: , description: , price: , category: )
# wine = Product.create(name: , description: , price: , category: )
# comforter = Product.create(name: , description: , price: , category: )


# #Active
goggles = Product.create(name: 'Speedo Unisex-Adult Swim Goggles Mirrored Vanquisher 2.0', description: '65% Silicone, 32.5% Polycarbonate, 2.5% Polyurthane* Anti-Fog: Lenses resist fogging for clear underwater vision* UV Protection: Protects your eyes from the sun\'s harmful UVA and UVB rays* Mirrored Lens: Maximum visibility, minimum glare; ideal for outdoor use', price: 21.99, category: 'active')
goggles.photo.attach(
  io: URI.open("https://samazon-seeds.s3.amazonaws.com/goggles.jpg"),
  filename: "goggles.jpg"
)

bike = Product.create(name: 'Ktaxon Mountain Bike 26 Inch Men & Women Mountain Bike 21-Speed Adult Bikes, Double Disc Brake, Suspension Fork,High Carbon Steel Frame (Black/Red)', description: 'PROFESSIONAL 21-SPEED SHIFTING SYSTEM:* The 21-speed transmission system with quick, precise gear changes makes this mountain bike can easier to adapt to different terrain.* Made of non-slip and explosion-proof materials, our tires can easily conquer gravel paths, dirt paths, and rocky roads.', price: 109.99, category: 'active')
bike.photo.attach(
  io: URI.open("https://samazon-seeds.s3.amazonaws.com/bike.jpg"),
  filename: "bike.jpg"
)


water = Product.create(name: 'Enerbone 32 oz Water Bottle with Times to Drink and Straw, Motivational Drinking Water Bottles with Carrying Strap, Leakproof BPA & Toxic Free, Ensure You Drink Enough Water for Fitness Gym Outdoor', description: '32 oz water bottle with unique inspiration quote and time marker, reminding you to stay hydrated. The capacity marker helps you tracking daily water intake.* A silicone straw makes you enjoy spill-proof sipping without effort. A necessary have for people of different occupations such as athletes and white-collar workers.', price: 9.99, category: 'active')
water.photo.attach(
  io: URI.open("https://samazon-seeds.s3.amazonaws.com/water.jpg"),
  filename: "water.jpg"
)

kayak = Product.create(name: 'Pelican - Argo 100X - Sit-in Kayak - Lightweight one Person Kayak - 10 ft', description: 'Stable: The twin-arched multi-chine hull offers excellent stability for a secure and steady ride. It also makes it incredibly easy to get in and out of the kayak.* Safe: Additional floatation in the form of foam blocks inside the kayak as well as a flatter hull ensure safety and peace of mind when you\'re out on the water. This kayak holds a maximum weight capacity of 275 lb.* Lightweight: Made of an exceptionally durable high molecular weight polyethylene, our kayaks require less materials to be built. At 10 ft and weighing only 36 lb, the ARGO 100X is incredibly easy to transport, carry and store.', price: 349.99, category: 'active')
kayak.photo.attach(
  io: URI.open("https://samazon-seeds.s3.amazonaws.com/kayak.jpg"),
  filename: "kayak.jpg"
)

# tent = Product.create(name: , description: , price: , category: )
# yoga = Product.create(name: , description: , price: , category: )
# frisbee = Product.create(name: , description: , price: , category: )


cheez = Product.create(name: 'Cheez-It Crackers - 3 lb. box', description: 'Lightly spiced, sharp-cheese flavor.* Made with 100% real cheese.* 0g trans fat.
* Delicious breakfast.', price: 20.08, category: 'food')
cheez.photo.attach(
  io: URI.open("https://samazon-seeds.s3.amazonaws.com/cheez.jpg"),
  filename: "cheez.jpg"
)

# banana = Product.create(name: 'Bananas', description: 'Also a delicious breakfast', price: 0.69, category: 'food')
# banana.photo.attach(
#   io: URI.open(""),
#   filename: ""
# )

# goldfish = Product.create(name: 'Goldfish', description: 'The snack that smiles back', price: '3.99', category: 'food')
# goldfish.photo.attach(
#   io: URI.open(""),
#   filename: ""
# )

puts 'Done!'

# .photo.attach(
#   io: URI.open(""),
#   filename: ""
# )