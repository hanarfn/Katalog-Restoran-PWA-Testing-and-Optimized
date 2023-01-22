import LikeButtonInitiator from "../../src/scripts/utils/like-button-presenter";
import FavoriteRestaurantDB from "../../src/scripts/data/huntfood-idb";

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
    await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurant: FavoriteRestaurantDB,
        restaurant,
    });
};

export { createLikeButtonPresenterWithRestaurant };