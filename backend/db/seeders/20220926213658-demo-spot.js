'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spots', [
      {
        ownerId: 1,
        address: '7000 Seawall Blvd',
        city: 'Galveston',
        state: 'Texas',
        country: 'United States',
        lat: 29.26230902716777,
        lng: -94.83468010314624,
        name: "Oceanfront 4 bedroom beach house",
        description: "This stunning beachfront property, located on a stretch of beach with restricted vehicle access, has fabulous views of the ocean and private beach access. It sleeps up to 10 guests in 4 bedrooms. Upper level has a spacious master bedroom, bathroom, and private deck with an ocean view. Main floor has an inviting open floor plan with living area, dining area, bar, kitchen, 3 bedrooms, and 2 bathrooms.",
        price: 608,
      },
      {
        ownerId: 3,
        address: '6550 Comanche Trail',
        city: 'Austin',
        state: 'Texas',
        country: 'United States',
        lat: 30.405846046109602,
        lng: -97.87408455917473,
        name: "Private In-Law Suite Walkable to Marina",
        description: "Our luxury studio is in one of Lakeways most popular neighborhoods on the South Shore, just minutes from the lake. Walk to the marina or hop in the car for a 30 second drive, your choice. After a long day on the lake, come kick your shoes off in your newly renovated luxury studio. Equipped with a full kitchen, big screen tv, and blackout shades, you'll sleep like a rock ready for your next adventure on the lake!",
        price: 95,
      },
      {
        ownerId: 4,
        address: '400 Broad St',
        city: 'Seattle',
        state: 'Washington',
        country: 'United States',
        lat: 47.6214356083016,
        lng: -122.34895801722446,
        name: "Private suite with free parking on Capitol Hill",
        description: "Recently remodeled Craftsman basement apartment in quiet residential area of Capitol Hill with free street parking. Walking distance to Volunteer Park, restaurants and cafes. Private entrance with well lit pathway for late arrivals, great day lighting, and tall ceilings with extra insulation to minimize noise from the main house.",
        price: 96,
      },
      {
        ownerId: 5,
        address: '42334 SE Pagh Rd',
        city: 'Sandy',
        state: 'Oregon',
        country: 'United States',
        lat: 45.51937013549017,
        lng: -122.70853164871765,
        name: "Treehouse Glamping Adventure in Sandy, Oregon",
        description: "The Izer Treehouse is an incredible off-grid retreat. Nestled in a secluded setting amongst the tree-tops overlooking the Bull Run River Canyon, it's the perfect hideaway for couples seeking a romantic escape or BFFs looking for an adventurous getaway.",
        price: 155,
      },
      {
        ownerId: 2,
        address: '3601 Lyon St',
        city: 'San Francisco',
        state: 'California',
        country: 'United States',
        lat: 37.80787733472923,
        lng: -122.44721430093985,
        name: "Luxo Stays Beach Life with hottub and backyard",
        description: "This is a super fun spacious home w/6 bedrooms & 3 full baths fits up to 19 in 8 beds & 2 queen sized sofabeds. Lots of amenities like a pool table, hot tub, foosball table, fire pit, corn hole, a beautiful deck on the second floor, Netflix, HD TV, & a fully equipped kitchen. Conveniently located to beaches and a vast array, of fun shops and delectable seafood restaurants. Soul Grind coffee shop, Taco Bell Cantina, and many more conveniences are just a stones throw away!",
        price: 661,
      },
      //6
      {
        ownerId: 1,
        address: '859 Palmetto Dr',
        city: 'Crystal Beach',
        state: 'Texas',
        country: 'United States',
        lat: 29.444675791280083,
        lng: -94.6521269795661,
        name: "Beachfront~Views",
        description: "Welcome to Front Row Seat, our luxury beachfront home with panoramic views everywhere you look!! This 1800 sq ft property has four bedrooms (3 king size beds, 4 full size bunk beds) and 3 1/2 baths, and is perfect for a large family get away, promoting beach vibes and relaxation. ",
        price: 306,
      },
      //7
      {
        ownerId: 5,
        address: '2260 Bilyeu Ave W',
        city: 'Tillamook',
        state: 'Oregon',
        country: 'United States',
        lat: 45.427854081133745,
        lng: -123.93758330120536,
        name: "The Stormwatcher",
        description: "The Stormwatcher is a brand new custom built Ocean view home with Breathtaking Views! Be one the first guests to stay in this immaculate, modern home with unbeatable, unobstructed views of the Pacific Ocean and the quaint village of Oceanside.",
        price: 488,
      },
      //8
      {
        ownerId: 2,
        address: '6263 Thomas Spring Rd',
        city: 'Bridgewater',
        state: 'Virginia',
        country: 'United States',
        lat: 38.40003005914791,
        lng: -79.0083967058883,
        name: "The Joshua Tree House",
        description: "Come unwind in our exclusive tree house getaway, nestled amongst pine trees. Take a short walk to enjoy the river.",
        price: 251,
      },
      //9
      {
        ownerId: 5,
        address: '15505 SE Ten Eyck Rd',
        city: 'Sandy',
        state: 'Oregon',
        country: 'United States',
        lat: 45.41147183981153,
        lng: -122.23127687707267,
        name: "The Woodlands Hideout",
        description: "The Woodlands Hideout is a small intentional retreat space, recently featured in Dwell. Designed and created with so much love, and with the hope that guests could  immerse in the beauty of the natural world, but still offer some cozy and more essential comforts.",
        price: 163,
      },
      //10
      {
        ownerId: 3,
        address: '4011 Deer Creek Rd',
        city: 'Troy',
        state: 'Texas',
        country: 'United States',
        lat: 31.20635046939309,
        lng: -97.25288407315658,
        name: "The Silo House At Laughing Llama Farm",
        description: "Enjoy The Silo House At Laughing Llama farm, secluded and private, conveniently located within minutes to everything Waco, Temple & Belton have to offer.  You can also follow along on Insta at @silohouselaughingllamafarm.",
        price: 229,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Spots', null, {});
  }
};
