import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';
import Device from '../domain/Device';

let cart = new Cart();

beforeEach(() => {
    cart = new Cart();
});

const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
const movie = new Movie(
    2001,
    'Мстители',
    400,
    'The avegers',
    ['imax'],
    137,
    "https:domain.site/products/movies/posters/avengers.jpg",
    12,
    'Avengers Assemble!',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
);

const device = new Device(4000, 'GPD Win Max 2', 'GPD', 150000, 'Nice device for work!', 1);


test('new card should be empty', () => {
    expect(cart.items.length).toBe(0);
});


test('Adding and storing in cart', () => {
    cart.add(movie);
    expect(cart.items.length).toBe(1);
});

test('Adding and storing quantity items in your cart', () => {
    cart.add(book)
    cart.add(device);
    cart.add(device);
    expect(cart.items.length).toBe(2);
});

test('add 2 simple identical products', () => {
    cart.add(movie);
    cart.add(movie);

    expect(cart.items.length).toBe(1);
    expect(cart.getSum()).toBe(400);
});

test('Get the amount excluding discount', () => {
    cart.add(movie);
    cart.add(device);
    expect(cart.getSum()).toBe(150400);
});

test('Get the amount including the discount', () => {
    cart.add(book);
    cart.add(musicAlbum);
    cart.add(movie);
    cart.add(device);
    cart.add(device);
    expect(cart.getSumWithDiscount()).toBe(300267);
    expect(cart.getSumWithDiscount(10)).toBe(272970);
});

test('Remove item from cart by id', () => {
    cart.add(book);
    cart.add(musicAlbum);
    cart.add(movie);
    cart.deleteItem(1008);
    expect(cart.items.length).toBe(2);
});

test('Remove non-existent product from cart by id', () => {
    cart.add(book);
    cart.add(musicAlbum);
    expect(() => cart.deleteItem(1005)).toThrow(new Error('You cannot delete an item that is not in your cart.'));
});

test('Getting the quantity of each item in the cart', () => {
    cart.add(book);
    cart.add(device);
    cart.add(device);

    const testBook = {
        id: 1001,
        name: 'War and Piece',
        author: 'Leo Tolstoy',
        price: 2000,
        pages: 1225,
    };

    expect(cart.getItem(1001)).toEqual(testBook);
    expect(cart.getItem(4000).amount).toBe(2);
});

test('Receive an item that is not in stock', () => {
    expect(() => cart.getItem(1023)).toThrow('Product not in cart.');
})

test('Two identical products', () => {
    cart.add(device);
    cart.add(device);
    cart.deleteItem(4000);
    expect(cart.items.length).toBe(1);
})