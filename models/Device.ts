import { Model, DataTypes } from "sequelize";
import sequelize from "./SequelizeInstance";
import { DeviceInfo } from "gree-lib";

export class Device extends Model {
  public device_id!: string; // MAC Address
  public name!: string;
  public type!: string;
  public firmware_version!: string;
  public ipAddress: string | undefined;
  public encryption_key!: string;
}

function mapDeviceInfoToDevice(deviceInfo: DeviceInfo): Device {
  return { 
    device_id: deviceInfo.cid,
    name: deviceInfo.name,
    type: deviceInfo.model,
    ipAddress: deviceInfo.address,
    firmware_version: deviceInfo.ver
    } as Device
}

Device.init({
  device_id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: DataTypes.STRING,
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
    allowNull: true,
  },
  ipAddress: {
    type: new DataTypes.STRING(255),
    allowNull: true,
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