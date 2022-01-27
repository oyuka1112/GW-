-- Select count of actors first names in descending order

-- Select the average duration of movies by rating

-- Select top ten replace costs for the length of the movie

-- Select the count of countries

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


SELECT *
FROM city LEFT JOIN country on city.country_id = country.country_id;
--
SELECT country, COUNT(country) AS "Number of cities"
FROM city LEFT JOIN country on city.country_id = country.country_id
GROUP BY country
ORDER BY "Number of cities" DESC
LIMIT 10;