import databaseModule from './database/db.js';
import saveChurch from './database/saveChurch.js';

const pages = {
    
    index(req, res) {
        return res.render('index')
    },

    async church(req, res) {

        const id = req.query.id;

        try {
            const db = await databaseModule;
            const results = await db.all(`SELECT * FROM churchs WHERE id = "${id}"`)
            const church = results[0];

            church.images = church.images.split(",")
            church.firstImage = church.images[0]

            if(church.open_on_weekends == "0") {
                church.open_on_weekends = false
            } else {
                church.open_on_weekends = true
            }

            return res.render('church', { church })
        } catch (error) {
            console.log(error)
            return res.send('Erro ao carregar o banco de dados')
        }
    },

    async churchs(req, res) {
        try {
            const db = await databaseModule;
            const churchs = await db.all("SELECT * FROM churchs")
            return res.render('churchs', { churchs })
        } catch (error) {
            console.log(error)
            return res.send('Erro ao carregar o banco de dados')
        }
    },

    createChurch(req, res) {
        return res.render('create-church')
    },

    async saveChurch(req, res) {
        const fields = req.body;

        // validar se todos os campos estao preenchidos
        if (Object.values(fields).includes("")) {
          return res.send("Todos os campos devem ser preenchidos!");
        }
    
        try {
          //salvar uma igreja
          const db = await databaseModule;
          await saveChurch(db, {
            lat: fields.lat,
            lng: fields.lng,
            name: fields.name,
            about: fields.about,
            whatsapp: fields.whatsapp,
            images: fields.images.toString(),
            instructions: fields.instructions,
            opening_hours: fields.opening_hours,
            open_on_weekends: fields.open_on_weekends,
          });
    
          // redirecionamento
          return res.redirect("/churchs");
        } catch (error) {
          console.log(error);
          return res.send("Erro no banco de dados!");
        }
    },
};

export default pages;