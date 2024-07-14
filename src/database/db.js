import { Database } from 'sqlite-async';
const __dirname = import.meta.dirname;

function execute(db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS churchs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        ); 
    `)
} 

const databaseModule = Database.open(__dirname + '/database.sqlite').then(execute) // db

export default databaseModule;
