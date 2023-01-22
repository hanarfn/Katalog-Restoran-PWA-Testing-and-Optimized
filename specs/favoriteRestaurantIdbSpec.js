import { itActsAsFavoriteRestaurantModel } from "./contract/favoriteRestaurantContract";
import FavoriteRestaurantDB from "../src/scripts/data/huntfood-idb";

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
    afterEach(async () => {
        (await FavoriteRestaurantDB.getAllRestaurant()).forEach(async (restaurant) => {
            await FavoriteRestaurantDB.deleteRestaurant(restaurant.id);
        });
    });

    itActsAsFavoriteRestaurantModel(FavoriteRestaurantDB);
});