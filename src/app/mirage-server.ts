import { createServer, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
    const server = createServer({
        environment,

        models: {
            user: Model,
            recipe: Model,
        },

        seeds(server) {
            server.create('user', { id: '1', name: 'Admin', password: 'adminadmin', email: 'admin@cooking.com' });
            server.create('user', { id: '2', name: 'Livia', password: 'livialivia', email: 'livia@cooking.com' });


          server.create('recipe', {
            id: '1',
            name: 'Spaghetti Carbonara',
            ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan', 'Black Pepper'],
            difficulty: 3,
            price: 2,
            text: 'Cook pasta. Fry pancetta. Mix eggs with cheese. Combine all together.'
          });
          server.create('recipe', {
            id: '2',
            name: 'Avocado Toast',
            ingredients: ['Bread', 'Avocado', 'Lemon', 'Salt', 'Pepper'],
            difficulty: 1,
            price: 1,
            time: '1h30m',
            text: 'Toast bread. Mash avocado with lemon, salt, and pepper. Spread and serve.',
          });

        },

        routes() {
            this.namespace = 'api'; // Toutes les requêtes passeront par /api

            this.get('/users', (schema) => {
                return schema.all('user');
            });

            this.post('/users', (schema, request) => {
                const attrs = JSON.parse(request.requestBody);
                return schema.create('user', attrs);
            });

            this.get('/recipes', (schema) => {
              return schema.all('recipe');
            });

            this.post('/recipes', (schema, request) => {
              const attrs = JSON.parse(request.requestBody);
              return schema.create('recipe', attrs);
            });
        },
    });

    return server;
}
