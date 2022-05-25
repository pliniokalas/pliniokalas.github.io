/* ------------------------------------------------------------------------------------ */

// Observer to animate the articles when in view.
function animateArticles(observations: IntersectionObserverEntry[]) {
  observations.forEach(o => o.isIntersecting && o.target.classList.add('animated'));
}

export const articlesObserver = {
  callback: animateArticles,
  selectors: 'article'
};

/* ------------------------------------------------------------------------------------ */

// Observer to highlight the outline items.
function hightlightOutline(observations: IntersectionObserverEntry[]) {
  const outlineItems = Array.from(document.querySelectorAll('.outlineItem')) as HTMLButtonElement[];

  observations.forEach(o => {
    if (o.isIntersecting) {
      outlineItems.forEach(el => el.classList.remove('selected')); // Clear previous 'selected'.
      outlineItems.find(el => el.name === o.target.id)?.classList.add('selected');
    }
  })
}

// Ids of the articles that can be jumped to. Should probably be imported from somewhere else...
const sectionIds = [
  '#cover', '#about', '#hard-skills', '#experience', '#other', '#education', '#projects'
];

export const outlineObserver = {
  callback: hightlightOutline,
  selectors: sectionIds,
  threshold: 1,
};