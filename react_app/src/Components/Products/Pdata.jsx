const data=[
  {
    "id": 1,
    "title": "Vanilla Bean Delight",
    "price": 4.99,
    "description": "Classic vanilla ice cream made with real vanilla beans and creamy milk.",
    "category": "ice cream",
    "image": "https://spicelandwholesale.com/cdn/shop/articles/The_Sweet_Delight_of_Creamy_Vanilla-Filled_Chocolate_Eggs_c560c939-d447-42db-bd4d-b8b15b5d984b_1024x1024.jpg?v=1744034971",
    "rating": { "rate": 4.5, "count": 120 }
  },
  {
    "id": 2,
    "title": "Chocolate Fudge Fantasy",
    "price": 5.49,
    "description": "Rich chocolate ice cream swirled with gooey fudge and chocolate chips.",
    "category": "ice cream",
    "image": "https://www.thecookierookie.com/wp-content/uploads/2018/12/fantasy-fudge-recipe-how-to-5.png",
    "rating": { "rate": 4.8, "count": 220 }
  },
  {
    "id": 3,
    "title": "Strawberry Swirl Dream",
    "price": 4.75,
    "description": "Sweet strawberry ice cream with swirls of strawberry syrup and chunks of fruit.",
    "category": "ice cream",
    "image": "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/k%2FEdit%2F2024-04-dr-bombay-strawberry-cream-dream%2Fdr-bombay-strawberry-cream-dream-9069-cropped",
    "rating": { "rate": 4.2, "count": 150 }
  },
  {
    "id": 4,
    "title": "Mint Choco Crunch",
    "price": 5.25,
    "description": "Refreshing mint ice cream with chocolate chips and a crunchy cookie crumble.",
    "category": "ice cream",
    "image": "https://fitcrunch.com/cdn/shop/files/6_MCC_Wafer_45g_Lifestyle.jpg?v=1713459912",
    "rating": { "rate": 4.6, "count": 180 }
  },
  {
    "id": 5,
    "title": "Salted Caramel Bliss",
    "price": 5.75,
    "description": "Creamy caramel ice cream with swirls of salted caramel and caramel bits.",
    "category": "ice cream",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc5mBB8D-Rdsndjwmv0R7QAnn_OTytR4SHiA&s",
    "rating": { "rate": 4.7, "count": 200 }
  },
  {
    "id": 6,
    "title": "Cookie Dough Explosion",
    "price": 6.25,
    "description": "Vanilla ice cream loaded with chunks of cookie dough and chocolate chips.",
    "category": "ice cream",
    "image": "https://preview.redd.it/vegan-chocolate-chip-cookie-dough-v0-156t1fx1a2od1.jpg?width=640&crop=smart&auto=webp&s=9e4aded63aa1ab6d31ebf54244e5d86b4f242295",
    "rating": { "rate": 4.9, "count": 250 }
  },
  {
    "id": 7,
    "title": "Peanut Butter Swirl",
    "price": 5.65,
    "description": "Creamy peanut butter ice cream with ribbons of rich chocolate fudge.",
    "category": "ice cream",
    "image": "https://tastythriftytimely.com/wp-content/uploads/2023/01/Peanut-Butter-Swirl-Nice-Cream-Featured.jpg",
    "rating": { "rate": 4.4, "count": 160 }
  },
  {
    "id": 8,
    "title": "Coffee Mocha Buzz",
    "price": 5.95,
    "description": "Bold coffee-flavored ice cream with a mocha fudge swirl.",
    "category": "ice cream",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmzUr_BgDVXEYs51V2TxQG-tcXIokq7KLLrQ&s",
    "rating": { "rate": 4.3, "count": 140 }
  },
  {
    "id": 9,
    "title": "Butter Pecan Classic",
    "price": 5.85,
    "description": "Creamy butter ice cream loaded with roasted pecans.",
    "category": "ice cream",
    "image": "https://parade.com/.image/t_share/MTkwNTc5Mjc1NDcyNzc1MDM2/butter-pecan-brittle-icecream.jpg",
    "rating": { "rate": 4.6, "count": 175 }
  },
  {
    "id": 10,
    "title": "Black Raspberry Chip",
    "price": 6.10,
    "description": "Tangy black raspberry ice cream with rich chocolate chips.",
    "category": "ice cream",
    "image": "https://img.freepik.com/free-photo/blueberry-ice-cream-scoop-black-slate-background_123827-21406.jpg?semt=ais_hybrid&w=740",
    "rating": { "rate": 4.5, "count": 190 }
  },
  {
    "id": 11,
    "title": "Birthday Cake Bash",
    "price": 6.00,
    "description": "Vanilla cake batter ice cream with sprinkles and frosting swirls.",
    "category": "ice cream",
    "image": "https://cakestry15.com/cdn/shop/files/Boss_Baby_Celebration_Cake_first_birthday_cake_for_a_boy.jpg?v=1743230152&width=533",
    "rating": { "rate": 4.7, "count": 210 }
  },
  {
    "id": 12,
    "title": "Rocky Road Adventure",
    "price": 5.95,
    "description": "Chocolate ice cream with marshmallows, almonds, and chocolate chunks.",
    "category": "ice cream",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxiOWc_o1YzaSx-Z_vjBaWXIsqE2V-qoqB2Q&s",
    "rating": { "rate": 4.8, "count": 230 }
  },
  {
    "id": 13,
    "title": "Pistachio Pleasure",
    "price": 6.50,
    "description": "Pistachio-flavored ice cream packed with roasted pistachio nuts.",
    "category": "ice cream",
    "image": "https://thumbs.dreamstime.com/b/pistachio-pleasure-noir-style-experience-pistachio-pleasure-noir-style-slice-pleasure-black-background-pistachio-297562289.jpg",
    "rating": { "rate": 4.4, "count": 130 }
  },
  {
    "id": 14,
    "title": "Lemon Zest Sorbet",
    "price": 4.99,
    "description": "Refreshing dairy-free lemon sorbet with natural zest.",
    "category": "ice cream",
    "image": "https://theviewfromgreatisland.com/wp-content/uploads/2013/07/lemon-ice-cream-1.jpg",
    "rating": { "rate": 4.3, "count": 125 }
  },
  {
    "id": 15,
    "title": "Tropical Mango Magic",
    "price": 5.30,
    "description": "Creamy mango ice cream with chunks of ripe mango.",
    "category": "ice cream",
    "image": "https://www.glutenfreestories.com/wp-content/uploads/2025/03/creamy-mango-smoothie-recipe.jpg",
    "rating": { "rate": 4.6, "count": 160 }
  },
  {
    "id": 16,
    "title": "Blueberry Cheesecake Crumble",
    "price": 6.10,
    "description": "Cheesecake-flavored ice cream with blueberry swirls and graham cracker crumbles.",
    "category": "ice cream",
    "image": "https://www.homecookingadventure.com/wp-content/uploads/2023/06/blueberry-cheesecake-main1-1.webp",
    "rating": { "rate": 4.7, "count": 195 }
  },
  {
    "id": 17,
    "title": "Coconut Cream Island",
    "price": 5.90,
    "description": "Smooth coconut ice cream with shredded coconut bits.",
    "category": "ice cream",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJS91a813ID0fbSYAVyPtwWQA5-XHi3McT-g&s",
    "rating": { "rate": 4.5, "count": 170 }
  },
  {
    "id": 18,
    "title": "Hazelnut Crunch Supreme",
    "price": 6.45,
    "description": "Hazelnut ice cream with chocolate hazelnut swirls and crunchy nuts.",
    "category": "ice cream",
    "image": "https://cdn.trendhunterstatic.com/thumbs/524/choco-nut-crunch-supreme.jpeg?auto=webp",
    "rating": { "rate": 4.8, "count": 210 }
  },
  {
    "id": 19,
    "title": "Banana Split Scoop",
    "price": 5.85,
    "description": "Banana ice cream with chocolate, strawberry, and pineapple ribbons.",
    "category": "ice cream",
    "image": "https://m.media-amazon.com/images/I/71B0lzS6a2L._AC_UF894,1000_QL80_.jpg",
    "rating": { "rate": 4.4, "count": 155 }
  },
  {
    "id": 20,
    "title": "Cherry Jubilee",
    "price": 6.15,
    "description": "Sweet cherry ice cream with chunks of dark cherries and chocolate flakes.",
    "category": "ice cream",
    "image": "https://res.cloudinary.com/htt8g4cd/images/f_auto,q_auto/v1730840396/wp/02_23_Cherries_Jubilee_HERO_Jenny_Huang_960x640/02_23_Cherries_Jubilee_HERO_Jenny_Huang_960x640.jpg?_i=AA",
    "rating": { "rate": 4.6, "count": 185 }
  },
  {
    "id": 21,
    "title": "Almond Joyful",
    "price": 5.95,
    "description": "Coconut and almond ice cream with chocolate drizzle.",
    "category": "ice cream",
    "image": "https://www.hersheyland.com/brands/almond-joy-mounds/_jcr_content/root/container/section/col1/section/col1/image.coreimg.jpeg/1705702674718/ajm-cross-section.jpeg",
    "rating": { "rate": 4.5, "count": 160 }
  },
  {
    "id": 22,
    "title": "Cinnamon Roll Swirl",
    "price": 6.10,
    "description": "Vanilla ice cream with cinnamon bun dough and brown sugar ribbons.",
    "category": "ice cream",
    "image": "https://tastecooking.com/wp-content/uploads/2016/01/cinnamon.jpg",
    "rating": { "rate": 4.7, "count": 190 }
  },
  {
    "id": 23,
    "title": "S'mores Campfire Treat",
    "price": 6.30,
    "description": "Chocolate ice cream with graham crackers, marshmallow swirls, and chocolate chunks.",
    "category": "ice cream",
    "image": "https://www.allrecipes.com/thmb/Q1lyq5wPMdlCo-IIK4WFTqbolss=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-recipe-232171-brown-bears-VAT-4x3-6d718d0457fa40b38b8ed1dafe47d1f6.jpg",
    "rating": { "rate": 4.8, "count": 200 }
  },
  {
    "id": 24,
    "title": "Apple Pie à la Mode",
    "price": 6.50,
    "description": "Cinnamon apple ice cream with pie crust chunks and caramel swirl.",
    "category": "ice cream",
    "image": "https://myradkitchen.com/wp-content/uploads/2024/09/Apple-Pie-a-la-Mode-Desserts-My-Rad-Kitchen-0012-480x270.jpg",
    "rating": { "rate": 4.6, "count": 175 }
  }
]
export default data