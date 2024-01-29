/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 29/01/2024 - 15:45:44
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 29/01/2024
    * - Author          : belgacem
    * - Modification    : 
**/
SELECT invoices.amount, customers.name
FROM invoices
JOIN customers ON invoices.customer_id = customers.id
WHERE invoices.amount = 666;