CREATE DATABASE cuponera;

CREATE TABLE shops(
    shop_id SERIAL PRIMARY KEY,
    shop_name VARCHAR(60)
);

INSERT INTO shops(shop_name) VALUES ('C&A'), ('Renner');


CREATE TABLE malls(
    mall_id SERIAL PRIMARY KEY,
    mall_name VARCHAR(60)
);

INSERT INTO malls(mall_name) VALUES ('Shopping Maia'), ('Shopping west Plaza');

CREATE TABLE cupons(
    cupon_id SERIAL PRIMARY KEY,
    title VARCHAR(60),
    shop_id INT,
    mall_id INT,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    description VARCHAR(255),
    observation VARCHAR(255),
    photo bytea
);