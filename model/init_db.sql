DROP TABLE IF EXISTS skateMoves;


CREATE TABLE skateMoves(
    id INT NOT NULL PRIMARY KEY,
    level VARCHAR(100),
    name VARCHAR(100),
    video VARCHAR(100),
    category VARCHAR(100)
);

INSERT INTO skateMoves (id, level, name, video, category)
VALUES (1, "beginner", "ploughStop","vTransition.mp4", "stops"),
(2, "intermediate", "tStop","tStop.mp4", "stops"),
(3, "advanced", "toeStop", "toeStop.mp4", "stops"),
(4, "beginner", "vTransition", "vTransition.mp4", "transitions"),
(5, "intermediate", "pivotTransition", "pivotTransition.mp4", "transitions"),
(6, "advanced", "manuelTransition", "manuelTransition.mp4", "transitions");

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
