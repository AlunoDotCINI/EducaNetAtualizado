DROP DATABASE EDUCANET;

CREATE DATABASE EDUCANET;
 
USE EDUCANET;
 
CREATE TABLE tb_user(
    userName varchar(45) NOT NULL,
    userLastName varchar(205) NOT NULL,
    password VARCHAR (25) NOT NULL,
    email VARCHAR (105) NOT NULL,
    userCpf VARCHAR (11) UNIQUE  NOT NULL,
    userVerification CHAR(1) NOT NULL,
    userRegistation DATE NOT NULL,
    userId bigint NOT NULL  primary key IDENTITY (1,1)
    
);
 
ALTER TABLE tb_user ADD CONSTRAINT VERIFICAOUSUARIO2 CHECK(userVerification IN('P', 'A'));
ALTER TABLE tb_user ADD CONSTRAINT APENASNUMEROS CHECK(userCpf not like '%[^0-9]%');
 
CREATE TABLE tb_course(
    courseId bigint PRIMARY KEY  IDENTITY (1,1) ,
    courseName VARCHAR(65),
    workload INT,
    description VARCHAR (500),
    courseClass varchar(20)
);
 
CREATE TABLE tb_user_course(
    userId bigint,
    FOREIGN KEY (userId) REFERENCES tb_user (userId),
    courseId bigint,
    FOREIGN KEY (courseId) REFERENCES tb_course (courseId),
    userCourseId bigint primary key IDENTITY (1,1)
);
 
CREATE TABLE tb_test (
    testDate DATE,
    testGrade FLOAT,
    userEmail VARCHAR (105),
    courseId bigint,
    FOREIGN KEY (courseId) REFERENCES tb_course(courseId)
);
CREATE TABLE tb_videoCourse(
    videoCourseId BIGINT PRIMARY KEY IDENTITY (1,1),
    videoCourseName VARCHAR(65) NOT NULL,
    videoCourseUrlId VARCHAR(30) NOT NULL,
    videoCourseDescription VARCHAR(500) NOT NULL,
    
    courseId bigint not null,
    FOREIGN KEY (courseId) REFERENCES tb_course(courseId)
)
Select * from tb_user
SELECT * FROM tb_course

INSERT INTO tb_course (courseName, workload, description, courseClass) VALUES 
('Introdução à Programação', 60, 'Curso básico de programação com foco em lógica e algoritmos.', 'Fundamental'),
('Estruturas de Dados', 80, 'Aprenda sobre estruturas de dados fundamentais como listas, pilhas e filas.', 'Intermediário'),
('Banco de Dados', 75, 'Fundamentos de banco de dados, incluindo modelagem e SQL.', 'Intermediário'),
('Desenvolvimento Web', 90, 'Curso sobre desenvolvimento de aplicações web utilizando HTML, CSS e JavaScript.', 'Avançado'),
('Machine Learning', 100, 'Introdução a técnicas de aprendizado de máquina e suas aplicações.', 'Avançado'),
('Inteligência Artificial', 95, 'Estudo de algoritmos de IA e suas aplicações em diferentes áreas.', 'Avançado'),
('Programação Orientada a Objetos', 70, 'Conceitos de POO e como aplicá-los em projetos.', 'Intermediário'),
('Testes de Software', 65, 'Metodologias e técnicas para garantir a qualidade do software.', 'Intermediário'),
('Desenvolvimento Móvel', 85, 'Criação de aplicativos para plataformas móveis, como Android e iOS.', 'Avançado'),
('Computação em Nuvem', 80, 'Conceitos de computação em nuvem e como implementar soluções na nuvem.', 'Intermediário');