


DROP TABLE IF EXISTS user_role CASCADE;
DROP TABLE IF EXISTS shape CASCADE;
DROP TABLE IF EXISTS zone CASCADE;
DROP TABLE IF EXISTS water_requirement CASCADE;
DROP TABLE IF EXISTS sun_requirement CASCADE;
DROP TABLE IF EXISTS plant_size CASCADE;
DROP TABLE IF EXISTS plant_status CASCADE;
DROP TABLE IF EXISTS soil_requirement CASCADE;
DROP TABLE IF EXISTS growth_habit CASCADE;
DROP TABLE IF EXISTS life_cycle CASCADE;
DROP TABLE IF EXISTS address CASCADE;
DROP TABLE IF EXISTS user CASCADE;
DROP TABLE IF EXISTS plant CASCADE;
DROP TABLE IF EXISTS garden CASCADE;
DROP TABLE IF EXISTS garden_dimensions CASCADE;
DROP TABLE IF EXISTS garden_plants CASCADE;
DROP TABLE IF EXISTS plant_inventory CASCADE;

CREATE TABLE user_role(
    id UUID PRIMARY KEY,
    role_name VARCHAR(64) NOT NULL
);

CREATE TABLE shape(
    id UUID PRIMARY KEY,
    shape_name VARCHAR(64) NOT NULL,
    description VARCHAR(255) NOT NULL,
    css_class VARCHAR(255) NOT NULL,
    no_of_dimensions INTEGER NOT NULL
);

CREATE TABLE zone(
    id UUID PRIMARY KEY,
    zone_name VARCHAR(64) NOT NULL,
    temp_range VARCHAR(64) NOT NULL,
    description VARCHAR(255) NOT NULL
);

CREATE TABLE water_requirement(
    id UUID PRIMARY KEY,
    water_name VARCHAR(64) NOT NULL,
    description VARCHAR(255) NOT NULL
);

CREATE TABLE sun_requirement(
    id UUID PRIMARY KEY,
    sun_name VARCHAR(64) NOT NULL,
    description VARCHAR(255) NOT NULL
);

CREATE TABLE soil_requirement(
    id UUID PRIMARY KEY,
    soil_name VARCHAR(64) NOT NULL,
    description VARCHAR(255) NOT NULL
);

CREATE TABLE growth_habit(
    id UUID PRIMARY KEY,
    habit_name VARCHAR(64) NOT NULL,
    description VARCHAR(255) NOT NULL
);

CREATE TABLE plant_size(
    id UUID PRIMARY KEY,
    size_name VARCHAR(64) NOT NULL,
    description VARCHAR(255)
);

CREATE TABLE plant_status(
    id UUID PRIMARY KEY,
    status_name VARCHAR(64) NOT NULL,
    description VARCHAR(255)
);

CREATE TABLE life_cycle(
    id UUID PRIMARY KEY,
    life_cycle_name VARCHAR(64) NOT NULL,
    description VARCHAR(255) NOT NULL
);

CREATE TABLE address(
    id UUID PRIMARY KEY,
    address_line_1 VARCHAR(64),
    address_line_2 VARCHAR(64),
    city VARCHAR(64),
    zip VARCHAR(64),
    state VARCHAR(64) 
);

CREATE TABLE user_desc(
  id UUID PRIMARY KEY,
  
  firstname VARCHAR(64) NOT NULL,
  lastname VARCHAR(64) NOT NULL,
  username VARCHAR(32) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone_number VARCHAR(64),
  email VARCHAR(64) NOT NULL,

  user_role_id UUID REFERENCES user_role(id) NOT NULL,
  address_id UUID REFERENCES address(id) NOT NULL,
  zone_id UUID REFERENCES zone(id) NOT NULL

);

CREATE TABLE plant(
    id UUID PRIMARY KEY,

    max_height VARCHAR(64) NOT NULL,
    max_width VARCHAR(64) NOT NULL,
    bloom_time VARCHAR(255) NOT NULL,
    available_for_sale BOOLEAN DEFAULT false NOT NULL,
    
    zone_id UUID REFERENCES zone(id) NOT NULL,
    water_requirement_id UUID REFERENCES water_requirement(id) NOT NULL,
    sun_requirement_id UUID REFERENCES sun_requirement(id) NOT NULL,
    soil_requirement_id UUID REFERENCES soil_requirement(id) NOT NULL,
    growth_habit_id UUID REFERENCES growth_habit(id) NOT NULL,
    life_cycle_id UUID REFERENCES life_cycle(id) NOT NULL
  );

  CREATE TABLE garden(
    id UUID PRIMARY KEY,
    description VARCHAR(255) DEFAULT 'garden',

    user_id UUID REFERENCES user_desc(id) NOT NULL,
    zone_id UUID REFERENCES zone(id) NOT NULL,
    shape_id UUID REFERENCES shape(id) NOT NULL,
    water_requirement_id UUID REFERENCES water_requirement(id) NOT NULL,
    sun_requirement_id UUID REFERENCES sun_requirement(id) NOT NULL,
    soil_requirement_id UUID REFERENCES soil_requirement(id) NOT NULL
    
  );

 CREATE TABLE garden_dimensions(
    id UUID PRIMARY KEY,
    garden_id UUID REFERENCES garden(id) NOT NULL,
    sequence_value INTEGER NOT NULL,
    measurement_inches FLOAT NOT NULL
  );

  CREATE TABLE garden_plants(
    id UUID PRIMARY KEY,

    plant_location_x Integer NOT NULL,
    plant_location_y INTEGER NOT NULL,

    plant_status_id UUID REFERENCES plant_status(id) NOT NULL,
    plant_id UUID REFERENCES plant(id) NOT NULL,
    garden_id UUID REFERENCES garden(id) NOT NULL
);

CREATE TABLE plant_inventory(
    id UUID PRIMARY KEY,
    plant_id UUID REFERENCES plant(id) NOT NULL,
    plant_size_id UUID REFERENCES plant_size(id) NOT NULL,
    in_stock INTEGER DEFAULT 0 NOT NULL,
    price FLOAT DEFAULT 10.00 NOT NULL,
    UNIQUE (plant_id, in_stock, plant_size_id)
);
 


