interface IObserverParams {
  selectors: string | string[];
  callback: (observations: IntersectionObserverEntry[]) => void;
  threshold?: number;
}

// Creates a new intersecionObserver for each selector.
export function createObserver(params: IObserverParams) {
  const { selectors, callback, threshold = 0.5 } = params;

  const options = {
    threshold,
    root: null,
    rootMargin: '0px',
  }

  // Collect the elements.
  const elements: Element[] = Array.isArray(selectors)
    ? selectors.map(s => Array.from(document.querySelectorAll(s))).flat(1)
    : Array.from(document.querySelectorAll(selectors));

  // Observe.
  const observer = new IntersectionObserver(callback, options);
  elements.forEach(el => observer.observe(el));
}