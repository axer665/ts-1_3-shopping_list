import Device from '../domain/Device';

test('Creation Device', () => {
    const device = new Device(4000, 'GPD Win Max 2', 'GPD', 150000, 'Nice device for work!', 1);

    const testDevice = {
        id: 4000, 
        name: 'GPD Win Max 2', 
        manufacturer: 'GPD', 
        price: 150000, 
        slogan: 'Nice device for work!', 
        amount: 1
    };

    expect(device).toEqual(testDevice);
  });