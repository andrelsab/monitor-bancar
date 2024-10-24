// src/database.ts
import { Sequelize } from 'sequelize';
export const sequelize = new Sequelize('monitor_bancario', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
});