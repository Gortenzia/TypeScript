import Cart from '../Cart';
import Movie from '../Movie';

let cart: Cart;
let movieAvengers: Movie;
let movieGodfather: Movie;
let movieTheGreenMile: Movie;
let movieFightClub: Movie;

beforeEach(() => {
  cart = new Cart();

  movieAvengers = new Movie(
    1,
    'Мстители',
    'The Avengers',
    2012,
    ['США'],
    'Avengers Assemble!',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    137,
    0,
    true
  );

  movieGodfather = new Movie(
    2,
    'Крёстный отец',
    'The Godfather',
    1972,
    ['США'],
    'Mario Puzo`s The Godfather',
    ['криминальный', 'драма', 'триллер'],
    175,
    100,
    true
  );

  movieTheGreenMile = new Movie(
    3,
    'Зелёная миля',
    'The Green Mile',
    1999,
    ['США'],
    ' Stephen King`s The Green Mile',
    ['драма'],
    134,
    50,
    true
  );

  movieFightClub = new Movie(
    4,
    'Бойцовский клуб',
    '	Fight Club',
    1999,
    ['США', 'Германия'],
    'Silence is Not Enough',
    ['триллер', 'криминальный', 'драма'],
    97,
    100,
    true
  );
});

test('add()', () => {
  cart.add(movieAvengers);

  expect(cart.items).toContainEqual({
    country: ['США'],
    genre: ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    id: 1,
    imax: true,
    name: 'Мстители',
    nameEn: 'The Avengers',
    price: 0,
    tagline: 'Avengers Assemble!',
    time: 137,
    year: 2012,
  });
});

test('removeItem()', () => {
  cart.add(movieAvengers);
  cart.add(movieGodfather);
  cart.add(movieTheGreenMile);
  cart.add(movieFightClub);

  cart.removeItem(2);

  expect(cart.items).not.toContain(movieGodfather);
});

test('amount()', () => {
  cart.add(movieAvengers);
  cart.add(movieGodfather);
  cart.add(movieTheGreenMile);
  cart.add(movieFightClub);

  expect(cart.amount()).toBe(250);
});

test('removeItem() and amount()', () => {
  cart.add(movieAvengers);
  cart.add(movieGodfather);
  cart.add(movieTheGreenMile);
  cart.add(movieFightClub);

  cart.removeItem(2);

  expect(cart.amount()).toBe(150);
});

test('discountedAmount()', () => {
  cart.add(movieAvengers);
  cart.add(movieGodfather);
  cart.add(movieTheGreenMile);
  cart.add(movieFightClub);

  expect(cart.discountedAmount(10)).toBe(225);
});

function beforeEach(arg0: () => void) {
  throw new Error('Function not implemented.');
}
function expect(items: import("../Buyable").default[]) {
  throw new Error('Function not implemented.');
}

