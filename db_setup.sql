CREATE DATABASE greedb;
GRANT ALL PRIVILEGES ON DATABASE greedb TO postgres;
CREATE TABLE device (
    device_id UUID PRIMARY KEY,
    name VARCHAR(255),
    type VARCHAR(255),
    firmware_version VARCHAR(255),
    encryption_key VARCHAR(255)
);
CREATE TABLE device_settings (
    setting_id SERIAL PRIMARY KEY,
    device_id UUID REFERENCES device(device_id),
    temperature INT,
    fan_speed INT,
    mode VARCHAR(255),
    fan_vertical_direction VARCHAR(255),
    fan_horizontal_direction VARCHAR(255),
    additional_options JSONB
);
CREATE TABLE device_schedule (
    schedule_id SERIAL PRIMARY KEY,
    device_id UUID REFERENCES device(device_id),
    schedule_data JSONB
);