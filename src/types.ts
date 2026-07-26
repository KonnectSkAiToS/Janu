export interface TimelineEvent {
  id: string;
  date: string;
  rawDate: string; // ISO or YYYY-MM-DD for calculations
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  badge?: string;
  highlightColor?: string;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  caption: string;
  secretNote: string;
  date?: string;
  isCustom?: boolean;
}

export interface FoodItem {
  id: string;
  name: string;
  category: 'sweet' | 'fruit' | 'meal' | 'flower' | 'dislike';
  imageEmoji: string;
  description: string;
  isFavorite: boolean;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface JanuProfile {
  fullName: string;
  nickname: string;
  dob: string;
  birthYear: number;
  zodiacSign: string;
  zodiacTamil: string;
  nakshatram: string;
  qualification: string;
  likedColors: string[];
  heightInfo: string;
  footwearPreference: string;
  favoriteFlower: string;
  favoriteSky: string;
  firstTalkDate: string;
  whatsappDate: string;
  firstCallDate: string;
  loveMessage: string;
}
