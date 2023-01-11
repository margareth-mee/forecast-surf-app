import config, { IConfig } from 'config';
import mongoose, { connect as mongooseConnect } from 'mongoose';

const dbConfig: IConfig = config.get('App.database');

export const connect = async (): Promise<void> => {
  mongoose.set('strictQuery', true);
  await mongooseConnect(dbConfig.get('mongoUrl'));
};

export const close = (): Promise<void> => mongoose.connection.close();
