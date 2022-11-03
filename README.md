### Dependencies

- Run `npm install` in project directory. This will install server-related dependencies such as `express`.
- `cd client` and run `npm install`. This will install client dependencies (React).

### Database Prep

- Access the MySQL interface in your terminal by running `mysql -u root -p`
- Create a new database called facebook: `moves`
- Add a `.env` file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=moves
  DB_PASS=root
```

- Run `npm run migrate` in the project folder of this repository, in a new terminal window. This will create a table called 'skateMoves' in your database.

-In your MySQL console, you can run `use moves;` and then `describe skateMoves;` to see the structure of the table.

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

### Development

- Run `npm start` in project directory to start the Express server on port 5000
- In another terminal, do `cd client` and run `npm start` to start the client in development mode with hot reloading in port 5000.

### Bootstrap

CDN via jsDelivr
Skip the download with jsDelivr to deliver cached version of Bootstrap’s compiled CSS and JS to your project.

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
If you’re using our compiled JavaScript and prefer to include Popper separately, add Popper before our JS, via a CDN preferably.

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script>

Package managers
Pull in Bootstrap’s source files into nearly any project with some of the most popular package managers. No matter the package manager, Bootstrap will require a Sass compiler and Autoprefixer for a setup that matches our official compiled versions.

npm
Install Bootstrap in your Node.js powered apps with the npm package:

npm install bootstrap@5.2.2
const bootstrap = require('bootstrap') or import bootstrap from 'bootstrap' will load all of Bootstrap’s plugins onto a bootstrap object. The bootstrap module itself exports all of our plugins. You can manually load Bootstrap’s plugins individually by loading the /js/dist/\*.js files under the package’s top-level directory.

_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._
