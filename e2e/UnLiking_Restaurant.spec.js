/* eslint-disable no-undef */
const assert = require('assert');

Feature('UnLiking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', async ({ I }) => {
  I.see('Tambahkan Daftar Restoran Favorite Anda', '.lists');
  I.amOnPage('/');
  I.seeElement('.list-item a');
  const firstRestaurant = locate('.list-item a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.seeElement('#likeButton');

  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.list-item');
  const likedRestaurantTitle = await I.grabTextFrom('.list-item');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(firstRestaurant);
  I.seeElement('#likeButton');

  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.see('Tambahkan Daftar Restoran Favorite Anda', '.lists');
});
