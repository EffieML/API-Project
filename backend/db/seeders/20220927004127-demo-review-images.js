'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('ReviewImages', [
      {
        reviewId: 1,
        url: 'https://a0.muscache.com/im/pictures/ede392b0-8b2d-437f-aff8-958874f32bd4.jpg?im_w=720',
      },
      {
        reviewId: 2,
        url: 'https://a0.muscache.com/im/pictures/77d44299-f4d4-488f-9a59-828f6ffe4861.jpg?im_w=720',
      },
      {
        reviewId: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-48733885/original/6259ddf1-3752-4eaa-8f83-13431b3ecb17.jpeg?im_w=720',
      },
      {
        reviewId: 3,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-38154526/original/c26bff5d-0a11-4f11-b188-93a2b30a6cd3.jpeg?im_w=1200',
      },
      {
        reviewId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-667905374365439455/original/855caeab-bbc6-4068-b239-0c22da9ff237.jpeg?im_w=720',
      },
      {
        reviewId: 5,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-46437081/original/9543fa06-08c0-4d1e-bbff-d9253d270891.jpeg?im_w=720',
      },
    ], {})
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('ReviewImages', null, {});
  }
};
