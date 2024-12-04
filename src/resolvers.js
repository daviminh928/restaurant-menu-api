//Import menu data from JSON
const menuData = require('../data/menu.json');

//Define resolver function to fetch data
const resolvers = {
    appetizers: () => menuData.appetizers,         // Fetch all appetizers
    entrees: () => menuData.entrees,              // Fetch all entrees
    sandwichesCold: () => menuData.sandwiches.cold, // Fetch all cold sandwiches
    sandwichesHot: () => menuData.sandwiches.hot,   // Fetch all hot sandwiches
    soupsAndSalads: () => {
        // Transform soups and salads to separate simple prices and combo prices
        return menuData.soups_and_salads.map((item) => {
            if (typeof item.price === 'number') {
            // Simple price
            return {
                name: item.name,
                price: item.price,
                comboPrice: null
            };
            } else {
            // Combo price
            return {
                name: item.name,
                price: null,
                comboPrice: {
                with_small_green_salad: item.price.with_small_green_salad,
                with_half_pasta: item.price.with_half_pasta
                }
            };
            }
        });
    },
    fajitas: () => menuData.fajitas,              // Fetch all fajitas
    tacos: () => menuData.tacos,                  // Fetch all tacos
    enchiladas: () => menuData.enchiladas         // Fetch all enchiladas
    // No additional processing is needed since the data structure matches the schema
};

module.exports = resolvers;
