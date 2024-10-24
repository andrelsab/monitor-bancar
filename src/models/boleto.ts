// src/models/boleto.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

export class Boleto extends Model {
  public id!: number;
  public banco!: string;
  public status_code!: number;
  public tempo_resposta!: number;
  public tipo!: 'registro' | 'consulta';
  public payload!: object;
  public data!: Date;
}

Boleto.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    banco: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tempo_resposta: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.ENUM('registro', 'consulta','emissao'),
      allowNull: false,
    },
    payload: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'Boleto',
    tableName: 'boletos',
  }
);
