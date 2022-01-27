-- 1. What is the average cost to rent a film in the Sakila stores?
SELECT rental_duration, AVG(rental_rate) AS "Average rental rate"
FROM film
GROUP BY rental_duration;

SELECT *
FROM film;

-- 2. What is the average rental cost of films by rating? On average, what is the cheapest rating of films to rent? Most expensive?
SELECT rating, AVG(rental_rate) AS "Average rental rate"
FROM film
GROUP BY rating;
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
SELECT MIN(length) AS "Short movie"
FROM film;
