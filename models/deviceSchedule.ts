import { Model, DataTypes } from "sequelize";
import sequelize from "./SequelizeInstance";
import Device from "./Device";

class DeviceSchedule extends Model {
  public schedule_id!: number;
  public device_id!: string;
  public schedule_data!: object;
}

DeviceSchedule.init({
  schedule_id: {
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
  schedule_data: {
    type: DataTypes.JSONB,
  },
}, {
  sequelize,
  tableName: "device_schedule",
});

export default DeviceSchedule;