const facts = [
  "Your subconscious controls 95% of your decisions.",
  "The brain processes 11 million bits of info per second but you’re only aware of 40.",
  "Dreams are your subconscious organizing emotional data.",
  "The placebo effect works even when you know it’s a placebo.",
  "Visualization activates the same brain areas as doing the task for real."
];

function generateFact() {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("fact-text").innerText = randomFact;
}
