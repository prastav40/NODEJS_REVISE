import { MongoClient } from 'mongodb'; 

// IMPORTANT: Hide this in a .env file later!
const uri = "mongodb+srv://backend:<YOUR_PASSWORD>@cluster0.mkdkwss.mongodb.net/?appName=Cluster0";

// Look how clean this is! No options object, no TypeScript errors.
const client = new MongoClient(uri);

export async function runStableAPIConnect() {
    try {
        await client.connect();
        
        const mycoll = await client.db('Dev_Tinder').collection("data");
        const doc = { name: "Neapolitan pizza", shape: "round" };
        
        const result = await mycoll.insertOne(doc);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
        
    } finally {
        await client.close();
    }
}

runStableAPIConnect().catch(console.dir);