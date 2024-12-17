document.addEventListener("DOMContentLoaded", () => {
    console.log("BioBiz Home Page Loaded");
    const scrollContainer = document.querySelector('.scroll-container');

scrollContainer.addEventListener('mouseover', () => {
  document.querySelector('.scroll-content').style.animationPlayState = 'paused';
});

scrollContainer.addEventListener('mouseout', () => {
  document.querySelector('.scroll-content').style.animationPlayState = 'running';
});
  });