import { Model, Table, Column, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table
export class Products extends Model<Products> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    field: 'ID',
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column
  sku: string;

  @Column
  name: string;

  @Column
  description: string;

  @Column
  price: number;

  @Column
  color: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
