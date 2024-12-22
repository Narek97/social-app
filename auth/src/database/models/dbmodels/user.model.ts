import { BaseModel } from '../base.model';
import { Column, DataType, Table } from 'sequelize-typescript';
import { HideField, ObjectType } from '@nestjs/graphql';

interface CreateUsersAttr {
  id: number;
  email: string;
  name: string;
  surname: string;
  password: string;
}

@Table({ tableName: 'users' })
@ObjectType()
export class Users extends BaseModel<Users, CreateUsersAttr> {
  @Column({ type: DataType.STRING })
  email: string;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING })
  surname: string;

  @HideField()
  @Column({ type: DataType.STRING })
  password: string;
}
