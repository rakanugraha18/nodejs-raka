'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'posts',
      [
        {
          id: '7272be1c-5edb-4153-a731-c2839d001f9f',
          user_id: 'aecbae29-2f8d-4393-ae13-e66362a33f3f',
          title: 'Varius quam quisque id diam vel quam',
          body: 'Sit amet consectetur adipiscing elit duis tristique. Nisl vel pretium lectus quam id. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Nam libero justo laoreet sit amet cursus sit. Fringilla urna porttitor rhoncus dolor. Nulla facilisi nullam vehicula ipsum a. Eu turpis egestas pretium aenean pharetra magna ac. Odio ut sem nulla pharetra diam.',
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id: '5140c049-c085-4527-a22e-23d1cf6d1cd6',
          user_id: '57bb70df-ee2b-4a50-b0db-93aea2581d56',
          title: 'Nunc consequat interdum varius sit amet mattis',
          body: 'Nunc consequat interdum varius sit amet mattis. In cursus turpis massa tincidunt dui ut ornare lectus sit. Aliquam vestibulum morbi blandit cursus risus at. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Metus aliquam eleifend mi in nulla posuere. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Elit sed vulputate mi sit amet mauris. Vitae turpis massa sed elementum tempus.',
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id: '72d3ab9a-f1aa-41c0-81e1-6431e12f5eb3',
          user_id: 'ffcd7710-a4be-4a0a-964a-917d4def3837',
          title: 'Eget aliquet nibh praesent tristique',
          body: 'Arcu vitae elementum curabitur vitae nunc sed velit. Velit egestas dui id ornare arcu odio. Dictumst quisque sagittis purus sit amet. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Ultricies leo integer malesuada nunc.',
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id: 'e7bfa75d-75ef-428d-8ffd-305aa8bc96e0',
          user_id: 'c595c906-c7c3-40e5-a1ce-ae14760158be',
          title: 'Lorem ipsum dolor sit amet',
          body: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Mi quis hendrerit dolor magna eget est lorem ipsum. Sed felis eget velit aliquet. Congue eu consequat ac felis donec et odio. Sit amet consectetur adipiscing elit pellentesque. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Lorem ipsum dolor sit amet consectetur adipiscing. Nam aliquam sem et tortor. Et ultrices neque ornare aenean. Pretium aenean pharetra magna ac placerat vestibulum lectus. Gravida quis blandit turpis cursus in hac habitasse platea. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Ut lectus arcu bibendum at varius vel pharetra vel. Pellentesque habitant morbi tristique senectus et. Consequat semper viverra nam libero justo laoreet sit amet.',
          updatedAt: new Date(),
          createdAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('posts', null, {});
  },
};
