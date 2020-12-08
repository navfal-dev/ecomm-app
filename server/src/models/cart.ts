import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  Unique
} from 'sequelize-typescript';
import { User } from './user';
import { Product } from './product';

@Table({ underscored: true, tableName: 'cart' })
export class Cart extends Model<Cart> {
  @Column
  quantity!: number;

  @ForeignKey(() => User)
  @Column
  userId!: number;

  @ForeignKey(() => Product)
  @Unique
  @Column
  productId!: number;

  @BelongsTo(() => User)
  user!: User;

  @BelongsTo(() => Product)
  product!: Product;
}
