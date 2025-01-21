CREATE DATABASE nzhome;

CREATE TYPE level AS ENUM ('A','B');
CREATE TYPE status AS ENUM ('0','1');

CREATE TABLE Users(
    UserID SERIAL PRIMARY KEY,
    AccessLevel level NOT NULL,
    FirstName VARCHAR(20) NOT NULL,
    LastName VARCHAR(20) NOT NULL,
    Email VARCHAR(20) NOT NULL,
    Status status NOT NULL
);

CREATE TABLE Image(
    ImageID SERIAL PRIMARY KEY,
    Image BYTEA NOT NULL
);

CREATE TYPE dtype AS ENUM ('S','E');

CREATE TABLE Device(
    DeviceID SERIAL PRIMARY KEY,
    SerialNumber SERIAL PRIMARY KEY,
    ImageID INT NOT NULL,
    DeviceType dtype NOT NULL,
    Brand VARCHAR(20) NOT NULL,
    WarrantyExpiration TIMESTAMP NOT NULL,
    InstallationDate TIMESTAMP NOT NULL,
    InstalledBy VARCHAR (20) NOT NULL,
    CONSTRAINT fk_image FOREIGN KEY (ImageID)
    REFERENCES image(ImageID)
);

CREATE TABLE Room(
    RoomID SERIAL PRIMARY KEY,
    RoomType VARCHAR(20) NOT NULL,
    ImageID INT NOT NULL,
    DeviceID INT NOT NULL,
    CONSTRAINT fk_image FOREIGN KEY (ImageID)
    REFERENCES image(ImageID),
    CONSTRAINT fk_device FOREIGN KEY (DeviceID)
    REFERENCES device(DeviceID)
);

CREATE TABLE Message(
    MessageID SERIAL PRIMARY KEY,
    Header VARCHAR(20) NOT NULL,
    Message VARCHAR(100) NOT NULL
);

CREATE TABLE Notification(
    NotificationID SERIAL PRIMARY KEY,
    Time TIMESTAMP NOT NULL,
    ReadStatus BOOLEAN NOT NULL,
    MessageID INT,
    CONSTRAINT fk_message FOREIGN KEY (MessageID)
    REFERENCES message(MessageID)
);

CREATE TABLE Schedule(
    ScheduleID SERIAL PRIMARY KEY,
    DeviceID INT NOT NULL,
    Title VARCHAR(20) NOT NULL,
    StartTime TIMESTAMP NOT NULL,
    EndTime TIMESTAMP NOT NULL,
    RepeatType BOOLEAN NOT NULL,
    CreatedBy VARCHAR(20) NOT NULL,
    CONSTRAINT fk_device FOREIGN KEY (DeviceID)
    REFERENCES device(DeviceID)
);

CREATE TYPE stype AS ENUM ('ON','OFF');

CREATE TABLE Action(
    ActionID SERIAL PRIMARY KEY,
    DeviceID INT NOT NULL,
    ActionType VARCHAR(20) NOT NULL,
    Status stype,
    CONSTRAINT fk_device FOREIGN KEY (DeviceID)
    REFERENCES device(DeviceID)
);

CREATE TABLE InternetUsage(
    IntUsageID SERIAL PRIMARY KEY,
    DeviceID INT NOT NULL,
    DailyDataUsage INT NOT NULL,
    MonthlyDataUsage INT NOT NULL,
    AnnualDataUsage INT NOT NULL,
    NextPaymentDate DATE NOT NULL,
    CONSTRAINT fk_device FOREIGN KEY (DeviceID)
    REFERENCES device(DeviceID)
);

CREATE TABLE SingleDeviceEnergyUsage(
    SingleDevUsageID SERIAL PRIMARY KEY,
    DeviceID INT NOT NULL,
    DailyEnergyConsumption INT NOT NULL,
    MonthlyEnergyConsumption INT NOT NULL,
    AnnualEnergyConsumption INT NOT NULL,
    DailyEnergyGeneration INT NOT NULL,
    MonthlyEnergyGeneration INT NOT NULL,
    AnnualEnergyGeneration INT NOT NULL,
    CONSTRAINT fk_device FOREIGN KEY (DeviceID)
    REFERENCES device(DeviceID)
);