const memeEl = document.getElementById("meme");
const clipEl = document.getElementById("funnyClip");

const memeUrls = [
  "https://i.redd.it/1kp6h06tfpd61.jpg",
  "https://i.redd.it/ot5n8kqt7je61.jpg",
  "https://i.redd.it/7i5xv8r3xzd81.jpg",
  "https://i.imgur.com/Q7eYzKo.jpeg",
  "https://i.imgur.com/PEFhZMo.jpeg"
];

let memeIndex = 0;
function loadMeme() {
  memeEl.src = memeUrls[memeIndex];
  memeIndex = (memeIndex + 1) % memeUrls.length;
}

const clipUrls = [
  "https://files.catbox.moe/f6r6e5.mp4",
  "https://files.catbox.moe/pp33me.mp4",
  "https://files.catbox.moe/cgqgvi.mp4",
  "https://files.catbox.moe/q7x0vc.mp4"
];

let clipIndex = 0;
function loadClip() {
  clipEl.src = clipUrls[clipIndex];
  clipEl.load();
  clipIndex = (clipIndex + 1) % clipUrls.length;
}

loadMeme();
loadClip();
