export default function () {
    return import('@faker-js/faker')
        .then(({ faker }) => {
            const database = [];

            for (let i = 0; i < 100; i++) {
                database.push({
                    first_name: faker.name.firstName(),
                    last_name: faker.name.lastName(),
                    title: faker.name.title(),
                    email: faker.internet.email(),

                    id: i,
                    isVisible: true
                })
            }

            return database;
        })
        .catch((error) => 'An error occurred while loading @faker-js/faker component');
}