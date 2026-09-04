// =================================================================
// ROMANTIC PROPOSAL CONFIGURATION
// Customize questions, messages, stickers, and your love letter here!
// =================================================================

export const CONFIG = {
  // Main Proposal Question
  question: "Do you love me?",
  heartIcon: "❤️",

  // Button Labels
  yesBtnText: "YES",
  yesBtnIcon: "❤️",
  noBtnText: "NO",
  noBtnIcon: "😭",

  // How many NO clicks before the button completely disappears
  maxNoClicks: 6,

  // Text displayed when NO button finally disappears
  noDisappearedMessage: "Okay… looks like there is only one answer left. 🥺❤️",

  // Reactions progression for each NO click (index 0 is initial state)
  reactions: [
    {
      // Initial state
      gifUrl: "./gifs/image1.gif",
      stickerType: "stage0",
      emoji: "🥺👉👈",
      message: "Please say yes...",
    },
    {
      // After NO click 1
      gifUrl: "./gifs/image2.gif",
      stickerType: "stage1",
      emoji: "🥹💗",
      message: "Are you sure? 🥺",
    },
    {
      // After NO click 2
      gifUrl: "./gifs/image3.gif",
      stickerType: "stage2",
      emoji: "😭🥺",
      message: "Think again… 🥹",
    },
    {
      // After NO click 3
      gifUrl: "./gifs/image4.gif",
      stickerType: "stage3",
      emoji: "💔🥹",
      message: "My heart is breaking 💔",
    },
    {
      // After NO click 4
      gifUrl: "./gifs/image5.gif",
      stickerType: "stage4",
      emoji: "😭😭❤️🩹",
      message: "Pleaseee 😭❤️",
    },
    {
      // After NO click 5
      gifUrl: "./gifs/image6.gif",
      stickerType: "stage5",
      emoji: "🥺🥀💔",
      message: "You can't say no forever 😭❤️",
    },
    {
      // After NO click 6 (NO button disappears)
      gifUrl: "./gifs/image6.gif",
      stickerType: "stage6",
      emoji: "🥺👉👈💖",
      message: "One more chance? 🥺👉👈",
    }
  ],

  // Extra playful fallback messages
  randomPleadingMessages: [
    "Are you sure? 🥺",
    "Think again… 🥹",
    "Pleaseee 😭❤️",
    "Really? 😭",
    "My heart is breaking 💔",
    "One more chance? 🥺👉👈",
    "You can't say no forever 😭❤️",
    "I know you love me 😌❤️",
    "Look how big the YES button is! 🥰",
    "Resistance is futile ❤️"
  ],

  // Celebration Screen Details (When YES is clicked)
  celebration: {
    title: "I KNEW IT! ❤️🥰",
    subtitle: "You just made me the happiest person alive. 💕",
    gifUrl: "./gifs/image7.gif",
    stickerType: "celebration",
    emoji: "🥰🎉💃",
    buttonText: "One More Thing… 💌"
  },

  // Moments I want to spend with him popup details (Empty state: no pre-added photos or memories)
  momentsData: {
    title: "Moments I Want To Spend With You 📸💕",
    subtitle: "আমাদের কিছু মিষ্টি স্মৃতি আর একসাথে বাঁচার রঙিন স্বপ্নগুলো ✨",
    defaultWishlist: [],
    defaultPhotos: []
  },

  // Personal Love Letter Modal Details
  letter: {
    badge: "আমার প্রিয় খ্যাপীর জন্য 🌸",
    stamp: "💌 Forever",
    heading: "To My Khepi,",
    content: `তুমি আমার সকালের এক চিলতে মিষ্টি রোদ্দুর, আর রাতের আকাশের সবচেয়ে প্রিয় শুকতারা।

'তোমার চোখে দেখেছিলাম আমার সর্বনাশ,
তোমার হাসিতেই খুঁজে পেয়েছি আমার নীল আকাশ।' 🌸

জানো খ্যাপী, হাজারটা মানুষের কোলাহলেও আমার মন আর চোখ শুধু তোমাকেই খুঁজে বেড়ায়। তোমার ওই মিষ্টি পাগলামি, এক চিলতে দুষ্টুমি, আর একরাশ মিষ্টি অভিমান—সবকিছু মিলিয়েই তুমি আমার বেঁচে থাকার সবচেয়ে সুন্দর কারণ।

যতটা ভালোবাসলে নিঃশ্বাসেও শুধু একটা নামেরই সুবাস জড়িয়ে থাকে, আমি ঠিক ততখানি ভালোবেসে ফেলেছি তোমায়। জীবনের প্রতিটা ঋতুতে, সব রোদ-বৃষ্টি আর ঝড়-ঝাপটা পেরিয়ে আমি শুধুই তোমার হাত ধরে হাঁটতে চাই।

তুমি আমার প্রথম কবিতা, আর জীবনের শেষ ভালোবাসা।
থাকবে তো সারাজীবন আমার পাশে? 💖`,
    signoff: "চিরদিনের জন্য শুধুই তোমার,",
    signature: "তোমার পাগলটা ❤️"
  }
};
