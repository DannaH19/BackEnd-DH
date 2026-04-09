import dotenv from 'dotenv';

dotenv.config();

export const env = {
    port: Number(process.env.PORT) || 3000,
    mongoUri: process.env.MONGO_URI || 'mongodb://db_dh:danna123@ac-5schrkr-shard-00-00.ujlta8f.mongodb.net:27017,ac-5schrkr-shard-00-01.ujlta8f.mongodb.net:27017,ac-5schrkr-shard-00-02.ujlta8f.mongodb.net:27017/?ssl=true&replicaSet=atlas-12jmfy-shard-0&authSource=admin&appName=Cluster0',
    mongoDbName: process.env.MONGO_DB_NAME || 'test',
    jwtSecret: process.env.JWT_SECRET || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30',
    jwtExpiration:  process.env.JWT_EXPIRATION || '10h'
}