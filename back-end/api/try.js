import { db } from '@vercel/postgres';

export default async function handler(request, response){
    const client = await db.connect();

    try {
        await client.sql`CREATE TABLE users (Name varchar(200));`;
        const names = ['haha', 'haha2'];
        await client.sql`INSERT INTO users (Name) VALUES (${names[0]}, ${names[1]})`
    } catch (error) {
        return response.status(500).json({error});
    }

    const names = await client.sql`SELECT * FROM users;`;
    return response.status(200).json({users});
}