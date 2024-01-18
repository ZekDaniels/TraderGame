import { Model } from "sequelize";


class BaseModel extends Model {
    public id!: number;
    // timestamps!
    public readonly created_at!: Date;
    public readonly last_updated!: Date;
}

export default BaseModel;
