-- 1
SELECT 
	apellido1,
    apellido2,
    nombre
FROM universidad.persona p
WHERE tipo = 'alumno'
ORDER BY apellido1, apellido2, nombre;

-- 2
SELECT 
	nombre,
    apellido1,
    apellido2
FROM universidad.persona p
WHERE tipo = 'alumno' AND telefono IS NULL;

-- 3
SELECT *
FROM universidad.persona p
WHERE fecha_nacimiento REGEXP '^1999' AND tipo = 'alumno';

-- 4
SELECT *
FROM universidad.persona p
WHERE tipo = 'profesor' AND telefono IS NULL AND nif REGEXP 'k$';

-- 5
SELECT *
FROM universidad.asignatura
WHERE cuatrimestre = 1 AND id_grado = 7 AND curso = 3;

-- 6
SELECT 
	apellido1,
    apellido2,
    p.nombre,
    dep.nombre
FROM universidad.persona p
JOIN universidad.profesor prof
	ON p.id = prof.id_profesor
JOIN universidad.departamento dep
	ON prof.id_departamento = dep.id;

-- 7
SELECT 
asi.nombre,
ce.anyo_inicio,
ce.anyo_fin
FROM universidad.persona p
JOIN alumno_se_matricula_asignatura matr
	ON p.id = matr.id_alumno
JOIN asignatura asi
	ON matr.id_asignatura = asi.id
JOIN curso_escolar ce
	ON ce.id = matr.id_curso_escolar
WHERE nif = '26902806M';

-- 8
SELECT DISTINCT dep.nombre
FROM universidad.persona p
JOIN universidad.profesor prof
	ON p.id = prof.id_profesor
JOIN universidad.asignatura asi
	ON prof.id_profesor = asi.id_profesor
JOIN universidad.grado g
	ON asi.id_grado = g.id
JOIN universidad.departamento dep
	ON prof.id_departamento = dep.id
WHERE g.nombre REGEXP 'Informática';

-- 9
SELECT DISTINCT
	p.nombre
FROM universidad.persona p
JOIN alumno_se_matricula_asignatura matr
	ON p.id = matr.id_alumno
JOIN asignatura asi
	ON matr.id_asignatura = asi.id
JOIN curso_escolar ce
	ON ce.id = matr.id_curso_escolar
WHERE anyo_inicio = 2018 AND anyo_fin = 2019 AND p.tipo = 'alumno';

-- Resolgui les 6 següents consultes utilitzant les clàusules LEFT JOIN i RIGHT JOIN.
-- 1
SELECT 
	dep.nombre,
    p.apellido1,
    p.apellido2,
    p.nombre
FROM universidad.profesor prof
RIGHT JOIN universidad.persona p
	ON p.id = prof.id_profesor
LEFT JOIN universidad.departamento dep
	ON prof.id_departamento = dep.id
WHERE p.tipo = 'profesor'
ORDER BY dep.nombre, p.apellido1, p.apellido2, p.nombre;

-- 2
SELECT *
FROM universidad.profesor prof
RIGHT JOIN universidad.persona p
	ON p.id = prof.id_profesor
LEFT JOIN universidad.departamento dep
	ON prof.id_departamento = dep.id
WHERE p.tipo = 'profesor' AND dep.nombre IS NULL;

-- 3
SELECT 
	dep.nombre
FROM universidad.persona p
JOIN universidad.profesor prof
	ON p.id = prof.id_profesor
RIGHT JOIN universidad.departamento dep
	ON prof.id_departamento = dep.id
WHERE p.nombre IS NULL;

-- 4
SELECT 
	p.apellido1,
    p.apellido2,
	p.nombre
FROM universidad.profesor prof
RIGHT JOIN universidad.persona p
	ON p.id = prof.id_profesor
LEFT JOIN universidad.asignatura asi
	ON asi.id_profesor = prof.id_profesor
WHERE asi.nombre IS NULL AND p.tipo = 'profesor';

-- 5
SELECT asi.nombre
FROM universidad.profesor prof
JOIN universidad.persona p
	ON p.id = prof.id_profesor
RIGHT JOIN universidad.asignatura asi
	ON asi.id_profesor = prof.id_profesor
WHERE p.nombre IS NULL;

-- 6
SELECT DISTINCT
	dep.nombre
FROM universidad.asignatura asi
JOIN universidad.profesor prof
	ON asi.id_profesor = prof.id_profesor
RIGHT JOIN universidad.departamento dep
	ON prof.id_departamento = dep.id
WHERE asi.nombre IS NULL;

-- consultas resum
-- 1
SELECT count(id) num_alumnos
FROM universidad.persona
WHERE tipo = 'alumno';

-- 2
SELECT count(id) num_alumnos
FROM universidad.persona p
WHERE fecha_nacimiento REGEXP '^1999' AND tipo = 'alumno';

-- 3
SELECT dep.nombre,
count(p.id) num_profesor
FROM universidad.persona p
JOIN universidad.profesor prof
	ON p.id = prof.id_profesor
JOIN universidad.departamento dep
	ON prof.id_departamento = dep.id
    GROUP BY dep.nombre
    ORDER BY num_profesor DESC;
    
-- 4
SELECT dep.nombre,
count(p.id) num_profesor
FROM universidad.persona p
JOIN universidad.profesor prof
	ON p.id = prof.id_profesor
RIGHT JOIN universidad.departamento dep
	ON prof.id_departamento = dep.id
    GROUP BY dep.nombre
    ORDER BY num_profesor DESC;

-- 5
SELECT 
	g.nombre,
    count(asi.nombre) numero_asignaturas
FROM universidad.grado g
LEFT JOIN asignatura asi
	ON g.id = asi.id_grado
GROUP BY g.nombre
ORDER BY numero_asignaturas DESC;

-- 6
SELECT 
	g.nombre,
    count(asi.nombre) numero_asignaturas
FROM universidad.grado g
LEFT JOIN asignatura asi
	ON g.id = asi.id_grado
GROUP BY g.nombre
HAVING numero_asignaturas > 40
ORDER BY numero_asignaturas DESC;

-- 7
SELECT 
	g.nombre,
    asi.tipo,
    SUM(asi.creditos) suma_creditos
FROM universidad.grado g
RIGHT JOIN asignatura asi
	ON g.id = asi.id_grado
GROUP BY asi.tipo, g.nombre
ORDER BY g.nombre;

-- 8
SELECT 
	ce.anyo_inicio,
    count(p.nombre) alumnos_matriculados
FROM universidad.persona p
JOIN alumno_se_matricula_asignatura matr
	ON p.id = matr.id_alumno
JOIN asignatura asi
	ON matr.id_asignatura = asi.id
JOIN curso_escolar ce
	ON ce.id = matr.id_curso_escolar
GROUP BY ce.anyo_inicio;

-- 9
SELECT
	p.id,
	p.nombre,
    p.apellido1,
    p.apellido2,
    count(asi.nombre) numero_asignaturas
    
FROM universidad.persona p
LEFT JOIN universidad.asignatura asi
	ON p.id = asi.id_profesor
WHERE p.tipo = 'profesor'
GROUP BY p.nombre
ORDER BY numero_asignaturas DESC;

-- 10
SELECT *
FROM universidad.persona p
WHERE tipo = 'alumno' 
ORDER BY fecha_nacimiento DESC
LIMIT 1;

-- 11
SELECT 
	p.id,
    p.nif,
    p.nombre,
    p.apellido1,
    p.apellido2
FROM universidad.profesor prof
LEFT JOIN universidad.asignatura asi
	ON prof.id_profesor = asi.id_profesor
JOIN universidad.persona p
	ON prof.id_profesor = p.id
WHERE prof.id_departamento IS NOT NULL AND asi.nombre IS NULL;







