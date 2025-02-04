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
            server.create('user', { id: '2', name: 'Livia', password: 'livialivia', email: 'livia_cooking@example.com' });


          server.create('recipe', {
            id: '1',
            name: 'Boeuf Bourguignon',
            ingredients: ['1 kg de boeuf à braiser', '150 g de lardons', '3 carottes', '2 oignons', '50 cl de vin rouge', '2 gousses d’ail', '1 bouquet garni', 'Sel', 'Poivre', 'Farine', 'Huile d’olive'],
            difficulty: 3,
            price: 3,
            time: '3h',
            text: '1. Coupez la viande en morceaux et farinez-les.\n2. Faites revenir les lardons et réservez.\n3. Faites dorer la viande dans la même cocotte.\n4. Ajoutez les oignons émincés et les carottes en rondelles.\n5. Remettez les lardons, ajoutez l’ail et le bouquet garni.\n6. Versez le vin rouge et laissez mijoter 2h30 à feu doux.\n7. Servez avec des pommes de terre vapeur.',
          });

          server.create('recipe', {
            id: '2',
            name: 'Escargots à la Bourguignonne',
            ingredients: ['24 escargots', '100 g de beurre', '2 gousses d’ail', 'Persil', 'Échalote', 'Sel', 'Poivre'],
            difficulty: 3,
            price: 3,
            time: '45m',
            text: '1. Hachez finement l’ail, l’échalote et le persil.\n2. Mélangez-les avec le beurre ramolli.\n3. Déposez un peu de beurre persillé dans chaque coquille d’escargot.\n4. Disposez les escargots dans un plat allant au four.\n5. Faites cuire 10 min à 200°C et servez chaud.',
          });

          server.create('recipe', {
            id: '3',
            name: 'Soufflé au Fromage',
            ingredients: ['40 g de beurre', '40 g de farine', '25 cl de lait', '4 oeufs', '100 g de gruyère râpé', 'Sel', 'Poivre', 'Muscade'],
            difficulty: 3,
            price: 2,
            time: '1h',
            text: '1. Préchauffez le four à 180°C.\n2. Faites fondre le beurre, ajoutez la farine et mélangez.\n3. Versez le lait en fouettant jusqu’à épaississement.\n4. Hors du feu, incorporez les jaunes d\'oeufs et le fromage râpé.\n5. Montez les blancs en neige et incorporez-les délicatement.\n6. Versez dans un moule beurré et enfournez 30 min.',
          });

          server.create('recipe', {
            id: '4',
            name: 'Coq au Vin',
            ingredients: ['1 coq découpé', '100 g de lardons', '3 carottes', '2 oignons', '50 cl de vin rouge', '2 gousses d’ail', '1 bouquet garni', 'Farine', 'Huile d’olive', 'Sel', 'Poivre'],
            difficulty: 3,
            price: 3,
            time: '3h',
            text: '1. Faites dorer les morceaux de coq dans une cocotte avec l’huile.\n2. Ajoutez les lardons, les oignons et les carottes en rondelles.\n3. Saupoudrez de farine et mélangez.\n4. Versez le vin rouge et ajoutez l’ail et le bouquet garni.\n5. Laissez mijoter 2h30 à feu doux.\n6. Servez avec des pommes de terre vapeur.',
          });

          server.create('recipe', {
            id: '5',
            name: 'Canard à l’Orange',
            ingredients: ['1 canard entier', '3 oranges', '50 g de sucre', '10 cl de vinaigre de vin', '25 cl de fond de volaille', '50 g de beurre', 'Sel', 'Poivre'],
            difficulty: 3,
            price: 3,
            time: '2h',
            text: '1. Préchauffez le four à 180°C.\n2. Salez et poivrez le canard, puis enfournez-le pour 1h30.\n3. Prélevez le zeste de 2 oranges et pressez leur jus.\n4. Faites caraméliser le sucre avec le vinaigre, puis ajoutez le jus d’orange et le fond de volaille.\n5. Laissez réduire à feu doux, puis incorporez le beurre.\n6. Servez le canard découpé avec la sauce et les zestes d’orange.',
          });

          server.create('recipe', {
            id: '6',
            name: 'Tournedos Rossini',
            ingredients: ['2 tournedos de boeuf', '2 tranches de foie gras', '2 tranches de pain de mie', '10 cl de fond de veau', '10 cl de Madère', 'Sel', 'Poivre', 'Beurre'],
            difficulty: 3,
            price: 4,
            time: '45m',
            text: '1. Faites toaster le pain de mie et réservez.\n2. Poêlez les tournedos dans du beurre, 3 min par côté. Réservez.\n3. Dans la même poêle, faites dorer le foie gras 1 min par côté.\n4. Déglacez avec le Madère et ajoutez le fond de veau. Réduisez la sauce.\n5. Disposez chaque tournedos sur un toast, ajoutez le foie gras et nappez de sauce.',
          });

          server.create('recipe', {
            id: '7',
            name: 'Homard Thermidor',
            ingredients: ['2 homards', '50 g de beurre', '2 jaunes d’oeuf', '20 cl de crème fraîche', '10 cl de vin blanc', '50 g de gruyère râpé', 'Sel', 'Poivre'],
            difficulty: 4,
            price: 5,
            time: '1h',
            text: '1. Faites cuire les homards dans l’eau bouillante 10 min.\n2. Coupez-les en deux et récupérez la chair.\n3. Mélangez la chair avec le beurre fondu, le vin blanc, la crème et les jaunes d’oeuf.\n4. Remplissez les carapaces avec la préparation.\n5. Saupoudrez de fromage et gratinez au four 10 min à 200°C.',
          });

          server.create('recipe', {
            id: '8',
            name: 'Cassoulet Toulousain',
            ingredients: ['500 g de haricots blancs', '4 cuisses de canard confit', '300 g de saucisse de Toulouse', '200 g de poitrine de porc', '1 oignon', '2 gousses d’ail', '1 bouquet garni', '50 cl de bouillon de volaille', 'Sel', 'Poivre'],
            difficulty: 3,
            price: 3,
            time: '4h',
            text: '1. Faites tremper les haricots blancs dans l’eau froide une nuit.\n2. Égouttez-les et faites-les cuire 1h avec l’oignon, l’ail et le bouquet garni.\n3. Dans une cocotte, faites revenir la saucisse et la poitrine de porc coupée en morceaux.\n4. Ajoutez les haricots égouttés, le bouillon et les cuisses de canard.\n5. Laissez mijoter 3h à feu doux.\n6. Servez bien chaud.',
          });

          server.create('recipe', {
            id: '9',
            name: 'Quenelles de Brochet Sauce Nantua',
            ingredients: ['300 g de chair de brochet', '100 g de beurre', '150 g de farine', '3 oeufs', '50 cl de lait', '20 cl de crème fraîche', '100 g de beurre d’écrevisse', 'Sel', 'Poivre', 'Noix de muscade'],
            difficulty: 4,
            price: 4,
            time: '2h',
            text: '1. Préparez une panade en chauffant le lait avec le beurre, puis incorporez la farine.\n2. Laissez refroidir, puis ajoutez les oeufs un à un en mélangeant bien.\n3. Incorporez la chair de brochet mixée et assaisonnez.\n4. Façonnez les quenelles et pochez-les dans de l’eau frémissante.\n5. Préparez la sauce en mélangeant la crème et le beurre d’écrevisse.\n6. Servez les quenelles nappées de sauce Nantua.',
          });

          server.create('recipe', {
            id: '10',
            name: 'Chateaubriand Sauce Béarnaise',
            ingredients: ['2 pavés de boeuf', '100 g de beurre', '2 jaunes d’oeuf', '10 cl de vinaigre de vin blanc', '1 échalote', '1 bouquet d’estragon', 'Sel', 'Poivre'],
            difficulty: 3,
            price: 4,
            time: '45m',
            text: '1. Faites revenir l’échalote hachée avec le vinaigre et la moitié de l’estragon.\n2. Laissez réduire puis filtrez.\n3. Faites fondre le beurre et réservez.\n4. Fouettez les jaunes d’oeufs avec la réduction d’échalote au bain-marie.\n5. Incorporez progressivement le beurre fondu pour obtenir une sauce onctueuse.\n6. Ajoutez l’estragon ciselé.\n7. Saisissez les pavés de boeuf dans une poêle chaude avec du beurre.\n8. Servez avec la sauce Béarnaise.',
          });

          server.create('recipe', {
            id: '11',
            name: 'Gratin Dauphinois',
            ingredients: ['1 kg de pommes de terre', '50 cl de crème fraîche', '50 cl de lait', '2 gousses d’ail', '50 g de beurre', 'Sel', 'Poivre', 'Noix de muscade'],
            difficulty: 2,
            price: 2,
            time: '1h30m',
            text: '1. Préchauffez le four à 160°C.\n2. Épluchez et coupez les pommes de terre en fines rondelles.\n3. Frottez un plat à gratin avec une gousse d’ail et beurrez-le.\n4. Disposez les rondelles de pommes de terre en couches successives.\n5. Faites chauffer le lait et la crème avec l’ail restant, le sel, le poivre et la muscade.\n6. Versez le mélange sur les pommes de terre.\n7. Enfournez pour 1h15 à 160°C.\n8. Servez bien chaud.',
          });

          server.create('recipe', {
            id: '12',
            name: 'Gigot d’Agneau de Sept Heures',
            ingredients: ['1 gigot d’agneau', '2 oignons', '4 gousses d’ail', '50 cl de vin blanc', '50 cl de bouillon de volaille', '1 bouquet garni', '4 carottes', 'Sel', 'Poivre', 'Huile d’olive'],
            difficulty: 3,
            price: 3,
            time: '7h30m',
            text: '1. Préchauffez le four à 120°C.\n2. Faites revenir le gigot dans une cocotte avec un peu d’huile d’olive.\n3. Ajoutez les oignons émincés, l’ail et les carottes en rondelles.\n4. Déglacez avec le vin blanc et ajoutez le bouillon et le bouquet garni.\n5. Couvrez et enfournez pour 7h en arrosant régulièrement.\n6. Servez la viande fondante avec sa sauce réduite.',
          });

          server.create('recipe', {
            id: '13',
            name: 'Pâté en Croûte',
            ingredients: ['500 g de pâte brisée', '300 g de viande de porc hachée', '200 g de veau haché', '100 g de foie de volaille', '1 oeuf', '10 cl de cognac', '1 échalote', '1 gousse d’ail', 'Sel', 'Poivre', 'Noix de muscade'],
            difficulty: 4,
            price: 3,
            time: '2h',
            text: '1. Mélangez les viandes avec l’échalote et l’ail hachés.\n2. Ajoutez l’oeuf battu, le cognac, le sel, le poivre et la muscade.\n3. Étalez la pâte brisée et garnissez un moule à pâté.\n4. Remplissez avec la farce et recouvrez de pâte.\n5. Faites une cheminée au centre et dorez au jaune d’oeuf.\n6. Enfournez 1h à 180°C.\n7. Laissez refroidir avant de servir.',
          });

          server.create('recipe', {
            id: '14',
            name: 'Sole Meunière',
            ingredients: ['2 soles', '50 g de farine', '100 g de beurre', '1 citron', 'Persil', 'Sel', 'Poivre'],
            difficulty: 2,
            price: 3,
            time: '30m',
            text: '1. Farinez légèrement les soles.\n2. Faites chauffer la moitié du beurre dans une poêle.\n3. Faites cuire les soles 3 min de chaque côté.\n4. Ajoutez le reste du beurre pour obtenir un beurre noisette.\n5. Arrosez de jus de citron et parsemez de persil haché.\n6. Servez immédiatement.',
          });

          server.create('recipe', {
            id: '15',
            name: 'Tarte Tatin',
            ingredients: ['6 pommes', '150 g de sucre', '50 g de beurre', '1 pâte brisée'],
            difficulty: 2,
            price: 2,
            time: '1h',
            text: '1. Préchauffez le four à 180°C.\n2. Faites un caramel avec le sucre et le beurre dans un moule à tarte.\n3. Épluchez et coupez les pommes en quartiers.\n4. Disposez-les dans le moule sur le caramel.\n5. Recouvrez avec la pâte brisée et enfournez 40 min.\n6. Démoulez encore chaud et servez tiède.',
          });

          server.create('recipe', {
            id: '16',
            name: 'Ratatouille',
            ingredients: ['2 aubergines', '2 courgettes', '1 poivron rouge', '1 poivron jaune', '4 tomates', '1 oignon', '2 gousses d’ail', 'Huile d’olive', 'Thym', 'Laurier', 'Sel', 'Poivre'],
            difficulty: 2,
            price: 2,
            time: '1h',
            text: '1. Coupez les aubergines, courgettes et poivrons en dés.\n2. Faites revenir chaque légume séparément dans de l’huile d’olive.\n3. Dans une grande sauteuse, faites revenir l’oignon et l’ail haché.\n4. Ajoutez les tomates pelées et coupées en morceaux.\n5. Remettez tous les légumes avec le thym et le laurier.\n6. Salez, poivrez et laissez mijoter à feu doux 40 min.\n7. Servez chaud ou froid en accompagnement.',
          });

          server.create('recipe', {
            id: '17',
            name: 'Quiche Lorraine',
            ingredients: ['1 pâte brisée', '200 g de lardons', '3 oeufs', '30 cl de crème fraîche', '100 g de gruyère râpé', 'Sel', 'Poivre', 'Noix de muscade'],
            difficulty: 2,
            price: 2,
            time: '50m',
            text: '1. Préchauffez le four à 180°C.\n2. Faites revenir les lardons à la poêle sans matière grasse.\n3. Battez les oeufs avec la crème, le sel, le poivre et la muscade.\n4. Étalez la pâte dans un moule et piquez le fond avec une fourchette.\n5. Disposez les lardons et versez l’appareil à quiche.\n6. Saupoudrez de fromage râpé et enfournez 40 min.\n7. Servez chaud ou tiède avec une salade verte.',
          });

          server.create('recipe', {
            id: '18',
            name: 'Blanquette de Veau',
            ingredients: ['1 kg de veau (épaule ou tendron)', '2 carottes', '1 oignon', '2 gousses d’ail', '50 cl de bouillon de volaille', '10 cl de crème fraîche', '2 jaunes d’oeuf', '50 g de beurre', '50 g de farine', '1 bouquet garni', 'Sel', 'Poivre'],
            difficulty: 3,
            price: 3,
            time: '2h30m',
            text: '1. Coupez la viande en morceaux et faites-la blanchir dans l’eau bouillante 5 min.\n2. Égouttez et placez dans une cocotte avec les carottes, l’oignon et l’ail.\n3. Ajoutez le bouillon chaud et le bouquet garni. Faites mijoter 2h.\n4. Dans une casserole, mélangez beurre et farine pour faire un roux.\n5. Ajoutez une louche de bouillon de cuisson et faites épaissir.\n6. Hors du feu, ajoutez la crème et les jaunes d’oeuf.\n7. Mélangez avec la viande et servez avec du riz blanc.',
          });

          server.create('recipe', {
            id: '19',
            name: 'Soupe à l’Oignon Gratinée',
            ingredients: ['4 gros oignons', '50 g de beurre', '1 litre de bouillon de boeuf', '10 cl de vin blanc', '1 baguette', '150 g de gruyère râpé', 'Sel', 'Poivre'],
            difficulty: 2,
            price: 2,
            time: '1h',
            text: '1. Émincez les oignons et faites-les revenir dans le beurre.\n2. Faites-les caraméliser doucement pendant 20 min.\n3. Déglacez avec le vin blanc et ajoutez le bouillon.\n4. Laissez mijoter 30 min à feu doux.\n5. Faites griller des tranches de baguette.\n6. Versez la soupe dans des bols, ajoutez les tranches de pain et le fromage râpé.\n7. Enfournez à 200°C jusqu’à ce que le fromage soit gratiné.',
          });

          server.create('recipe', {
            id: '20',
            name: 'Île Flottante',
            ingredients: ['4 oeufs', '50 cl de lait', '100 g de sucre', '1 gousse de vanille', '50 g de sucre glace', 'Caramel liquide'],
            difficulty: 2,
            price: 2,
            time: '1h',
            text: '1. Faites chauffer le lait avec la vanille.\n2. Battez les jaunes d’oeufs avec le sucre.\n3. Versez le lait chaud en mélangeant.\n4. Faites épaissir à feu doux sans bouillir.\n5. Montez les blancs en neige avec le sucre glace.\n6. Faites cuire les blancs en neige dans de l’eau frémissante.\n7. Disposez les blancs sur la crème anglaise et nappez de caramel.',
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

          this.get('/recipes/:id', (schema, request) => {
            let id = request.params['id'];
            return schema.find('recipe', id);  // Find recipe by ID
          });
        },
    });

    return server;
}
