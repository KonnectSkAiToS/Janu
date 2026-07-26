import { JanuProfile, TimelineEvent, GalleryPhoto, FoodItem, QuizQuestion } from '../types';

// Importing generated images
import heroAuroraImg from '../assets/images/janu_hero_aurora_1785041438991.jpg';
import sweetDelightsImg from '../assets/images/janu_sweet_delights_1785041452098.jpg';
import instaSparkImg from '../assets/images/janu_instagram_story_spark_1785041463653.jpg';
import photoMemoryImg from '../assets/images/janu_photo_memory_1785041473735.jpg';

export interface DreamDestination {
  id: string;
  name: string;
  category: 'place' | 'wonder' | 'spiritual';
  emoji: string;
  description: string;
  kamaleshPromise: string;
}

export const DREAM_DESTINATIONS: DreamDestination[] = [
  {
    id: 'd-1',
    name: 'Time Travel ⏳',
    category: 'wonder',
    emoji: '⏳',
    description: 'Traveling back to 31 Dec 2024 & reliving every single beautiful second with you!',
    kamaleshPromise: 'Kamalesh will hold your hand through every chapter of time!'
  },
  {
    id: 'd-2',
    name: 'The Moon 🌕',
    category: 'wonder',
    emoji: '🌕',
    description: 'Flying to the moon where our love shines brighter than all stars.',
    kamaleshPromise: 'I love you to the moon and back a million times, pondati!'
  },
  {
    id: 'd-3',
    name: 'Ooty 🌲',
    category: 'place',
    emoji: '🌲',
    description: 'Misty hills, tea gardens, and cozy sweater walks with hot tea.',
    kamaleshPromise: 'Our upcoming romantic getaway in Tamil Nadu hill stations!'
  },
  {
    id: 'd-4',
    name: 'Kodaikanal 🌫️',
    category: 'place',
    emoji: '🌫️',
    description: 'Princess of Hill stations with foggy lakes & pine forests.',
    kamaleshPromise: 'Boating on Kodai lake wrapped in one blanket!'
  },
  {
    id: 'd-5',
    name: 'Kerala 🌴',
    category: 'place',
    emoji: '🌴',
    description: 'God’s Own Country — houseboats, green palms & gentle backwaters.',
    kamaleshPromise: 'A peaceful houseboat stay with pure traditional meals!'
  },
  {
    id: 'd-6',
    name: 'Murugan Kovil 🛕',
    category: 'spiritual',
    emoji: '🛕',
    description: 'Sacred blessings at Lord Murugan Temple for our lifelong togetherness.',
    kamaleshPromise: 'Kamalesh & Janu seeking divine blessings hand-in-hand!'
  },
  {
    id: 'd-7',
    name: 'Gushing Waterfalls 🌊',
    category: 'wonder',
    emoji: '🌊',
    description: 'Fresh chilly mountain waterfalls echoing our joy.',
    kamaleshPromise: 'Standing together under cool mist holding you warm.'
  },
  {
    id: 'd-8',
    name: 'Iceland 🧊',
    category: 'place',
    emoji: '🧊',
    description: 'Glaciers, blue lagoons, and Northern Lights in freezing air.',
    kamaleshPromise: 'Kamalesh wrapping you in his coat in cold Iceland!'
  },
  {
    id: 'd-9',
    name: 'Finland ❄️',
    category: 'place',
    emoji: '❄️',
    description: 'Snowy glass igloos, reindeer, and magical Aurora skies.',
    kamaleshPromise: 'Sleeping under glass igloos watching green & purple skies.'
  },
  {
    id: 'd-10',
    name: 'Greenland 🏔️',
    category: 'place',
    emoji: '🏔️',
    description: 'Pure white snow peaks & quiet freezing wonderlands.',
    kamaleshPromise: 'Exploring the coldest ends of the Earth together.'
  },
  {
    id: 'd-11',
    name: 'Paris 🗼',
    category: 'place',
    emoji: '🗼',
    description: 'The City of Love — Eiffel Tower lights glowing for Janu.',
    kamaleshPromise: 'A romantic photo under the glowing Eiffel Tower for my princess!'
  },
  {
    id: 'd-12',
    name: 'Himachal Pradesh 🏔️',
    category: 'place',
    emoji: '🏔️',
    description: 'Manali snow peaks, Shimla valleys, and pine breezes.',
    kamaleshPromise: 'Snowball fights & hot cocoa with my pondati!'
  },
  {
    id: 'd-13',
    name: 'All Cold Places in the World ❄️',
    category: 'wonder',
    emoji: '❄️',
    description: 'Every chilly, snowy, foggy paradise across the globe!',
    kamaleshPromise: 'I promise to keep you warm wherever in the world we travel!'
  }
];

export const JANU_PROFILE: JanuProfile = {
  fullName: "Vaishu Jananni GM",
  nickname: "Janu",
  dob: "27th July 1999",
  birthYear: 1999,
  zodiacSign: "Sagittarius",
  zodiacTamil: "Dhanush Rasi",
  nakshatram: "Uthiradam Nakshatram",
  qualification: "MBA - Marketing & Human Resource Management",
  likedColors: ["Red", "Maroon / Wine", "Violet"],
  heightInfo: "6.2 cm details with grace",
  footwearPreference: "Strictly No Heels! Only Back Strap Sleepers 👟",
  favoriteFlower: "Red Rose 🌹",
  favoriteSky: "Northern Lights (Aurora Borealis) 🌌✨",
  firstTalkDate: "2024-12-31",
  whatsappDate: "2025-10-07",
  firstCallDate: "2025-10-08",
  loveMessage: `Wish you happy birthday 🎉🎂 pondati 💙 enjoy your life be happy your happiness is mine too 💙💓 you are so precious to me 💖 we have lots of memories 😊 leave all bad memories and hold me with you princess 💙 always i love you not in the way you think 💙 I always there for you happy or sad doesn't matter i will be with you ❤️🤌🤗 now a days i am missing you a lot i think worst days of my life 😊💙 waiting for kisses and our kids 😚 once again wish you happy birthday 🎉🎁 Angel princess ammu pattu chlm you are my everything d pondati 😚 💋once again happy birthday 🎉 thanks for everything you give a unforgettable memories ❤️ love you d 🫂`
};

export const KAMALESH_ADDRESS = "East Ham, London E6 2AR 🇬🇧";
export const JANU_ADDRESS = "3/89-11, Rajaji Nagar 1st Cross, Sipcot 1, Bedarapalli, Hosur, Tamil Nadu 635126 🇮🇳";

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'first-talk',
    date: '31st Dec 2024',
    rawDate: '2024-12-31T23:50:00',
    title: 'The First Spark on Instagram 💬',
    subtitle: 'Kamalesh replied to Janu’s Story',
    description: '31st Dec 2024 — I replied to your story in Instagram. I still remember that day! After that it’s been years and still we are together ❤️',
    icon: 'Instagram',
    badge: '31 Dec 2024'
  },
  {
    id: 'whatsapp-number',
    date: '7th Oct 2025',
    rawDate: '2025-10-07T18:00:00',
    title: 'Got Your WhatsApp Number 📲',
    subtitle: 'Stepping Closer Together',
    description: 'After months of beautiful messages on Instagram, getting your phone number brought Kamalesh and Janu even closer together!',
    icon: 'MessageSquare',
    badge: 'Milestone'
  },
  {
    id: 'first-call',
    date: '8th Oct 2025',
    rawDate: '2025-10-08T21:30:00',
    title: 'First Voice Call 📞❤️',
    subtitle: 'Hearing Your Sweet Voice',
    description: 'Hearing Janu’s sweet voice for the very first time. Kamalesh knew right then that she was his forever pondati!',
    icon: 'PhoneCall',
    badge: 'Unforgettable Voice'
  },
  {
    id: 'first-meeting-countdown',
    date: 'In 1 or 2 Months! ✈️',
    rawDate: '2026-09-01T00:00:00',
    title: 'Kamalesh Flying to India to Meet Janu! ✈️💞',
    subtitle: 'London ➡️ Hosur Tamil Nadu',
    description: 'In one or two months definitely I will be there to meet you soon pondati! Don’t worry about our future, I have planned everything for life until life ends, so don’t worry!',
    icon: 'HeartHandshake',
    badge: 'Meeting Soon ✈️'
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    url: heroAuroraImg,
    caption: 'Kamalesh & Janu Under the Northern Lights 🌌',
    secretNote: 'I promise to take you under the real Aurora Borealis in Finland & Iceland, holding you tight wrapped in pure love!',
    date: '27th July Birthday'
  },
  {
    id: 'gal-2',
    url: instaSparkImg,
    caption: '31st Dec 2024 — The Instagram Story Reply 💬',
    secretNote: '31st Dec 2024 I replied to your story in Instagram. I still remember that day! After that it’s been years and still we are together!',
    date: '31 Dec 2024'
  },
  {
    id: 'gal-3',
    url: sweetDelightsImg,
    caption: 'Mothi Laddu, Palkova & Badam Milk 🥛♥️',
    secretNote: 'Kamalesh ordering Mothi Laddu, Palkova and warm Badam Milk with extra love for his sweet pondati Janu!',
    date: 'Sweet Moments'
  },
  {
    id: 'gal-4',
    url: photoMemoryImg,
    caption: 'Red Roses for Kamalesh’s MBA Queen 🌹🎓',
    secretNote: 'Marketing & HR genius Vaishu Jananni GM with the purest heart in the universe. Kamalesh is so proud of you!',
    date: 'Forever Memory'
  }
];

export const FOOD_ITEMS: FoodItem[] = [
  // Sweets
  {
    id: 'f-1',
    name: 'Mothi Laddu ♥️',
    category: 'sweet',
    imageEmoji: '🟡',
    description: 'Janu’s top favorite melt-in-the-mouth sweet delicacy!',
    isFavorite: true
  },
  {
    id: 'f-2',
    name: 'Palkova 🥛',
    category: 'sweet',
    imageEmoji: '🥠',
    description: 'Rich, traditional milk sweet made with pure love.',
    isFavorite: true
  },
  {
    id: 'f-3',
    name: 'Badam Milk 🥛',
    category: 'sweet',
    imageEmoji: '🥛',
    description: 'Warm, fragrant almond milk with saffron strands.',
    isFavorite: true
  },
  // Fruits
  {
    id: 'f-4',
    name: 'Banana 🍌',
    category: 'fruit',
    imageEmoji: '🍌',
    description: 'Simple, healthy, and on Janu’s favorite fruit list.',
    isFavorite: true
  },
  {
    id: 'f-5',
    name: 'Apple 🍎',
    category: 'fruit',
    imageEmoji: '🍎',
    description: 'Crisp red apples, as sweet as Janu’s smile.',
    isFavorite: true
  },
  {
    id: 'f-6',
    name: 'Green Grapes (Seedless) 🍇',
    category: 'fruit',
    imageEmoji: '🍇',
    description: 'Strict condition: Must be seedless green grapes!',
    isFavorite: true
  },
  {
    id: 'f-7',
    name: 'Koya Palam (Guava) 🍈',
    category: 'fruit',
    imageEmoji: '🍈',
    description: 'Fresh Tamil Nadu Koya Palam with a pinch of love.',
    isFavorite: true
  },
  // Meals
  {
    id: 'f-8',
    name: 'More Kolambu + Muta Poriyal 🍲',
    category: 'meal',
    imageEmoji: '🍛',
    description: 'Janu’s absolute comforting home favorite dish pair!',
    isFavorite: true
  },
  {
    id: 'f-9',
    name: 'Venpongal 🍚',
    category: 'meal',
    imageEmoji: '🍲',
    description: 'Hot ghee-dripping Venpongal comforting meal.',
    isFavorite: true
  },
  {
    id: 'f-10',
    name: 'Upuma 🥣',
    category: 'meal',
    imageEmoji: '🥣',
    description: 'Classic favorite comforting breakfast meal.',
    isFavorite: true
  },
  {
    id: 'f-11',
    name: 'Puri 🫓',
    category: 'meal',
    imageEmoji: '🫓',
    description: 'Fluffy golden hot puris with potato masala.',
    isFavorite: true
  },
  {
    id: 'f-12',
    name: 'Kuska 🍚',
    category: 'meal',
    imageEmoji: '🍛',
    description: 'Aromatic plain biryani / kuska packed with spices.',
    isFavorite: true
  },
  // Dislikes
  {
    id: 'd-1',
    name: 'Brinjal (Eggplant) 🍆',
    category: 'dislike',
    imageEmoji: '🍆',
    description: 'STRICT NO! Brinjal is strictly banned from Janu’s plate.',
    isFavorite: false
  },
  {
    id: 'd-2',
    name: 'Keerai (Spinach) 🥬',
    category: 'dislike',
    imageEmoji: '🥬',
    description: 'Not liking Keerai! Keep greens away unless requested.',
    isFavorite: false
  },
  {
    id: 'd-3',
    name: 'Heels 👠',
    category: 'dislike',
    imageEmoji: '👠',
    description: 'NO HEELS! Back strap sleepers only for comfort & grace 👟.',
    isFavorite: false
  },
  {
    id: 'd-4',
    name: 'Mango 🥭',
    category: 'dislike',
    imageEmoji: '🥭',
    description: 'No Mangos allowed on Janu’s fruit platter!',
    isFavorite: false
  },
  {
    id: 'd-5',
    name: 'Cherry 🍒',
    category: 'dislike',
    imageEmoji: '🍒',
    description: 'No cherries for Janu.',
    isFavorite: false
  },
  {
    id: 'd-6',
    name: 'Strawberry 🍓',
    category: 'dislike',
    imageEmoji: '🍓',
    description: 'No strawberries on her list.',
    isFavorite: false
  },
  {
    id: 'd-7',
    name: 'Pineapple 🍍',
    category: 'dislike',
    imageEmoji: '🍍',
    description: 'No pineapples allowed.',
    isFavorite: false
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "When did Kamalesh first reply to Janu's Instagram story?",
    options: ["14th Feb 2024", "31st Dec 2024", "1st Jan 2025", "7th Oct 2025"],
    correctIndex: 1,
    explanation: "31st Dec 2024 — Kamalesh replied to your Instagram story on New Year's Eve, starting your beautiful journey!"
  },
  {
    id: 2,
    question: "Where is Kamalesh living right now while dreaming of meeting Janu?",
    options: ["New York, USA", "East Ham, London E6 2AR 🇬🇧", "Paris, France", "Sydney, Australia"],
    correctIndex: 1,
    explanation: "East Ham, London E6 2AR 🇬🇧! Counting down 1 to 2 months to fly to Hosur, Tamil Nadu!"
  },
  {
    id: 3,
    question: "What is Kamalesh's promise regarding the future for his pondati Janu?",
    options: [
      "We will figure it out later",
      "I have planned everything for life until life ends, so don't worry! ❤️",
      "Only short term plans",
      "No plans"
    ],
    correctIndex: 1,
    explanation: "Kamalesh says: 'Don't worry about our future pondati, I have planned everything for life until life ends!'"
  },
  {
    id: 4,
    question: "Which of these is NOT on Janu's dream bucket list?",
    options: ["Time Travel & The Moon 🌕", "Iceland, Finland & Paris 🗼", "Eating Brinjal & Wearing Heels 👠", "Ooty, Kodaikanal & Murugan Kovil 🛕"],
    correctIndex: 2,
    explanation: "Brinjal and Heels are strictly BANNED! All cold places & temples are on her dream list!"
  },
  {
    id: 5,
    question: "What is Janu's exact address in Hosur?",
    options: [
      "Anna Nagar, Chennai",
      "3/89-11, Rajaji Nagar 1st Cross, Sipcot 1, Bedarapalli, Hosur, Tamil Nadu 635126 🇮🇳",
      "RS Puram, Coimbatore",
      "Gandhi Road, Salem"
    ],
    correctIndex: 1,
    explanation: "3/89-11, Rajaji Nagar 1st Cross, Sipcot 1, Bedarapalli, Hosur, Tamil Nadu 635126 🇮🇳!"
  }
];
