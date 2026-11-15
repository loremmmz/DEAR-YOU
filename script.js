/* =========================================================
   DEAR YOU. — script
   ========================================================= */

/* ---------------------------------------------------------
   CONFIGURATION — edit these values to personalize the site
   --------------------------------------------------------- */
const CONFIG = {
  // Shown in the welcome heading ("Dear Maya.") and the letter greeting ("Dear Maya,").
  // Keep "You" for the original wording.
  recipientName: 'You',

  // Name used at the end of the letter.
  senderName: "Someone Who Thinks You're Special",

  // Sign-off line above the sender's name.
  signOff: 'Sincerely,',

  // The letter body. The greeting is added automatically from recipientName.
  letterParagraphs: [
    "I've been thinking about how to put these feelings into words.",
    'Sometimes, there are people who come into our lives and make ordinary moments feel a little more special.',
    'And somehow, you became one of those people.',
    "I don't know exactly when it started, but I realized that I genuinely enjoy your presence, your conversations, and even the smallest moments we share.",
    "I don't expect anything from you immediately. I just wanted to be honest about what I feel.",
    'Because some feelings deserve to be expressed, not hidden forever.'
  ],

  // Three reasons why the recipient is special (shown on the "Why You?" page).
  reasons: [
    { title: 'Your Smile', text: 'Even the smallest smile can make an ordinary day feel better.' },
    { title: 'Your Presence', text: 'Being around you makes simple moments feel meaningful.' },
    { title: 'The Little Things', text: 'Sometimes, it\'s the smallest things that make someone unforgettable.' }
  ],

  // Optional memory photos, e.g. ['assets/memory1.jpg', 'assets/memory2.jpg'].
  // Leave empty to hide the photo strip.
  memoryPhotos: [],

  // Background music file. If missing, the music button stays hidden.
  musicPath: 'assets/music.mp3',

  // Typing speed for the letter, in milliseconds per character.
  typingSpeed: 22
};
  
