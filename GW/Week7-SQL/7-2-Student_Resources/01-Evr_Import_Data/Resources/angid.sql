
Select *
FROM film;

--Find the row number:
SELECT COUNT(*) AS "Total films"
FROM film;

--Find the row number:
SELECT COUNT(film_id) AS "Total films"
FROM film;

--pivot table
--groupby
SELECT rating, COUNT(film_id) AS "Total Films"
FROM film
GROUP BY rating;

-- aggregate function
SELECT AVG(rental_duration) AS "Average rental duration"
FROM film;

-- Groupby the rental duration, average the rental rate and give alies
SELECT rental_duration, AVG(rental_rate) AS "Average rental rate"
FROM film
GROUP BY rental_duration;

-- Find the rows with minimum rental rate
SELECT rental_duration, MIN(rental_rate) AS "Min rental rate"
FROM film
GROUP BY rental_duration;

-- 1. What is the average cost to rent a film in the Sakila stores?
SELECT AVG(rental_rate) AS "Average rental rate"
FROM film;

SELECT *
FROM film;

-- 2. What is the average rental cost of films by rating? On average, what is the cheapest rating of films to rent? Most expensive?
SELECT rating, AVG(rental_rate) AS "Average rental rate"
FROM film
GROUP BY rating
ORDER BY "Average rental rate";
--min
SELECT rating, MIN(rental_rate) AS "MIN rental rate"
FROM film
GROUP BY rating;
-- 3. How much would it cost to replace all the films in the database?
SELECT SUM(replacement_cost) AS "Total replacement cost"
FROM film;

-- 4. How much would it cost to replace all the films in each ratings category?
SELECT rating, SUM(replacement_cost) AS "Total replacement cost"
FROM film
GROUP BY rating;

-- 5. How long is the longest movie in the database? The shortest?
SELECT MAX(length) AS "Max Length", MIN(length) AS "Min length"
FROM film;

SELECT rating, SUM(replacement_cost) AS "Total replacement cost"
FROM film
GROUP BY rating
ORDER BY "Total replacement cost" DESC
LIMIT 1;

SELECT ROUND(AVG(rental_rate),2)
FROM film;

--* Determine the count of actor first names ordered in descending order.

-- * Determine the average rental duration for each rating rounded to two decimals. Order these in ascending order.

-- * Determine the top 10 average replace costs for length of the movie. 
-- Select count of actors first names in descending order
SELECT first_name, COUNT(first_name) AS "First name number"
FROM actor
GROUP BY first_name
ORDER BY "First name number" DESC;
-- Select the average duration of movies by rating
SELECT rating, ROUND(AVG(length),2) AS "Average duration by rating"
FROM film
GROUP BY rating
ORDER BY "Average duration by rating";
-- Select top ten replace costs for the length of the movie
SELECT length, SUM(replacement_cost) AS "Replacement cost by length"
FROM film
GROUP BY length
ORDER BY "Replacement cost by length" DESC
LIMIT 10;
-- Select the count of countries
SELECT country_id, COUNT(country_id) AS "Number of cities"
FROM city
GROUP BY country_id
ORDER BY "Number of cities" DESC
LIMIT 10;
---- JOin 
SELECT *
FROM city LEFT JOIN country on city.country_id = country.country_id;
-------
SELECT country, COUNT(country) AS "Number of cities"
FROM city LEFT JOIN country on city.country_id = country.country_id
GROUP BY country
ORDER BY "Number of cities" DESC
LIMIT 10;


-- Find unique value in a given column
SELECT DISTINCT(customer_id)
FROM rental
ORDER BY customer_id;

-- distinct on both (the combination of the numbers are distinct, so no duplicate)
SELECT DISTINCT customer_id, inventory_id
FROM rental
ORDER BY customer_id;
--distinct on only 1 column
SELECT DISTINCT ON (customer_id) customer_id, rental_date
FROM rental
ORDER BY customer_id, rental_id DESC
LIMIT 10;
-- ### Instructions

-- 1. Retreive the latest rental for each customer's first and last name and emial address. 

-- 2. Retrieve the latest rental date for each title. 

--    * **Hint:** Join the `rental` and `inventory` tables on `inventory_id` and then join the `film` table with the `inventory` table on `film_id`. 

-- ## Bonus

-- * The last query only returned 958 movies, which means 42 movies are not being rented. We know that there are 1,000 movies in the `film` table. Retrieve the film titles of the 42 movies that are not in the `inventory` table. 

-- * **Hint:** You won't need to use `DISTINCT ON ()` for this solution. Determine if the `film_id` from the `film` table is `NOT IN` the `inventory` table. 
-- 1. Retreive the latest rental for each customer's first and last name and emial address. 
SELECT DISTINCT ON (r.customer_id)  c.first_name, c.last_name, c.email, rental_date
FROM rental AS r
INNER JOIN customer AS c
ON (r.customer_id = c.customer_id)
ORDER BY r.customer_id, r.rental_date DESC
;


-- 2. Retrieve the latest rental date for each title. 

SELECT DISTINCT title, rental_date
FROM rental 
   INNER JOIN
   inventory 
   ON rental.inventory_id = inventory.inventory_id
   INNER JOIN
   film
   ON inventory.film_id = film.film_id
ORDER BY rental_date DESC

SELECT DISTINCT ON (f.title) f.title, r.rental_date
FROM rental AS r
   INNER JOIN inventory AS i
   ON (r.inventory_id = i.inventory_id)
   INNER JOIN film AS f
   ON (i.film_id = f.film_id)
ORDER BY f.title, r.rental_date DESC
 
-- Bonus:
-- Query 2 only returned 958 movies, which means 42 movies are not being rented. 

-- We know that there are 1,000 movies in the `film` table. 
-- Retrieve the film titles of the 42 movies that are not in the `inventory` table. 

SELECT film_id, title
FROM film
WHERE film_id NOT IN(
	SELECT film_id
	FROM inventory
);




