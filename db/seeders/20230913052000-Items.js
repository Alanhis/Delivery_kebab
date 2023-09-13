'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Items', [
      {
        name: 'Биг Спешиал Ростбиф Комбо',
        about: 'Комбо состоит из Биг Спешиал Ростбиф, Большой порции Картошки-фри и Кока-колы',
        img: 'public/img/1.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Двойной Маффин с яйцом и свиной котлетой',
        about: 'Нежная горячая булочка (английский маффин) с яйцом, двумя аппетитными котлетами из свинины и двумя ломтиками сыра Чеддер',
        img: 'public/img/2.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Цезарь Ролл',
        about: '100% белое куриное мясо в хрустящей панировке, ломтик помидора, листья салата и ломтики твёрдого сыра, заправленные специальным соусом и завёрнутые в пшеничную лепешку',
        img: 'public/img/3.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Шримп Ролл',
        about: 'Нежные креветки в хрустящей панировке, свежий салат Айсберг и лук в пшеничной лепешке, заправленной специальным соусом.',
        img: 'public/img/4.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Биг Спешиал Ролл',
        about: 'Два сочных бифштекса из 100% говядины, свежие овощи, сыр, специальный соус с дымком и все это в пшеничной лепешке',
        img: 'public/img/5.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Большой Снэк Бокс с крыльями',
        about: 'Пикантные Куриные крылышки в хрустящей панировке – 4 шт. Наггетсы – 4 шт. Сырные треугольники Чоризо – 4 шт. 2 стандартные порции Картофеля.',
        img: 'public/img/6.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Салат Цезарь',
        about: 'Хрустящие листья салата айсберг, сочные томаты черри, тертый сыр пармезан и нежнейшие куриные стрипсы.',
        img: 'public/img/7.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Наггетсы (6 шт.)',
        about: 'Наггетсы – это сочное 100% белое куриное мясо в хрустящей панировке со специями. Только натуральная курочка без искусственных красителей и ароматизаторов и без консервантов',
        img: 'public/img/8.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Двойной Чизбургер',
        about: 'Два рубленых бифштекса из натуральной цельной говядины с двумя кусочками сыра Чеддер на карамелизованной булочке, заправленной горчицей, кетчупом, луком и двумя кусочками маринованного огурчика',
        img: 'public/img/9.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Биг Хит',
        about: 'Легендарный бургер с двумя рублеными бифштексами из 100% говядины, маринованными огурчиками, свежим салатом «Айсберг», ломтиком плавленого сыра Чеддер и специальным соусом «Биг Хит» на новой булочке с двумя видами кунжута',
        img: 'public/img/10.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
  ], {});
  },

<<<<<<<< HEAD:db/seeders/20230913051956-Items.js
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Items', null, {});
  },
========
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Items', null, {});
  }
>>>>>>>> dev:db/seeders/20230913052000-Items.js
};
