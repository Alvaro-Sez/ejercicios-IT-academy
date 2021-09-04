-- 1
SELECT nombre
FROM tienda.producto;

-- 2
SELECT
	nombre,
	precio
FROM tienda.producto;

-- 3
SELECT *
FROM tienda.producto;

-- 4 asumire que el precio de la tabla es en euros
SELECT precio AS precio_euros,
(precio*1.1) AS precio_USD
FROM tienda.producto;

-- 5 asumire que el precio de la tabla es en euros
SELECT nombre,
precio AS precio_euros,
(precio*1.1) AS precio_USD
FROM tienda.producto;

-- 6 
SELECT UPPER(nombre) as NOMBRE,
precio
FROM tienda.producto;

-- 7
SELECT LOWER(nombre) as nombre,
precio
FROM tienda.producto;

-- 8
SELECT nombre,
LEFT(UPPER(nombre),2) solucio
FROM tienda.fabricante;

-- 9
SELECT nombre,
ROUND(precio) AS arrodonint
FROM tienda.producto;

-- 10
SELECT nombre,
FLOOR(precio) truncat
FROM tienda.producto;

-- 11
SELECT f.codigo
FROM tienda.producto p
JOIN tienda.fabricante f
	ON f.codigo = p.codigo_fabricante;

-- 12
SELECT DISTINCT f.codigo
FROM tienda.producto p
JOIN tienda.fabricante f
	ON f.codigo = p.codigo_fabricante;
    
-- 13
SELECT nombre
FROM tienda.fabricante
ORDER BY nombre;

-- 14
SELECT nombre
FROM tienda.fabricante
ORDER BY nombre DESC;

-- 15
SELECT nombre,
precio
FROM tienda.producto
ORDER BY nombre ASC, precio DESC;

-- 16
SELECT *
FROM tienda.fabricante
LIMIT 5;

-- 17
SELECT *
FROM tienda.fabricante
LIMIT 3,2;

-- 18
SELECT nombre,
precio
FROM tienda.producto
ORDER BY precio
LIMIT 1;

-- 19
SELECT nombre,
precio
FROM tienda.producto
ORDER BY precio DESC
LIMIT 1;

-- 20
SELECT nombre
FROM tienda.producto
WHERE codigo_fabricante = 2;

-- 21
SELECT 
	p.nombre producto,
	p.precio,
    f.nombre fabricante
FROM tienda.producto p
JOIN tienda.fabricante f
	ON p.codigo_fabricante = f.codigo;

-- 22
SELECT 
	p.nombre producto,
	p.precio,
    f.nombre fabricante
FROM tienda.producto p
JOIN tienda.fabricante f
	ON p.codigo_fabricante = f.codigo
ORDER BY fabricante;

-- 23
SELECT 
	p.codigo codigo_producto,
    p.nombre producto,
    p.codigo_fabricante,
	f.nombre fabricante
FROM tienda.producto p
JOIN tienda.fabricante f
	ON p.codigo_fabricante = f.codigo;

-- 24
SELECT 
	p.nombre producto,
	p.precio,
    f.nombre fabricante
FROM tienda.producto p
JOIN tienda.fabricante f
	ON p.codigo_fabricante = f.codigo
ORDER BY p.precio 
LIMIT 1;

-- 25
SELECT 
	p.nombre producto,
	p.precio,
    f.nombre fabricante
FROM tienda.producto p
JOIN tienda.fabricante f
	ON p.codigo_fabricante = f.codigo
ORDER BY p.precio DESC
LIMIT 1;

-- 26
SELECT p.nombre
FROM tienda.producto p
JOIN tienda.fabricante f
	ON p.codigo_fabricante = f.codigo
WHERE f.nombre = 'Lenovo';

-- 27
SELECT p.nombre,
	p.precio
FROM tienda.producto p
JOIN tienda.fabricante f
	ON p.codigo_fabricante = f.codigo
WHERE f.nombre = 'Crucial' AND p.precio > 200;

-- 28
SELECT p.nombre,
	p.precio,
    f.nombre
FROM tienda.producto p
JOIN tienda.fabricante f
	ON p.codigo_fabricante = f.codigo
WHERE f.nombre REGEXP 'Asus|Hewlett-Packard|Seagate';

-- 29
SELECT p.nombre,
	p.precio,
    f.nombre
FROM tienda.producto p
JOIN tienda.fabricante f
	ON p.codigo_fabricante = f.codigo
WHERE f.nombre IN ('Asus','Hewlett-Packard','Seagate');

-- 30
SELECT p.nombre,
	p.precio,
    f.nombre
FROM tienda.producto p
JOIN tienda.fabricante f
	ON p.codigo_fabricante = f.codigo
WHERE f.nombre REGEXP 'e$';

-- 31
SELECT p.nombre,
	p.precio,
    f.nombre
FROM tienda.producto p
JOIN tienda.fabricante f
	ON p.codigo_fabricante = f.codigo
WHERE f.nombre REGEXP 'w'; 

-- 32
SELECT p.nombre,
	p.precio,
    f.nombre
FROM tienda.producto p
JOIN tienda.fabricante f
	ON p.codigo_fabricante = f.codigo
WHERE p.precio >= 180
ORDER BY p.precio DESC, p.nombre;

-- 33
SELECT DISTINCT f.codigo,
    f.nombre
FROM tienda.producto p
JOIN tienda.fabricante f
	ON p.codigo_fabricante = f.codigo;

-- 34
SELECT f.nombre fabricants,
	p.nombre productes
FROM tienda.producto p
RIGHT JOIN tienda.fabricante f
	ON p.codigo_fabricante = f.codigo;
    
-- 35
SELECT f.nombre fabricante,
	p.nombre producto
FROM tienda.fabricante f
LEFT JOIN tienda.producto p
	ON p.codigo_fabricante = f.codigo
WHERE p.nombre IS NULL;

-- 36
SELECT p.nombre producto,
	f.nombre fabricante
FROM tienda.producto p
LEFT OUTER JOIN tienda.fabricante f
	ON p.codigo_fabricante = f.codigo
WHERE f.nombre = 'Lenovo';

-- 37
SELECT *
FROM tienda.producto p, tienda.fabricante f
WHERE p.codigo_fabricante = f.codigo AND precio = (
	SELECT MAX(p.precio) max_lenovo_price
	FROM tienda.producto p, tienda.fabricante f
	WHERE p.codigo_fabricante = f.codigo AND f.nombre = 'Lenovo');

-- 38
SELECT f.nombre fabricants,
	p.nombre productes,
    precio
FROM tienda.producto p
JOIN tienda.fabricante f
	ON p.codigo_fabricante = f.codigo
WHERE f.nombre = 'Lenovo'
ORDER BY precio DESC
LIMIT 1;

-- 39
SELECT f.nombre fabricants,
	p.nombre productes,
    precio
FROM tienda.producto p
JOIN tienda.fabricante f
	ON p.codigo_fabricante = f.codigo
WHERE f.nombre = 'Hewlett-Packard'
ORDER BY precio 
LIMIT 1;

-- 40
SELECT *
FROM tienda.producto p
JOIN tienda.fabricante f
	ON p.codigo_fabricante = f.codigo
WHERE p.precio >= (SELECT MAX(p.precio)
			FROM tienda.producto p
			JOIN tienda.fabricante f
				ON p.codigo_fabricante = f.codigo
			WHERE f.nombre = 'Lenovo');

-- 41
SELECT *
FROM tienda.producto p
JOIN tienda.fabricante f
	ON p.codigo_fabricante = f.codigo
WHERE f.nombre ='Asus' 
	AND p.precio >=(SELECT AVG(precio)
				FROM tienda.producto p
				JOIN tienda.fabricante f
					ON p.codigo_fabricante = f.codigo
				WHERE f.nombre ='Asus')
    
