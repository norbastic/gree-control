import { Model, DataTypes } from "sequelize";
import sequelize from "./sequelizeInstance";
import Device from "./device";

class DeviceSettings extends Model {
  public setting_id!: number;
  public device_id!: string;
  public temperature!: number;
  public fan_speed!: number;
  public mode!: string;
  public fan_vertical_direction!: string;
  public fan_horizontal_direction!: string;
  public additional_options!: object;
}

DeviceSettings.init({
  setting_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  device_id: {
    type: DataTypes.UUID,
    references: {
      model: Device,
      key: "device_id",
    },
  },
  temperature: {
    type: DataTypes.INTEGER,
  },
  fan_speed: {
    type: DataTypes.INTEGER,
  },
  mode: {
    type: new DataTypes.STRING(255),
  },
  fan_vertical_direction: {
    type: new DataTypes.STRING(255),
  },
  fan_horizontal_direction: {
    type: new DataTypes.STRING(255),
  },
  additional_options: {
    type: DataTypes.JSONB,
  },
}, {
  sequelize,
  tableName: "device_settings",
});

export default DeviceSettings;