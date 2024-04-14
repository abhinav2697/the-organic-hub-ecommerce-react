import { Response } from "miragejs";
import { formatDate, requireAuth, RequiresAuth } from "../utils/authUtils";

export const getWishlistItemsHandler = function (schema, request) {
    const userId = requireAuth.call(this, request);
    if (!userId) {
        new Response(
            404,
            {},
            {
                errors: ["The email you entered is not Registered. Not Found error"],
            }
        );
    }

    const userWishlist = schema.users.findBy({ _id: userId }).wishlist;
    return new Response(200, {}, { wishlist: userWishlist });
}

export const addItemToWishlistHandler = function (schema, request) {
    const userId = requireAuth.call(this, request);
    try {
        if (!userId) {
            new Response(
                404,
                {},
                {
                    errors: ["The email you entered is not Registered. Not Found  error"],
                }
            )
        }
        const userWishlist = schema.users.findBy({ _id: userId }).wishlist;
        const { product } = JSON.parse(request.requestBody);
        userWishlist.push({
            ...product,
            createdAt: formatDate(),
            updatedAt: formatDate(),
        });
        this.db.users.update({ _id: userId }, { wishlist: userWishlist });
        return new Response(201, {}, { wishlist: userWishlist });
    } catch (error) {
        return new Response(
            500,
            {},
            {
                error,
            }
        )
    }
}

export const removeItemFromWishlistHandler = function (schema, request) {
    const userId = requireAuth.call(this, request);
    try {
        if (!userId) {
            new Response(
                404,
                {},
                {
                    error:["The email you entered is not Registered. Not Found error"],
                }
            )
        }
        let userWishlist = schema.users.findBy({ _id: userId }).wishlist;
        const productId = request.params.productId;
        userWishlist = userWishlist.filter((item) => item._id !== productId);
        this.db.users.update({ _id: userId }, { wishlist: userWishlist });
        return new Response(200, {}, { wishlist: userWishlist });
      } catch (error) {
        return new Response(
          500,
          {},
          {
            error,
          }
        );
      }
    };