import { DataTypes, Model, Optional } from 'sequelize';
import connection from '../../config/dbConnect';
import User from './user';

interface PostAttributes {
  id?: number;
  content: string;
  authorId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PostInput extends Optional<PostAttributes, 'id'> {}
export interface PostOutput extends Required<PostAttributes> {}

class Post extends Model<PostAttributes, PostInput> implements PostAttributes {
  public id!: number;
  public content!: string;
  public authorId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Post.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
  },
  {
    sequelize: connection,
    underscored: false,
    timestamps: true,
    modelName: 'Post', // We set the modelName explicitly here
    tableName: 'posts', // We set the tableName explicitly here
  }
);

export default Post;
