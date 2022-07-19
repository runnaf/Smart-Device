const getMap = () => {
  const mapContainer = document.querySelector('[data-map]');
  if (mapContainer) {
    mapContainer.classList.add('is-js');
  }
};

export {getMap};
