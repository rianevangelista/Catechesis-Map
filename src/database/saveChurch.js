function saveChurch(db, church) {
    return db.run(`
        INSERT INTO churchs (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "${church.lat}",
            "${church.lng}",
            "${church.name}",
            "${church.about}",
            "${church.whatsapp}",
            "${church.images}",
            "${church.instructions}",
            "${church.opening_hours}",
            "${church.open_on_weekends}"
        );
    `)
}

export default saveChurch;