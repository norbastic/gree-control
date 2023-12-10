import { Model, DataTypes } from "sequelize";
import sequelize from "./sequelizeInstance";

class Device extends Model {
  public device_id!: string; // UUID
  public name!: string;
  public type!: string;
  public firmware_version!: string;
  public encryption_key!: string;
}

Device.init({
  device_id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: new DataTypes.STRING(255),
    allowNull: false,
  },
  type: {
    type: new DataTypes.STRING(255),
    allowNull: false,
  },
  firmware_version: {
    type: new DataTypes.STRING(255),
    allowNull: false,
  },
  encryption_key: {
    type: new DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  sequelize,
  tableName: "device",
});

export default Device;