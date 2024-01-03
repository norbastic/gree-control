import { Model, DataTypes } from "sequelize";
import sequelize from "./SequelizeInstance";
import { DeviceInfo } from "gree-lib";

export class Device extends Model {
  public device_id!: string; // UUID
  public name!: string;
  public type!: string;
  public firmware_version!: string;
  public encryption_key!: string;
}

function mapDeviceInfoToDevice(deviceInfo: DeviceInfo): Device {
  return { 
    device_id: deviceInfo.cid,
    name: deviceInfo.name,
    type: deviceInfo.model,
    firmware_version: deviceInfo.ver
    } as Device
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