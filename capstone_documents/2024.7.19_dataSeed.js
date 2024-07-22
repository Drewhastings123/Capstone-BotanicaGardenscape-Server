
// Reference Data
INSERT INTO user_role (id, role_name) 
VALUES(gen_random_uuid (), 'Admin'),
      (gen_random_uuid (), 'Customer');

INSERT INTO shape (id, shape_name, description, css_class, no_of_dimensions) 
VALUES(gen_random_uuid (), 'square', '4 even sides', 'the image', 4),
      (gen_random_uuid (), 'circle', 'No Sides', 'the image', 1),
      (gen_random_uuid (), 'rectangle', '2 short, 2 long', 'the image', 4),

INSERT INTO zone (id,zone_name, temp_range, description) 
VALUES(gen_random_uuid (), '1a', '-60 to -55 (F)', 'Very Cold'),
      (gen_random_uuid (), '1b', '-55 to -50 (F)', 'Very Cold'),
      (gen_random_uuid (), '2a', '-50 to -45 (F)', 'Very Cold'),
      (gen_random_uuid (), '2b', '-45 to -40 (F)', 'Very Cold'),
      (gen_random_uuid (), '3a', '-40 to -35 (F)', 'Very Cold'),
      (gen_random_uuid (), '3b', '-35 to -30 (F)', 'Very Cold'),
      (gen_random_uuid (), '4a', '-30 to -25 (F)', 'Very Cold'),
      (gen_random_uuid (), '4b', '-25 to -20 (F)', 'Very Cold'),
      (gen_random_uuid (), '5a', '-20 to -15 (F)', 'Very Cold'),
      (gen_random_uuid (), '5b', '-15 to -10 (F)', 'Very Cold'),
      (gen_random_uuid (), '6a', '-10 to -5 (F)', 'Very Cold'),
      (gen_random_uuid (), '6b', '-5 to -0 (F)', 'Very Cold'),
      (gen_random_uuid (), '7a', '0 to 5 (F)', 'Cold'),
      (gen_random_uuid (), '7b', '5 to 10 (F)', 'Cold'),
      (gen_random_uuid (), '8a', '10 to 15 (F)', 'Cold'),
      (gen_random_uuid (), '8b', '15 to 20 (F)', 'Cold'),
      (gen_random_uuid (), '9a', '20 to 25 (F)', 'Cold'),
      (gen_random_uuid (), '9b', '25 to 30 (F)', 'Chilli'),
      (gen_random_uuid (), '10a', '30 to 35 (F)', 'Chilli'),
      (gen_random_uuid (), '10b', '35 to 40 (F)', 'Temperate'),
      (gen_random_uuid (), '11a', '40 to 45 (F)', 'Temperate'),
      (gen_random_uuid (), '11b', '45 to 50 (F)', 'Warm'),
      (gen_random_uuid (), '12a', '50 to 55 (F)', 'Really Warm'),
      (gen_random_uuid (), '12b', '55 to 60 (F)', 'Really Really Warm'),
      (gen_random_uuid (), '13a', '60 to 65 (F)', 'Hot'),
      (gen_random_uuid (), '13b', '65 to 70 (F)', 'Hot Hot');

INSERT INTO water_requirement (id, water_name, description) 
VALUES(gen_random_uuid (), 'Dry', '1 Time Per Week'),
      (gen_random_uuid (), 'Moderate', '2 Time Per Week'),
      (gen_random_uuid (), 'Damp', '3 Time Per Week'),
      (gen_random_uuid (), 'Moist', '3 Time Per Week'),
      (gen_random_uuid (), 'Wet', '4 Time Per Week');

INSERT INTO sun_requirement (id, sun_name, description) 
VALUES(gen_random_uuid (), 'Full Sun', '6 or more hours per day'),
      (gen_random_uuid (), 'Part Sun', '3-6 hours per day'),
      (gen_random_uuid (), 'Part Shade', '3-6 hours per day'),
      (gen_random_uuid (), 'Shade', '3 or less hours per day');

INSERT INTO soil_requirement (id, soil_name, description) 
VALUES(gen_random_uuid (), 'Loam Soil', '40% Sand, 40% Silt, 20% Clay'),
      (gen_random_uuid (), 'Clay Soil', '50% Clay'),
      (gen_random_uuid (), 'Sandy Soil', 'Gritty'),
      (gen_random_uuid (), 'Silty Soil', '80% Silt'),
      (gen_random_uuid (), 'Chalk Soil', 'Chalk and Limestone, alkaline (pH 7.1 and above)'),
      (gen_random_uuid (), 'Peat Soil', 'Peat, acidic (pH 7.0 and below)');

INSERT INTO growth_habit (id, habit_name, description) 
VALUES(gen_random_uuid (), 'Mounding', 'Mounded Growth'),
      (gen_random_uuid (), 'Trailing', 'Trailing Growth'),
      (gen_random_uuid (), 'Spiking', 'Tall');

INSERT INTO life_cycle (id, life_cycle_name, description) 
VALUES(gen_random_uuid (), 'Annual', 'Single Season'),
      (gen_random_uuid (), 'Perennial', 'Multi Season'),
      (gen_random_uuid (), 'BiAnnual', '2 Season');
      

INSERT INTO plant_status (id, status_name, description) 
VALUES(gen_random_uuid (), 'Own', ' '),
      (gen_random_uuid (), 'Purchase', ' '),
      (gen_random_uuid (), 'Save For Later', ' ');


INSERT INTO plant_size (id, size_name, description) 
VALUES(gen_random_uuid (), '4.5', ' '),
      (gen_random_uuid (), '6', ' '),
      (gen_random_uuid (), '8', ' '),
      (gen_random_uuid (), '1 gallon', ' ');