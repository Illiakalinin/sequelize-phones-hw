// const { sequelize, Phone } = require('./models');

// sequelize
//   .sync({ force: true })
//   .then(() => console.log('Sync OK)'))
//   .catch(e => console.log('e :>> ', e));

// додавання нового телефону-----------------------------------------------------------------------

// (async () => {
//   const phone = {
//     brand: 'OnePlus',
//     model: '10T',
//     manufacturedYear: '2022-06-13',
//     ram: 8,
//     cpu: 'Snapdragon 8 Plus Gen 1',
//     displaySize: 6.7,
//     nfc: true,
//   };

// const createdPhone = await Phone.create(phone);
// console.log('createdPhone :>> ', createdPhone.get());

// отримання списку телефонів (* 3-я сторінка при перегляді по 4 телефони на сторінці, упорядкованих за роком виробництва)-------------------------------------------------------------------------

// const foundPhones = await Phone.findAll({
//   raw: true,
//   limit: 4,
//   offset: 8,
//   order: ['manufacturedYear'],
// });
// console.log('foundPhones :>> ', foundPhones);

// *отримання списку телефонів певного року видання (2011)-------------------------------------

// const foundPhones = await Phone.findAll({
//   raw: true,
//   group: 'id',
//   having: sequelize.literal('EXTRACT (YEAR FROM manufactured_year) = 2011'),
// });
// console.log('foundPhones :>> ', foundPhones);

// *отримання списку телефонів старше 2020 року випуску ----------------------------------------

// const foundPhones = await Phone.findAll({
//   raw: true,
//   where: sequelize.literal('EXTRACT (YEAR FROM manufactured_year) > 2020'),
// });
// console.log('foundPhones :>> ', foundPhones);

// оновлення: додати нфс всім телефонам 2021(в моєму випадку 2011) року випуску---------------------------------------

// const [, [updatedPhone]] = await Phone.update(
//   { nfc: true },
//   {
//     raw: true,
//     where: sequelize.literal('EXTRACT (YEAR FROM manufactured_year) = 2011'),
//     returning: true,
//   }
// );
// console.log('updatedPhone :>> ', updatedPhone);

// видалення телефонів 2010 року випуску-------------------------

// const deletedPhone = await Phone.destroy({
//   where: sequelize.literal('EXTRACT (YEAR FROM manufactured_year) = 2010'),
// });
// console.log('deletedPhone :>> ', deletedPhone);
// })();
