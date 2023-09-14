const { ymaps } = window;
const addForm = document.querySelector('form#addSellForm');
const map = document.querySelector('#map');
let data;
if (map) {
  data = [map.dataset.x, map.dataset.y];
}
// eslint-disable-next-line no-inner-declarations
function init() {
  const start = data; // start coordinates
  const zoom = 10; // start zoom
  const id = 'map';
  const lat = start[0];
  const long = start[1];
  let coords = [lat, long];
  Map = new ymaps.Map(id, { // initialize map
    center: coords,
    zoom,
    controls: ['zoomControl'],
  });
  const search = new ymaps.control.SearchControl({
    options: {
      float: 'left',
      floatIndex: 100,
      noPlacemark: true,
    },
  });
  Map.controls.add(search);
  /* Adding mark on map */
  const mark = new ymaps.Placemark([lat, long], {}, { preset: 'islands#redIcon', draggable: true });
  Map.geoObjects.add(mark);
  function save() {
    const newCoords = [coords[0].toFixed(6), coords[1].toFixed(6)];
    mark.getOverlaySync().getData().geometry.setCoordinates(newCoords);
    data = newCoords;
  }
  mark.events.add('dragend', function () {
    coords = this.geometry.getCoordinates();
    save();
  }, mark);
  /* Event click */
  Map.events.add('click', (e) => {
    coords = e.get('coords');
    save();
  });
  /* Event search */
  search.events.add('resultselect', () => {
    coords = search.getResultsArray()[0].geometry.getCoordinates();
    save();
  });
}
if (ymaps) {
  ymaps.ready(init);
}

const register = document.querySelector('form.register-container');
if (register) {
  register.addEventListener('submit', async (e) => {
    e.preventDefault();
    const info = new FormData(register);
    info.append('coordinateX', data[0]);
    info.append('coordinateY', data[1]);
    const responce = await fetch('http://localhost:3000/user/register1', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(info)),
    });
    console.log(responce);
    if (responce.status === 200) {
      window.location = '/';
    }
  });
}
if (addForm) {
  addForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const info = new FormData(addForm);
    info.append('coordinateX', data[0]);
    info.append('coordinateY', data[1]);
    const responce = await fetch('http://localhost:3000/add', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(info)),
    });
    if (responce.status === 200) {
      window.location = '/';
    }
  });
}
