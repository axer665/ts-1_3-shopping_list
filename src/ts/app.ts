import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Device from './domain/Device';

const cart = new Cart();
console.log(cart.items);

const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
const movie = new Movie(2001, 'Мстители', 400, 'The avegers', ['imax'], 137, "https:domain.site/products/movies/posters/avengers.jpg", 12, 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения']);
const device = new Device(4000, 'GPD Win Max 2', 'GPD', 150000, 'Nice device for work!', 1);

cart.add(book);
cart.add(musicAlbum);
cart.add(movie);
cart.add(device);

console.log(cart.items);