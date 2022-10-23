'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('SpotImages', [
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-46437081/original/ae8b8858-7777-4003-8bc3-593e38d0b8e8.jpeg?im_w=1200',
        preview: true,
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-46437081/original/184c150c-e0dd-41ea-b27e-7ba261c70df1.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-46437081/original/9543fa06-08c0-4d1e-bbff-d9253d270891.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-46437081/original/d4ddc751-3b21-4dc6-8272-097901eec7d3.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-46437081/original/cd60c030-b891-49d8-b373-650145609d3a.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/5f5567d3-480c-43dd-9b6a-e057dab2192d.jpg?im_w=1200',
        preview: true,
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-667905374365439455/original/37668003-8132-4c44-adc3-090cdcdab4d7.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-667905374365439455/original/76042489-60ea-4faf-af36-a3a902fc8e59.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-667905374365439455/original/25211289-ca35-489d-a681-f72c2129b011.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-667905374365439455/original/855caeab-bbc6-4068-b239-0c22da9ff237.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/787ff749-f22a-469e-a0d0-426916da40d5.jpg?im_w=1200',
        preview: true,
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/146d7559-e029-42a8-8dc0-cb8d431deddf.jpg?im_w=720',
        preview: false,
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-38154526/original/6dbfa9c2-c544-4dd8-8614-fa390338f87f.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-38154526/original/c26bff5d-0a11-4f11-b188-93a2b30a6cd3.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-38154526/original/a6e3b794-90e6-4a86-9ffb-4763ddca2c4a.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/81d412c4-e692-4673-9fcb-cea00502bae4.jpg?im_w=1200',
        preview: true,
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-48733885/original/70e89641-14ba-4ba8-9ff4-f0284bebf014.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-48733885/original/d02bd9cd-460e-4618-aff9-999a1bcdbe8b.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-48733885/original/7356fa16-0581-4e64-8ef8-115e2f8772fb.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-48733885/original/6259ddf1-3752-4eaa-8f83-13431b3ecb17.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-711870238451089844/original/997dd820-5eaa-4052-8b72-8ba92796c62f.jpeg?im_w=1200',
        preview: true,
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-711870238451089844/original/80718616-8a79-4892-9382-34ec53300b5f.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-711870238451089844/original/d47e9e87-9383-4173-a907-75c57af07ec8.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-711870238451089844/original/2ffa1a84-b417-4e9e-b5a3-284910ec46a4.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-711870238451089844/original/779c6d4e-9abb-4793-8f1e-dd226ac7f20c.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-611398014875184235/original/e837df91-0e75-469a-9646-c8ccd46b3d40.jpeg?im_w=1200',
        preview: true,
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-611398014875184235/original/58da883c-e30d-4a59-914b-4f5de17d75cb.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-611398014875184235/original/d161ba5e-ba0b-4655-b655-c0882f7ae8b3.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-611398014875184235/original/e5071038-7d26-400b-bee0-e8b4a32f326c.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-611398014875184235/original/04dffca7-b10c-4546-90b3-8592fb65afea.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-35484446/original/898f8622-f3cf-49ee-b99f-3bf642251cd4.jpeg?im_w=1200',
        preview: true,
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-35484446/original/8de69f38-5ff5-493e-a451-1181b02d0aca.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-35484446/original/c3f9e1eb-0469-4ddd-a352-75a5f68b91b9.jpeg?im_w=1440',
        preview: false,
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-35484446/original/6fd9bb20-c735-45cf-9ce7-9dfe31437fcc.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-35484446/original/01130331-0083-42d5-9f16-b166a70e9b60.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/49ee362b-b47f-49fa-b8c0-18a41dbd4c4d.jpg?im_w=1200',
        preview: true,
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/1caa91ce-3a1f-4ea8-be4c-a483bdc1d750.jpg?im_w=720',
        preview: false,
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/8071889f-5e13-4d83-855c-e55780dc6397.jpg?im_w=720',
        preview: false,
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/7c1610d5-b8d0-4383-a277-615d010a5976.jpg?im_w=720',
        preview: false,
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/bb911aa2-7070-48a7-917a-62ea2425a3f1.jpg?im_w=720',
        preview: false,
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/eedc81c2-33e1-4b9a-aedc-13d58c9f90aa.jpg?im_w=1200',
        preview: true,
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51871434/original/b221edb9-196b-45f5-b004-05bd60525ee8.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51871434/original/20c43abc-297b-4b24-bc75-54596ef88b1b.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51871434/original/5a365bbe-9d53-495f-bcf2-5c25b5cc4abc.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51871434/original/aa17c7f3-c735-49e7-903d-5eeeb20ab9a9.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-31152197/original/9d20f881-e606-4b19-a099-979e0d416005.jpeg?im_w=1200',
        preview: true,
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-31152197/original/d2005837-a1ed-4d50-880e-53320400b93f.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-31152197/original/5948d0a9-1634-47d1-8b38-ec85d4e0da70.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-31152197/original/7bbf85d6-3aca-43aa-a7a7-aeefb49acec7.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-31152197/original/0e2b8762-3317-4a23-81f9-5ecdb1442644.jpeg?im_w=720',
        preview: false,
      },
    ], {})
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('SpotImages', null, {});
  }
};
