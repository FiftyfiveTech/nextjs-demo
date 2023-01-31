import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongo';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  //get DB and  collection name from env file
  const mongodbName = process.env.MONGODB_NAME;
  const collectionName = process.env.MONGODB_COLLECTION;

  //throw error if they are not found
  if (!mongodbName || !collectionName) {
    throw new Error('Add MONGODB_NAME and MONGODB_COLLECTION to .env.local');
  }

  //Connect to mongodb client
  const client = await clientPromise;
  const db = client.db(mongodbName);

  // Get data submitted in request's body.
  const body = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log('body: ', body);

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.firstName || !body.lastName) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'First or last name not found' });
  }

  if (req.method == 'POST') {
    //insert into collection
    await db.collection(collectionName).insertOne(body);

    // Sends a HTTP success code
    res.status(200).json({ success: true, data: body });
  }
};
