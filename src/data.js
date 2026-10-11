// RFC GRILL RESTAURANT - Complete Menu & Deals Data

export const categories = [
  "Shakes",
  "Cocktail Drinks",
  "Coffee",
  "Tea",
  "Ice Cream",
  "Salad & Raita",
  "Tandoor",
  "BBQ",
  "BBQ Platters",
  "Daal & Sabzi",
  "Mutton Karahi",
  "Beef Karahi",
  "Chicken Karahi",
  "Handi",
  "Special Grevy",
  "Chinese Rice",
  "Sweets",
  "Pastas",
  "Pulao & Biryani",
  "Soups",
  "Pratha Roll",
  "Fries",
  "Wrap",
  "Sandwich",
  "Special Items",
  "Roasted Platter",
  "Wings & Nuggets",
  "Burgers",
  "Shawarma",
  "Regular Pizza",
  "Special Pizza",
  "RFC Special Pizza",
  "RFC New Pizza"
];

// Pre-defined image assets
export const images = {
  hero: "/assets/images/hero_charcoal_grill_1791207242142.webp",
  bbq: "/assets/images/bbq_platter_dish_1791207258326.webp",
  karahi: "/assets/images/mutton_karahi_dish_1791207270416.webp",
  pizza: "/assets/images/special_pizza_dish_1791207282349.webp",
  fastfood: "/assets/images/fastfood_deal_dish_1791207294480.webp"
};

export const menuItems = [
  // SHAKES
  { category: "Shakes", name: "RFC Special Shake", price: 550, image: "/assets/images/shakes-0.webp" },
  { category: "Shakes", name: "Oreo Shake", price: 500, image: "/assets/images/shakes-1.webp" },
  { category: "Shakes", name: "Strawberry Shake", price: 450, image: "/assets/images/shakes-2.webp" },
  { category: "Shakes", name: "KitKat Shake", price: 550, image: "/assets/images/shakes-3.webp" },
  { category: "Shakes", name: "Chocolate Shake", price: 450, image: "/assets/images/shakes-4.webp" },
  { category: "Shakes", name: "Mango Shake", price: 450, image: "/assets/images/shakes-5.webp" },
  { category: "Shakes", name: "Caramel Shake", price: 450, image: "/assets/images/shakes-6.webp" },
  { category: "Shakes", name: "Kulfa Shake", price: 450, image: "/assets/images/shakes-7.webp" },
  { category: "Shakes", name: "Power Shake", price: 550, image: "/assets/images/shakes-8.webp" },
  { category: "Shakes", name: "Pista Shake", price: 450, image: "/assets/images/shakes-9.webp" },
  { category: "Shakes", name: "Love Story Shake", price: 550, image: "/assets/images/shakes-0.webp" },
  { category: "Shakes", name: "Chaska Shake", price: 550, image: "/assets/images/shakes-1.webp" },

  // COCKTAIL DRINKS
  { category: "Cocktail Drinks", name: "Mint Margrita", price: 280, image: "/assets/images/cocktail-drinks-0.webp" },
  { category: "Cocktail Drinks", name: "Lemonade", price: 280, image: "/assets/images/cocktail-drinks-1.webp" },
  { category: "Cocktail Drinks", name: "Fresh Lime", price: 190, image: "/assets/images/cocktail-drinks-2.webp" },

  // COFFEE
  { category: "Coffee", name: "RFC Special Coffee", price: 550, image: "/assets/images/coffee-0.webp" },
  { category: "Coffee", name: "Black Coffee", price: 280, image: "/assets/images/coffee-1.webp" },
  { category: "Coffee", name: "Creamy Coffee", price: 450, image: "/assets/images/coffee-2.webp" },
  { category: "Coffee", name: "Milk Coffee", price: 450, image: "/assets/images/coffee-3.webp" },
  { category: "Coffee", name: "Cappuccino Coffee", price: 500, image: "/assets/images/coffee-4.webp" },
  { category: "Coffee", name: "Hot Coffee", price: 450, image: "/assets/images/coffee-5.webp" },
  { category: "Coffee", name: "Cold Coffee", price: 450, image: "/assets/images/coffee-6.webp" },
  { category: "Coffee", name: "Chocolate Coffee", price: 450, image: "/assets/images/coffee-7.webp" },

  // TEA
  { category: "Tea", name: "RFC Special Tea", price: 150, image: "/assets/images/tea-0.webp" },
  { category: "Tea", name: "Iliachi Tea", price: 180, image: "/assets/images/tea-1.webp" },
  { category: "Tea", name: "Green Tea", price: 110, image: "/assets/images/tea-2.webp" },
  { category: "Tea", name: "Kashmiri Tea", price: 320, image: "/assets/images/tea-3.webp" },

  // ICE CREAM
  { category: "Ice Cream", name: "Ice Cream 2 Scoop", price: 350, description: "Flavours: Kulfa, Pista, Vanilla, Chocolate, Strawberry, Mango, Caramel", image: "/assets/images/ice-cream-0.webp" },
  { category: "Ice Cream", name: "Ice Cream 4 Scoop", price: 700, description: "Flavours: Kulfa, Pista, Vanilla, Chocolate, Strawberry, Mango, Caramel", image: "/assets/images/ice-cream-1.webp" },
  { category: "Ice Cream", name: "Special Ice Cream", price: 490, description: "Flavours: Kulfa, Pista, Vanilla, Chocolate, Strawberry, Mango, Caramel", image: "/assets/images/ice-cream-2.webp" },
  { category: "Ice Cream", name: "Family Ice Cream", price: 950, description: "Flavours: Kulfa, Pista, Vanilla, Chocolate, Strawberry, Mango, Caramel", image: "/assets/images/ice-cream-3.webp" },

  // SALAD & RAITA
  { category: "Salad & Raita", name: "Mint Raita", price: 130, image: "/assets/images/salad-and-raita-0.webp" },
  { category: "Salad & Raita", name: "Kachumar Salad", price: 350, image: "/assets/images/salad-and-raita-1.webp" },
  { category: "Salad & Raita", name: "Fruit Salad", price: 650, image: "/assets/images/salad-and-raita-2.webp" },
  { category: "Salad & Raita", name: "Fresh Salad", price: 170, image: "/assets/images/salad-and-raita-3.webp" },
  { category: "Salad & Raita", name: "Russian Salad", price: 600, image: "/assets/images/salad-and-raita-4.webp" },
  { category: "Salad & Raita", name: "Salad Platter", price: 700, image: "/assets/images/salad-and-raita-5.webp" },

  // TANDOOR
  { category: "Tandoor", name: "Sada Naan", price: 50, image: "/assets/images/tandoor-0.webp" },
  { category: "Tandoor", name: "Garlic Naan", price: 90, image: "/assets/images/tandoor-1.webp" },
  { category: "Tandoor", name: "Kalwanji Naan", price: 110, image: "/assets/images/tandoor-2.webp" },
  { category: "Tandoor", name: "Cheese Naan", price: 550, image: "/assets/images/tandoor-3.webp" },
  { category: "Tandoor", name: "Per Head Roti", price: 90, image: "/assets/images/tandoor-4.webp" },
  { category: "Tandoor", name: "Roghni Naan", price: 90, image: "/assets/images/tandoor-5.webp" },
  { category: "Tandoor", name: "Tandori Paratha", price: 220, image: "/assets/images/tandoor-6.webp" },
  { category: "Tandoor", name: "Chicken Cheese Naan", price: 750, image: "/assets/images/tandoor-7.webp" },

  // BBQ
  { category: "BBQ", name: "Chest Piece", price: 450, image: "/assets/images/bbq-0.webp" },
  { category: "BBQ", name: "Leg Piece", price: 450, image: "/assets/images/bbq-1.webp" },
  { category: "BBQ", name: "Pizza Kabab (4 pcs)", price: 1100, image: "/assets/images/bbq-2.webp" },
  { category: "BBQ", name: "Chicken Kabab (4 pcs)", price: 900, image: "/assets/images/bbq-3.webp" },
  { category: "BBQ", name: "Gola Kabab (6 pcs)", price: 950, image: "/assets/images/bbq-4.webp" },
  { category: "BBQ", name: "Hara Bhara Kabab (4 pcs)", price: 900, image: "/assets/images/bbq-5.webp" },
  { category: "BBQ", name: "Reshmi Kabab (4 pcs)", price: 980, image: "/assets/images/bbq-6.webp" },
  { category: "BBQ", name: "Tikka Boti (10 pcs)", price: 900, image: "/assets/images/bbq-7.webp" },
  { category: "BBQ", name: "Malai Boti (10 pcs)", price: 980, image: "/assets/images/bbq-8.webp" },
  { category: "BBQ", name: "Shestao Boti (10 pcs)", price: 1150, image: "/assets/images/bbq-9.webp" },
  { category: "BBQ", name: "Kastori Boti (10 pcs)", price: 1300, image: "/assets/images/bbq-0.webp" },
  { category: "BBQ", name: "Tomato Chilli Boti (10 pcs)", price: 1300, image: "/assets/images/bbq-1.webp" },
  { category: "BBQ", name: "Green Boti (10 pcs)", price: 1150, image: "/assets/images/bbq-2.webp" },
  { category: "BBQ", name: "Qalmi Tikka (6 pcs)", price: 1150, image: "/assets/images/bbq-3.webp" },
  { category: "BBQ", name: "Malai Chargha", price: 1720, image: "/assets/images/bbq-4.webp" },
  { category: "BBQ", name: "Angari Grill Chargha", price: 1720, image: "/assets/images/bbq-5.webp" },

  // BBQ PLATTERS
  { category: "BBQ Platters", name: "Bar.B.Q Platter (2 Person)", price: 1900, image: "/assets/images/bbq-platters-0.webp" },
  { category: "BBQ Platters", name: "Bar.B.Q Platter (4 Person)", price: 4200, image: "/assets/images/bbq-platters-1.webp" },
  { category: "BBQ Platters", name: "Bar.B.Q Platter (6 Person)", price: 6200, image: "/assets/images/bbq-platters-2.webp" },
  { category: "BBQ Platters", name: "Bar.B.Q Family Platter", price: 8500, image: "/assets/images/bbq-platters-3.webp" },
  { category: "BBQ Platters", name: "RFC Special B.B.Q Family Platter Full", price: 6999, image: "/assets/images/bbq-platters-4.webp" },
  { category: "BBQ Platters", name: "RFC Special B.B.Q Family Platter Half", price: 4100, image: "/assets/images/bbq-platters-5.webp" },

  // DAAL & SABZI
  { category: "Daal & Sabzi", name: "RFC Special Shahi Daal", price: 650, image: "/assets/images/daal-and-sabzi-0.webp" },
  { category: "Daal & Sabzi", name: "Daal Mash", price: 490, image: "/assets/images/daal-and-sabzi-1.webp" },
  { category: "Daal & Sabzi", name: "Mix Vegetables", price: 490, image: "/assets/images/daal-and-sabzi-2.webp" },
  { category: "Daal & Sabzi", name: "Daal Makhni", price: 590, image: "/assets/images/daal-and-sabzi-3.webp" },

  // MUTTON KARAHI (Half/Full)
  { category: "Mutton Karahi", name: "RFC Special Mutton Karahi", prices: { Half: 1950, Full: 3850 }, price: 1950, image: "/assets/images/mutton-karahi-0.webp" },
  { category: "Mutton Karahi", name: "Mutton White Karahi", prices: { Half: 1850, Full: 3700 }, price: 1850, image: "/assets/images/mutton-karahi-1.webp" },
  { category: "Mutton Karahi", name: "Mutton Charsi Kar", prices: { Half: 1890, Full: 3800 }, price: 1890, image: "/assets/images/mutton-karahi-2.webp" },
  { category: "Mutton Karahi", name: "Mutton Peshawari Karahi", prices: { Half: 1890, Full: 3800 }, price: 1890, image: "/assets/images/mutton-karahi-3.webp" },
  { category: "Mutton Karahi", name: "Mutton Gujranwala Karahi", prices: { Half: 1890, Full: 3750 }, price: 1890, image: "/assets/images/mutton-karahi-4.webp" },
  { category: "Mutton Karahi", name: "Mutton Black Paper Karahi", prices: { Half: 1890, Full: 3800 }, price: 1890, image: "/assets/images/mutton-karahi-5.webp" },

  // BEEF KARAHI (Half/Full)
  { category: "Beef Karahi", name: "RFC Special Beef Karahi", prices: { Half: 1300, Full: 2350 }, price: 1300, image: "/assets/images/beef-karahi-0.webp" },
  { category: "Beef Karahi", name: "Beef White Karahi", prices: { Half: 1250, Full: 2250 }, price: 1250, image: "/assets/images/beef-karahi-1.webp" },
  { category: "Beef Karahi", name: "Beef Karahi", prices: { Half: 1200, Full: 2200 }, price: 1200, image: "/assets/images/beef-karahi-2.webp" },

  // CHICKEN KARAHI (Half/Full)
  { category: "Chicken Karahi", name: "RFC Special Karahi", prices: { Half: 950, Full: 1750 }, price: 950, image: "/assets/images/chicken-karahi-0.webp" },
  { category: "Chicken Karahi", name: "Chicken White Karahi", prices: { Half: 900, Full: 1699 }, price: 900, image: "/assets/images/chicken-karahi-1.webp" },
  { category: "Chicken Karahi", name: "Chicken Makhni Karahi", prices: { Half: 900, Full: 1699 }, price: 900, image: "/assets/images/chicken-karahi-2.webp" },
  { category: "Chicken Karahi", name: "Chicken Achari Karahi", prices: { Half: 900, Full: 1699 }, price: 900, image: "/assets/images/chicken-karahi-3.webp" },
  { category: "Chicken Karahi", name: "Chicken Peshawari Karahi", prices: { Half: 1250, Full: 2100 }, price: 1250, image: "/assets/images/chicken-karahi-4.webp" },
  { category: "Chicken Karahi", name: "Chicken Black Pepper Karahi", prices: { Half: 1000, Full: 2000 }, price: 1000, image: "/assets/images/chicken-karahi-5.webp" },
  { category: "Chicken Karahi", name: "Gujranwala Chicken Karahi", prices: { Half: 1000, Full: 2000 }, price: 1000, image: "/assets/images/chicken-karahi-6.webp" },

  // HANDI (Full)
  { category: "Handi", name: "RFC Special Handi", price: 1200, image: "/assets/images/handi-0.webp" },
  { category: "Handi", name: "Makhni Handi", price: 1100, image: "/assets/images/handi-1.webp" },
  { category: "Handi", name: "Achari Handi", price: 1100, image: "/assets/images/handi-2.webp" },
  { category: "Handi", name: "Chicken Ginger Handi", price: 1100, image: "/assets/images/handi-3.webp" },
  { category: "Handi", name: "Green Chilli Lemon Handi", price: 1100, image: "/assets/images/handi-4.webp" },
  { category: "Handi", name: "Hari Mirch Handi", price: 1100, image: "/assets/images/handi-5.webp" },
  { category: "Handi", name: "Kabab Masala", price: 1200, image: "/assets/images/handi-6.webp" },
  { category: "Handi", name: "Madrasi Handi", price: 1200, image: "/assets/images/handi-7.webp" },
  { category: "Handi", name: "Chicken Bharta", price: 1200, image: "/assets/images/handi-8.webp" },
  { category: "Handi", name: "Chicken White Jelfezi", price: 1200, image: "/assets/images/handi-9.webp" },
  { category: "Handi", name: "Chicken Jalfrezi", price: 1100, image: "/assets/images/handi-0.webp" },
  { category: "Handi", name: "Shanjahani Handi", price: 1300, image: "/assets/images/handi-1.webp" },
  { category: "Handi", name: "Murgh Makhani Handi", price: 1300, image: "/assets/images/handi-2.webp" },

  // SPECIAL GREVY
  { category: "Special Grevy", name: "RFC Special Grevy", price: 850, image: "/assets/images/special-grevy-0.webp" },
  { category: "Special Grevy", name: "Chicken Chowmein", price: 850, image: "/assets/images/special-grevy-1.webp" },
  { category: "Special Grevy", name: "Chicken Garlic", price: 750, image: "/assets/images/special-grevy-2.webp" },
  { category: "Special Grevy", name: "Chicken Manchurian", price: 800, image: "/assets/images/special-grevy-3.webp" },
  { category: "Special Grevy", name: "Sweet & Sour Chicken", price: 800, image: "/assets/images/special-grevy-4.webp" },
  { category: "Special Grevy", name: "Chicken Chilli Dry", price: 800, image: "/assets/images/special-grevy-5.webp" },

  // CHINESE RICE
  { category: "Chinese Rice", name: "Egg Fried Rice", price: 800, image: "/assets/images/chinese-rice-0.webp" },
  { category: "Chinese Rice", name: "Vegetable Rice", price: 800, image: "/assets/images/chinese-rice-1.webp" },
  { category: "Chinese Rice", name: "Chicken Fried Rice", price: 850, image: "/assets/images/chinese-rice-2.webp" },
  { category: "Chinese Rice", name: "Chicken Masala Rice", price: 850, image: "/assets/images/chinese-rice-3.webp" },
  { category: "Chinese Rice", name: "RFC Special Rice", price: 890, image: "/assets/images/chinese-rice-4.webp" },
  { category: "Chinese Rice", name: "Chicken Shashilik Rice", price: 930, image: "/assets/images/chinese-rice-5.webp" },

  // SWEETS
  { category: "Sweets", name: "Special Kheer", price: 300, image: "/assets/images/sweets-0.webp" },

  // PASTAS
  { category: "Pastas", name: "Italian Pasta", price: 1300, image: "/assets/images/pastas-0.webp" },
  { category: "Pastas", name: "Alfredo Pasta", price: 1300, image: "/assets/images/pastas-1.webp" },
  { category: "Pastas", name: "Cheesy Pasta", prices: { Half: 570, Full: 1100 }, price: 570, image: "/assets/images/pastas-2.webp" },
  { category: "Pastas", name: "Crunchy Pasta", prices: { Half: 550, Full: 1100 }, price: 550, image: "/assets/images/pastas-3.webp" },
  { category: "Pastas", name: "Creamy Pasta", prices: { Half: 570, Full: 1100 }, price: 570, image: "/assets/images/pastas-4.webp" },
  { category: "Pastas", name: "Pizza Pasta", prices: { Half: 550, Full: 1100 }, price: 550, image: "/assets/images/pastas-5.webp" },

  // PULAO & BIRYANI
  { category: "Pulao & Biryani", name: "Chicken Kabab Pulao", price: 900, image: "/assets/images/pulao-and-biryani-0.webp" },
  { category: "Pulao & Biryani", name: "Afghani Pulao", price: 1250, image: "/assets/images/pulao-and-biryani-1.webp" },
  { category: "Pulao & Biryani", name: "Beef Pulao", price: 1100, image: "/assets/images/pulao-and-biryani-2.webp" },
  { category: "Pulao & Biryani", name: "Chicken Pulao", price: 900, image: "/assets/images/pulao-and-biryani-3.webp" },
  { category: "Pulao & Biryani", name: "Chicken Biryani", price: 800, image: "/assets/images/pulao-and-biryani-4.webp" },
  { category: "Pulao & Biryani", name: "Savour Pulao", price: 450, image: "/assets/images/pulao-and-biryani-5.webp" },

  // SOUPS (Half/Full)
  { category: "Soups", name: "RFC Special Soup", prices: { Half: 650, Full: 1100 }, price: 650, image: "/assets/images/soups-0.webp" },
  { category: "Soups", name: "Hot & Sour Soup", prices: { Half: 550, Full: 1000 }, price: 550, image: "/assets/images/soups-1.webp" },
  { category: "Soups", name: "Chicken Corn Soup", prices: { Half: 500, Full: 1000 }, price: 500, image: "/assets/images/soups-2.webp" },
  { category: "Soups", name: "RFC Motton Soup", prices: { Half: 900, Full: 1800 }, price: 900, image: "/assets/images/soups-3.webp" },
  { category: "Soups", name: "Fish Cracker", prices: { Half: 300, Full: 600 }, price: 300, image: "/assets/images/soups-4.webp" },

  // PRATHA ROLL
  { category: "Pratha Roll", name: "Chicken Pratha Roll", price: 320, image: "/assets/images/pratha-roll-0.webp" },
  { category: "Pratha Roll", name: "Chicken Cheese Pratha Roll", price: 370, image: "/assets/images/pratha-roll-1.webp" },
  { category: "Pratha Roll", name: "Zinger Pratha Roll", price: 340, image: "/assets/images/pratha-roll-2.webp" },
  { category: "Pratha Roll", name: "Zinger Cheese Pratha Roll", price: 390, image: "/assets/images/pratha-roll-3.webp" },
  { category: "Pratha Roll", name: "Kabab Pratha Roll", price: 450, image: "/assets/images/pratha-roll-4.webp" },
  { category: "Pratha Roll", name: "RFC Special Pratha Roll", price: 500, image: "/assets/images/pratha-roll-5.webp" },

  // RFC FRIES (Half/Full)
  { category: "Fries", name: "Loaded Fries", price: 750, image: "/assets/images/fries-0.webp" },
  { category: "Fries", name: "Pizza Fries", prices: { Half: 500, Full: 800 }, price: 500, image: "/assets/images/fries-1.webp" },
  { category: "Fries", name: "Simple Fries", prices: { Half: 300, Full: 500 }, price: 300, image: "/assets/images/fries-2.webp" },
  { category: "Fries", name: "Crunchy Fries", prices: { Half: 400, Full: 800 }, price: 400, image: "/assets/images/fries-3.webp" },

  // RFC WRAP
  { category: "Wrap", name: "Chicken Wrap", price: 400, image: "/assets/images/wrap-0.webp" },
  { category: "Wrap", name: "Chicken Cheese Wrap", price: 470, image: "/assets/images/wrap-1.webp" },
  { category: "Wrap", name: "Zinger Wrap", price: 450, image: "/assets/images/wrap-2.webp" },
  { category: "Wrap", name: "Zinger Cheese Wrap", price: 520, image: "/assets/images/wrap-3.webp" },
  { category: "Wrap", name: "Malai Boti Wrap", price: 600, image: "/assets/images/wrap-4.webp" },
  { category: "Wrap", name: "RFC Special Wrap", price: 700, image: "/assets/images/wrap-5.webp" },

  // SANDWICH
  { category: "Sandwich", name: "Club Sandwich", price: 600, image: "/assets/images/sandwich-0.webp" },
  { category: "Sandwich", name: "RFC Special Sandwich", price: 700, image: "/assets/images/sandwich-1.webp" },
  { category: "Sandwich", name: "Grill Sandwich", price: 700, image: "/assets/images/sandwich-2.webp" },
  { category: "Sandwich", name: "Tikka Sandwich", price: 600, image: "/assets/images/sandwich-3.webp" },

  // RFC SPECIAL ITEMS
  { category: "Special Items", name: "4 pc Kabab Bites", price: 830, image: "/assets/images/special-items-0.webp" },
  { category: "Special Items", name: "Chicken Cheese Stick", price: 850, image: "/assets/images/special-items-1.webp" },
  { category: "Special Items", name: "Turkish Doner", price: 800, image: "/assets/images/special-items-2.webp" },
  { category: "Special Items", name: "Pizza Pratha", price: 700, image: "/assets/images/special-items-3.webp" },

  // RFC ROASTED PLATTER
  { category: "Roasted Platter", name: "RFC Roasted Platter", description: "4 Pc Kabab Bite, 4 Pc Wings, Fries, Dip Sauce", price: 1300, image: "/assets/images/roasted-platter-0.webp" },

  // WINGS & NUGGETS
  { category: "Wings & Nuggets", name: "Hot Wings (10 pcs)", price: 650, image: "/assets/images/wings-and-nuggets-0.webp" },
  { category: "Wings & Nuggets", name: "Nugget (10 pcs)", price: 600, image: "/assets/images/wings-and-nuggets-1.webp" },
  { category: "Wings & Nuggets", name: "Oven Baked Wings (10 pcs)", price: 750, image: "/assets/images/wings-and-nuggets-2.webp" },
  { category: "Wings & Nuggets", name: "Honey Wings (10 pcs)", price: 800, image: "/assets/images/wings-and-nuggets-3.webp" },

  // RFC BURGERS
  { category: "Burgers", name: "Jambo Zinger Burger", price: 340, image: "/assets/images/burgers-0.webp" },
  { category: "Burgers", name: "Chicken Petty Burger", price: 290, image: "/assets/images/burgers-1.webp" },
  { category: "Burgers", name: "Sizzler Burger", price: 370, image: "/assets/images/burgers-2.webp" },
  { category: "Burgers", name: "Zinger Cheese Burger", price: 390, image: "/assets/images/burgers-3.webp" },
  { category: "Burgers", name: "RFC Special Burger", price: 590, image: "/assets/images/burgers-4.webp" },
  { category: "Burgers", name: "RFC Special Grill Burger", price: 600, image: "/assets/images/burgers-5.webp" },
  { category: "Burgers", name: "Pizza Burger", price: 600, image: "/assets/images/burgers-6.webp" },
  { category: "Burgers", name: "RFC Special Mighty Burger", price: 630, image: "/assets/images/burgers-7.webp" },
  { category: "Burgers", name: "RFC Special Stacker Burger", price: 640, image: "/assets/images/burgers-8.webp" },

  // SHAWARMA
  { category: "Shawarma", name: "Chicken Shawarma", price: 320, image: "/assets/images/shawarma-0.webp" },
  { category: "Shawarma", name: "Chicken Cheese Shawarma", price: 390, image: "/assets/images/shawarma-1.webp" },
  { category: "Shawarma", name: "Zinger Shawarma", price: 340, image: "/assets/images/shawarma-2.webp" },
  { category: "Shawarma", name: "Zinger Cheese Shawarma", price: 390, image: "/assets/images/shawarma-3.webp" },
  { category: "Shawarma", name: "Platter Shawarma", price: 700, image: "/assets/images/shawarma-4.webp" },
  { category: "Shawarma", name: "RFC Turkish Platter", price: 800, image: "/assets/images/shawarma-5.webp" },

  // REGULAR PIZZA (Small/Medium/Large/Family)
  { category: "Regular Pizza", name: "Chicken Tikka", prices: { Small: 700, Medium: 1300, Large: 1700, Family: 2450 }, price: 700, image: "/assets/images/regular-pizza-0.webp" },
  { category: "Regular Pizza", name: "Chicken Fajita", prices: { Small: 700, Medium: 1300, Large: 1700, Family: 2450 }, price: 700, image: "/assets/images/regular-pizza-1.webp" },
  { category: "Regular Pizza", name: "Vegetable Pizza", prices: { Small: 700, Medium: 1300, Large: 1700, Family: 2450 }, price: 700, image: "/assets/images/regular-pizza-2.webp" },
  { category: "Regular Pizza", name: "Hot & Spicy", prices: { Small: 700, Medium: 1300, Large: 1700, Family: 2450 }, price: 700, image: "/assets/images/regular-pizza-3.webp" },
  { category: "Regular Pizza", name: "Chicken Supreme", prices: { Small: 700, Medium: 1300, Large: 1700, Family: 2450 }, price: 700, image: "/assets/images/regular-pizza-4.webp" },
  { category: "Regular Pizza", name: "Chicken Achari", prices: { Small: 700, Medium: 1300, Large: 1700, Family: 2450 }, price: 700, image: "/assets/images/regular-pizza-5.webp" },
  { category: "Regular Pizza", name: "Chicken Tandori", prices: { Small: 700, Medium: 1300, Large: 1700, Family: 2450 }, price: 700, image: "/assets/images/regular-pizza-6.webp" },

  // SPECIAL PIZZA
  { category: "Special Pizza", name: "Special Malai Boti Pizza", prices: { Small: 800, Medium: 1350, Large: 1800, Family: 2700 }, price: 800, image: "/assets/images/special-pizza-0.webp" },
  { category: "Special Pizza", name: "Cheese Lover", prices: { Small: 800, Medium: 1350, Large: 1800, Family: 2700 }, price: 800, image: "/assets/images/special-pizza-1.webp" },
  { category: "Special Pizza", name: "Bar.B.Q Lovers", prices: { Small: 800, Medium: 1350, Large: 1800, Family: 2700 }, price: 800, image: "/assets/images/special-pizza-2.webp" },

  // RFC SPECIAL PIZZA
  { category: "RFC Special Pizza", name: "Special Kabab Crust", prices: { Small: 850, Medium: 1450, Large: 1850, Family: 2800 }, price: 850, image: "/assets/images/rfc-special-pizza-0.webp" },
  { category: "RFC Special Pizza", name: "Special Crown Crust", prices: { Small: 850, Medium: 1450, Large: 1850, Family: 2800 }, price: 850, image: "/assets/images/rfc-special-pizza-1.webp" },
  { category: "RFC Special Pizza", name: "Special Behari Kabab", prices: { Small: 850, Medium: 1450, Large: 1850, Family: 2800 }, price: 850, image: "/assets/images/rfc-special-pizza-2.webp" },
  { category: "RFC Special Pizza", name: "RFC Special Pizza", prices: { Small: 850, Medium: 1450, Large: 1850, Family: 2800 }, price: 850, image: "/assets/images/rfc-special-pizza-3.webp" },
  { category: "RFC Special Pizza", name: "RFC Double Flavour Pizza", prices: { Small: 850, Medium: 1450, Large: 1850, Family: 2800 }, price: 850, image: "/assets/images/rfc-special-pizza-4.webp" },
  { category: "RFC Special Pizza", name: "Special Donner", prices: { Small: 850, Medium: 1450, Large: 1850, Family: 2800 }, price: 850, image: "/assets/images/rfc-special-pizza-5.webp" },

  // RFC NEW PIZZA (Medium 1700, Large 2200, Family 3000)
  { category: "RFC New Pizza", name: "Spamm Cheese", prices: { Medium: 1700, Large: 2200, Family: 3000 }, price: 1700, image: "/assets/images/rfc-new-pizza-0.webp" },
  { category: "RFC New Pizza", name: "Fried Zinger", prices: { Medium: 1700, Large: 2200, Family: 3000 }, price: 1700, image: "/assets/images/rfc-new-pizza-1.webp" },
  { category: "RFC New Pizza", name: "Calzone Chunks", prices: { Medium: 1700, Large: 2200, Family: 3000 }, price: 1700, image: "/assets/images/rfc-new-pizza-2.webp" },
  { category: "RFC New Pizza", name: "RFC King Pizza", prices: { Medium: 1700, Large: 2200, Family: 3000 }, price: 1700, image: "/assets/images/rfc-new-pizza-3.webp" },
  { category: "RFC New Pizza", name: "RFC Lazania Pizza", prices: { Medium: 1700, Large: 2200, Family: 3000 }, price: 1700, image: "/assets/images/rfc-new-pizza-4.webp" },
  { category: "RFC New Pizza", name: "RFC Grill Pizza", prices: { Medium: 1700, Large: 2200, Family: 3000 }, price: 1700, image: "/assets/images/rfc-new-pizza-5.webp" }
];

export const fastFoodDeals = [
  { name: "Deal 1", items: "1 Chicken Burger, 1 Reg Fries, 1 TinPack", price: 640, image: images.fastfood },
  { name: "Deal 2", items: "2 Student Burger, 2 Reg Cold Drink", price: 820, image: images.fastfood },
  { name: "Deal 3", items: "250g Chicken, Rotti, Small Water, 1 Reg Drink", price: 900, image: images.karahi },
  { name: "Deal 4", items: "250g Mutton, Rotti, Small Water, 1 Reg Drink", price: 1400, image: images.karahi },
  { name: "Deal 5", items: "5 Zinger Burger, 1.5Ltr Coke", price: 1900, image: images.fastfood },
  { name: "Deal 6", items: "1 Reg Small Pizza, 5pc Hot Wings, 1Ltr Coke", price: 1200, image: images.pizza },
  { name: "Deal 7", items: "10pc Hot Wings, 10pc Nuggets, 1 Reg Fries, 1.5Ltr Coke", price: 1700, image: images.fastfood },
  { name: "Deal 8", items: "10 Zinger Burger, 1.5Ltr Coke", price: 3600, image: images.fastfood },
  { name: "Deal 9", items: "1 RFC Burger, 1 TinPack", price: 660, image: images.fastfood },
  { name: "Deal 10", items: "1 Reg Large Pizza, 2 Zinger, 5 Wings, 1.5Ltr Coke", price: 2950, image: images.pizza },
  { name: "Deal 11", items: "2 Zinger Burger, 5 Wing, 5 Nuggets, 1 Family Fries, 1.5Ltr Coke", price: 2000, image: images.fastfood },
  { name: "Deal 12", items: "1 Reg Medium Pizza, 5 Nuggets, 5 Wings, 1 Reg Fries, 1.5Ltr Coke", price: 2400, image: images.pizza }
];

export const pizzaDeals = [
  { name: "Pizza Deal 1", items: "2 Small Chicken Tikka Pizza + 1.5Ltr", price: 1550, image: images.pizza },
  { name: "Pizza Deal 2", items: "2 Medium Chicken Tikka Pizza + 1.5Ltr", price: 2750, image: images.pizza },
  { name: "Pizza Deal 3", items: "1 Small Chicken Tikka + 1 Small Malai Boti + 1.5Ltr", price: 1650, image: images.pizza },
  { name: "Pizza Deal 4", items: "1 Medium Chicken Tikka + 1 Medium Malai Boti + 1.5Ltr", price: 2850, image: images.pizza },
  { name: "Pizza Deal 5", items: "2 Large Chicken Tikka Pizza + 1.5Ltr", price: 3550, image: images.pizza },
  { name: "Pizza Deal 6", items: "1 Large Chicken Tikka + 1 Large Malai Boti + 1.5Ltr", price: 3650, image: images.pizza },
  { name: "Pizza Deal 7", items: "2 XL Chicken Tikka Pizza + 1.5Ltr", price: 4950, image: images.pizza },
  { name: "Pizza Deal 8", items: "1 XL Chicken Tikka + 1 XL Malai Boti + 1.5Ltr", price: 5100, image: images.pizza },
  { name: "Pizza Deal 9", items: "1 Large Chicken Tikka + 1 Medium Malai Boti + 1.5Ltr", price: 3250, image: images.pizza },
  { name: "Pizza Deal 10", items: "1 XL Chicken Tikka + 1 Large Malai Boti + 1.5Ltr", price: 4300, image: images.pizza }
];

export const familyDeal = {
  name: "RFC Family Deal",
  items: "1 Large Special Pizza, 4 Zinger Burger, 10 Pcs Hot Wings, 10 Pcs Nuggets, 1 Family Fries, 1 Full Loaded Fries, 1 Half Crunchy Pasta, 2 (1.5 Ltr Coke)",
  price: 6399,
  image: images.pizza
};
