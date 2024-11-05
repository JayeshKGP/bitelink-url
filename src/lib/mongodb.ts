// lib/mongodb.ts
import { MongoClient, MongoClientOptions } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
const options: MongoClientOptions = {
  
};



const client = new MongoClient(uri, options);
const clientPromise = client.connect();

export default clientPromise;
