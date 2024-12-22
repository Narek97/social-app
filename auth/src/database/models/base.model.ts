import { Column, DataType, Model } from 'sequelize-typescript';
import 'reflect-metadata';

export class BaseModel<T, G> extends Model<T, G> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  })
  id: number;
}
