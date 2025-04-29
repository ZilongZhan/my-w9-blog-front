import { PostDto } from "./types";

export const fiveMinuteMicrowaveMugCakePostDto: PostDto = {
  _id: "1",
  title: "5-Minute Microwave Mug Cake",
  imageUrl: "https://example.com/mug-cake.jpg",
  imageAlt: "A chocolate mug cake fresh out of the microwave",
  tags: ["dessert", "quick", "microwave"],
  content:
    "Mix flour, sugar, cocoa powder, and milk in a mug. Microwave for 1-2 minutes. Enjoy your instant cake!",
  publishDate: "2025-04-25T10:00:00Z",
  author: "John Doe",
};

export const microwaveScrambledEggsPostDto: PostDto = {
  _id: "2",
  title: "Microwave Scrambled Eggs",
  imageUrl: "https://example.com/microwave-eggs.jpg",
  imageAlt: "Scrambled eggs cooked in a bowl using a microwave",
  tags: ["breakfast", "eggs", "microwave"],
  content:
    "Whisk eggs with a splash of milk, season with salt and pepper, and microwave in 30-second bursts, stirring in between.",
  publishDate: "2025-04-24T08:30:00Z",
  author: "John Doe",
};

export const microwaveMacAndCheesePostDto: PostDto = {
  _id: "3",
  title: "Microwave Mac and Cheese",
  imageUrl: "https://example.com/microwave-mac-cheese.jpg",
  imageAlt: "Creamy mac and cheese in a bowl",
  tags: ["lunch", "comfort food", "microwave"],
  content:
    "Combine macaroni, water, and salt in a mug. Microwave until pasta is cooked. Stir in cheese and a splash of milk, microwave again until creamy.",
  publishDate: "2025-04-23T12:00:00Z",
  author: "John Doe",
};

export const costillitasLekuePostDto: PostDto = {
  _id: "123abc",
  publishDate: "2025-04-27T12:00:00Z",
  title: "Pork ribs with green pepper and spring garlic",
  author: "Newtown Guy",
  content:
    "Well, look, you take some pork ribs from Condis, a green pepper, and spring garlic. Put it in the green thing and microwave on full power for 8 minutes. And that's fucking it. Don't forget to season to taste.",
  imageUrl: "http://www.lekue.cat/costillitas.png",
  imageAlt:
    "Close-up of pork ribs with green pepper and spring garlic in the Lekué pot",
  tags: ["lekue", "microwave"],
};

export const microwaveBakedPotatoPostDto: PostDto = {
  _id: "4",
  title: "Microwave Baked Potato",
  imageUrl: "https://example.com/baked-potato.jpg",
  imageAlt: "A fluffy baked potato split open with butter melting inside",
  tags: ["side dish", "vegetarian", "microwave"],
  content:
    "Pierce a potato several times with a fork. Microwave on high for 5-6 minutes, flipping halfway through. Add toppings as desired.",
  publishDate: "2025-04-28T18:00:00Z",
  author: "Jane Smith",
};

export const microwaveSteamedBroccoliPostDto: PostDto = {
  _id: "5",
  title: "Microwave Steamed Broccoli",
  imageUrl: "https://example.com/steamed-broccoli.jpg",
  imageAlt: "Bright green steamed broccoli in a bowl",
  tags: ["vegetable", "healthy", "microwave"],
  content:
    "Place broccoli florets in a microwave-safe bowl with a splash of water. Cover and microwave for 3-4 minutes. Season to taste.",
  publishDate: "2025-04-28T19:00:00Z",
  author: "Jane Smith",
};

export const microwaveOmelettePostDto: PostDto = {
  _id: "6",
  title: "Microwave Omelette in a Mug",
  imageUrl: "https://example.com/mug-omelette.jpg",
  imageAlt: "A fluffy omelette in a mug with diced vegetables",
  tags: ["breakfast", "protein", "microwave"],
  content:
    "Beat two eggs with chopped veggies, cheese, and seasoning in a mug. Microwave for 1-2 minutes until set.",
  publishDate: "2025-04-29T07:30:00Z",
  author: "John Doe",
};

export const microwaveCinnamonApplesPostDto: PostDto = {
  _id: "7",
  title: "Microwave Cinnamon Apples",
  imageUrl: "https://example.com/cinnamon-apples.jpg",
  imageAlt: "Warm sliced apples with cinnamon in a bowl",
  tags: ["dessert", "healthy", "microwave"],
  content:
    "Slice apples and toss with cinnamon and a bit of sugar. Microwave for 2-3 minutes until tender. Great as a snack or dessert!",
  publishDate: "2025-04-28T15:00:00Z",
  author: "Jane Smith",
};

export const microwaveQuesadillaPostDto: PostDto = {
  _id: "8",
  title: "Microwave Quesadilla",
  imageUrl: "https://example.com/quesadilla.jpg",
  imageAlt: "Cheesy quesadilla cut into wedges on a plate",
  tags: ["lunch", "snack", "microwave"],
  content:
    "Place cheese and fillings between two tortillas. Microwave for 1-2 minutes, then slice and enjoy with salsa.",
  publishDate: "2025-04-26T11:00:00Z",
  author: "John Doe",
};

export const microwaveRiceBowlPostDto: PostDto = {
  _id: "9",
  title: "Microwave Rice Bowl",
  imageUrl: "https://example.com/rice-bowl.jpg",
  imageAlt: "A rice bowl with veggies and sauce on top",
  tags: ["dinner", "vegetarian", "microwave"],
  content:
    "Mix cooked rice with veggies and your favorite sauce in a bowl. Microwave for 1-2 minutes until heated through.",
  publishDate: "2025-04-29T12:00:00Z",
  author: "Jane Smith",
};

export const microwaveRecipiesPostsDto = [
  fiveMinuteMicrowaveMugCakePostDto,
  microwaveScrambledEggsPostDto,
  microwaveMacAndCheesePostDto,
  costillitasLekuePostDto,
  microwaveBakedPotatoPostDto,
  microwaveSteamedBroccoliPostDto,
  microwaveOmelettePostDto,
  microwaveCinnamonApplesPostDto,
  microwaveQuesadillaPostDto,
  microwaveRiceBowlPostDto,
];
