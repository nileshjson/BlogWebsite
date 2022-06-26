import mongoose from 'mongoose';


const Connection = async (username, password) => {
    const URL =`mongodb://${username}:${password}@ac-cbtjrxc-shard-00-00.cpkqjit.mongodb.net:27017,ac-cbtjrxc-shard-00-01.cpkqjit.mongodb.net:27017,ac-cbtjrxc-shard-00-02.cpkqjit.mongodb.net:27017/?ssl=true&replicaSet=atlas-dd2d9q-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }


}

export default Connection;