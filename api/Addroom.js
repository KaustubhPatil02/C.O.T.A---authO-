import { parse } from "url";
import { MongoClient } from "mongodb";

let cachedDb = null;
const uri = process.env.VISITORSDB;

async function connectToDatabase()
{
    if(cachedDb){
        return cachedDb;
    }

    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = await client.db(parse(uri).pathname.substr(1));

    cachedDb = db;
    return db;
}

export default async (req, res) => {
    try {
        const body = req.body
        //console.log(req)
        const roomdata = {
            username: data.nama,
            loca: data.loca,
            adr: data.adr,
            bhk: data.bhk,
            rent:data.rent,
            dis: data.dis
        }

        const db = await connectToDatabase();
        const collection = await db.collection(process.env.COLLECTION);
        await collection
            .insertOne(course)
            .then(() => {
                res.status(200).send();
            })
            .catch(err => {
                throw err;
            });
        }
        catch(error)
        {
            console.log(error);
            res.status(500).send();
        }
};