import databasebModule from './db.js';
import saveChurch from './saveChurch.js';

databasebModule.then(async db => {
    // inserir dados na tabela
    await saveChurch(db, {
        lat: "-3.7314536",
        lng: "-38.5254513",
        name: "Santuário Sagrado Coração de Jesus",
        about: "",
        whatsapp: "(85) 99150-7509",
        images: [
            "https://www.gpsmycity.com/img/gd_cover/2641.jpg",

            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Saint_Peter%27s_Basilica_facade%2C_Rome%2C_Italy.jpg/1920px-Saint_Peter%27s_Basilica_facade%2C_Rome%2C_Italy.jpg"
        ].toString(),
        instructions: "",
        opening_hours: "Missas de Segunda a Sábado às 7h e 16h, e Domingo às 7h | 8h30 | 16h | 18h",
        open_on_weekends: "1"
    })

    // consultar dados na tabela
    const selectedChurchs = await db.all("SELECT * FROM churchs")
    console.log(selectedChurchs)

    // consultar dados na tabela
    const church = await db.all('SELECT * FROM churchs WHERE id = "2"')
    console.log(church)
})