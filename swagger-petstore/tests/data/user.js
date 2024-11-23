import { faker } from '@faker-js/faker';

const userData = {
    id: Math.floor(Math.random() * 100) + 1,
    username: faker.person.firstName(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phone: faker.phone.number(),
    userStatus: 1
};

const userArrayData = [
    {
        id: Math.floor(Math.random() * 100) + 1,
        username: faker.person.firstName(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phone: faker.phone.number(),
        userStatus: 1
    },
    {
        id: Math.floor(Math.random() * 100) + 1,
        username: faker.person.firstName(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phone: faker.phone.number(),
        userStatus: 1
    }
];

export { userData, userArrayData };
