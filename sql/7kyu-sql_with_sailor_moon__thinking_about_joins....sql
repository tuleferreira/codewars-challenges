/* https://www.codewars.com/kata/5ab7a736edbcfc8e62000007 */

SELECT senshi_name   AS sailor_senshi, 
       real_name_jpn AS real_name, 
       ct.name       AS cat, 
       sc.school     AS school 
FROM   sailorsenshi ss
       LEFT JOIN cats ct 
              ON ss.cat_id = ct.id 
       LEFT JOIN schools sc 
              ON ss.school_id = sc.id; 