# DBMS Practical - Fresh SQL Question Set

**Database:** `DBMS_Practice_New` (MySQL 8.x). Run `dbms_practical_setup.sql` first.

**Practice rule:** Try each query yourself before checking anything. Questions contain no solutions. For questions involving `ALTER`, `UPDATE`, or `DELETE`, rerun the setup script if you want to restore the original data.

## A. Basic SELECT and filtering
1. Display the names and prices of all products, from most expensive to least expensive.
2. Display products whose price is between ₹1,000 and ₹20,000, inclusive.
3. Find products whose names contain the word `in`.
4. Display customers who live in Delhi or Mumbai and are younger than 30.
5. Display products that have fewer than 20 units in stock, excluding products priced above ₹20,000.
6. Display orders placed during September 2026.
7. List customers whose names start with `S` or end with `a`.
8. Display products that are not in the Books or Fitness categories. Use a subquery for the category names.
9. Show each product's name and a calculated column `StockValue` equal to `Price * Stock`.
10. Display distinct cities represented in the Customer table, in alphabetical order.

## B. DDL, constraints, and data modification
11. Create a table `Review` with `ReviewID` as primary key, `CustomerID` as a foreign key, `ProductID` as a foreign key, `Rating` constrained to 1 through 5, and an optional `ReviewText` column.
12. Add a `Phone` column to `Customer` with a suitable data type.
13. Add a constraint so product stock cannot be negative. If a similar constraint already exists, explain how you would inspect it before adding another.
14. Increase the price of every Books product by 8%.
15. Reduce stock by 3 for products with stock greater than 10, but do not allow the update to make stock negative.
16. Change the city of customer 7 to `Dehradun`.
17. Delete cancelled orders. Consider the foreign-key relationship with `OrderItem` and determine the correct deletion order.
18. Create a view named `ProductDetails` showing product name, category name, supplier name, price, and stock.

## C. Aggregate functions, GROUP BY, and HAVING
19. Find the total number of customers in each city.
20. Find the average product price in each category.
21. Display categories whose average product price exceeds ₹5,000.
22. Find the total units sold for each product. Include products that have never appeared in an order.
23. Find the number of orders placed by each customer, including customers with zero orders.
24. Find the total order-item value (`Quantity * UnitPrice`) for each order.
25. Find the maximum and minimum product prices supplied by each supplier.
26. Display customer cities with at least two customers.
27. Count orders by status and display only statuses with more than one order.
28. Find the average age of customers who have placed at least one order.

## D. Joins
29. Display each order ID, order date, status, and customer name.
30. Display product name, category name, supplier name, and product price.
31. Display all customers and their orders, including customers who have never placed an order.
32. Display all categories and their products, including categories with no products.
33. Display all suppliers and the products they supply, including suppliers with no products.
34. Display each order ID with the products in that order, their quantities, unit prices, and line totals.
35. Find customers who bought a product from the Electronics category. Do not display duplicate customers.
36. Find pairs of different products that belong to the same category.

## E. Subqueries: scalar, correlated, ANY, ALL, and EXISTS
37. Find products priced above the overall average product price.
38. Find products priced above the average price of their own category. Use a correlated subquery.
39. Find customers whose age is greater than the average age of all customers from Delhi.
40. Find products whose price is greater than **ANY** price in the Books category.
41. Find products whose price is greater than **ALL** prices in the Fitness category.
42. Find customers who have placed at least one order using `EXISTS`.
43. Find customers who have never placed an order using `NOT EXISTS`.
44. Find products that have never been ordered, using a subquery rather than a JOIN.
45. Find the customer(s) who placed the most orders. Try a subquery; do not hard-code the count.
46. Find orders whose total item value is higher than the average total value of all orders. Use a nested query.

## F. Set operations and challenge questions
47. Display the cities that occur in either the Customer table or the Supplier table, without duplicates.
48. Display cities that occur in both Customer and Supplier. Use `INTERSECT` if supported by your DBMS; otherwise solve it with a join or `EXISTS`.
49. Display customer cities that do not occur in the Supplier table. Use `MINUS`/`EXCEPT` if supported, or `NOT EXISTS` as an alternative.
50. Find products that are either priced above ₹10,000 or have stock below 10, but list each product only once.
51. Find the second-highest distinct product price without using `LIMIT` or `ORDER BY` in the outer query.
52. Find the category with the highest average product price.
53. Display each customer and their total spend on non-cancelled orders. Customers with no qualifying orders should still appear with total spend 0.
54. Find customers who bought both a product in Electronics and a product in Books.
55. Find products whose price is greater than the average price of products supplied by the same supplier.

## Suggested exam simulation
- **Round 1 (20 min):** Questions 1-10, 19-21, 29-30.
- **Round 2 (25 min):** Questions 22-28, 31-36.
- **Round 3 (25 min):** Questions 37-46.
- **Final round (20 min):** Pick any 5 from Questions 11-18 and 47-55.

If your lab uses Oracle rather than MySQL, some syntax differs (`VARCHAR2`/`NUMBER`, date literals, `MINUS`, and constraint-alter syntax). Keep the question logic the same and adjust syntax to your lab DBMS.
