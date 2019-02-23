/* https://www.codewars.com/kata/5802e32dd8c944e562000020 */

SELECT *, products.name AS name, 
          products.id AS id, 
          companies.name AS company_name
FROM products
JOIN companies 
  ON products.company_id == companies.id;