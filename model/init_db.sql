DROP TABLE IF EXISTS skateMoves;


CREATE TABLE skateMoves(
    id INT NOT NULL PRIMARY KEY,
    level VARCHAR(255),
    name VARCHAR(255),
    video VARCHAR(255),
    category VARCHAR(255),
    description VARCHAR(500)
);

INSERT INTO skateMoves (id, level, name, video, category, description)
VALUES (1, "Beginner", "PloughStop","vTransition.mp4", "stops", "Plow/plough stop is a must-have skill for any roller skater. It is one of the basics method of stopping, the first one to learn before t-stop and turn-around toe stop."),
(2, "Intermediate", "TStop","tStop.mp4", "stops", "The T-stop is a very easy and effective way to come to a full halt."),
(3, "Advanced", "ToeStop", "toeStop.mp4", "stops", "The toe stops come in handy for much more than breaking. By mastering these 5 techniques your life as a roller skater will become much easier and fun.Using the toe stop as a break takes a little to get used to. But by using the instructions in this video, you’ll get the hold of it in no time."),
(4, "Beginner", "VTransition", "vTransition.mp4", "transitions", "this move does not take that long to learn and master.If you are having trouble maintaining balance with this transition, hold your arms out to the side. This will prevent you from falling over to one side and maintain a good, set balance."),
(5, "Intermediate", "PivotTransition", "pivotTransition.mp4", "transitions", "Now this one can be a little bit scary if you're going at speed to transition. Take it slow and steady!"),
(6, "Advanced", "ManualTransition", "manuelTransition.mp4", "transitions", "staggering the feet is the most important step,The trick is to look forward while coming into the jump, and keep looking the same way after you jump, No need to turn your head.");

-- CREATE TABLE cats(
--     id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--     name VARCHAR(100),
--     video VARCHAR(100),
--     category VARCHAR(100)
-- );
-- INSERT INTO cats (id,  name, video, category)
-- VALUES (1, "beginner", "ploughStop","vTransition.mp4", "stops"),
-- (2, "intermediate", "tStop","tStop.mp4", "stops"),
-- (3, "advanced", "toeStop", "toeStop.mp4", "stops"),
-- (4, "beginner", "vTransition", "vTransition.mp4", "transitions"),
-- (5, "intermediate", "pivotTransition", "pivotTransition.mp4", "transitions"),
-- (6, "advanced", "manuelTransition", "manuelTransition.mp4", "transitions");

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL
);

-- user1 has password pass1 (etc)
INSERT INTO `users` (username, password, email)
VALUES 
    ('user1','$2b$12$eFzMWbS9SogNtxkmo3J7aO8FQMFQSKbtpwLMIOVsF6GGKpTQdgq.W','user1@acme.com'),
    ('user2','$2b$12$WZcGPyrkCvD5e8m0Qz/nFOdBryUcsp6uDlE2MDo/AjuBhPrQBCfI6','user2@acme.com'),
    ('user3','$2b$12$tiAz4eaXlpU.CdltUVvw6udLA2BWsitk5zXM2XOm2IpAeAiFfMCdy','user3@acme.com');


DROP TABLE IF EXISTS data;
CREATE TABLE data (
    id INT 
    name VARCHAR(50), 
    latitude DECIMAL(10),
    longitude DECIMAL(10)

);
INSERT INTO `data` (name, latitude, longitude)
VALUES ('Arc de Triomf','41.3910011377','2.1806165884852824');
    
