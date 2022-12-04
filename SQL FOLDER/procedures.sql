Drop procedure CreateTables;
 
DELIMITER ;;
CREATE  DEFINER=`root`@`localhost` PROCEDURE `CreateTables`()
DETERMINISTIC
COMMENT 'Creating all necessary tables'
BEGIN

	 DECLARE exit handler for sqlexception
	   BEGIN
		 -- ERROR
	   ROLLBACK;
	 END;
	   
	 DECLARE exit handler for sqlwarning
	  BEGIN
		 -- WARNING
	  ROLLBACK;
	 END;

	START TRANSACTION;

	Create table if not exists user (
			  username varchar(35) primary key,
			  f_name varchar(35),
			  l_name varchar(35),
			  user_password varchar(50),
			  email varchar(35),
			  phone_no varchar(15),
			  gender varchar(1),               -- check it later
			  age int
		   );
		   
		Create table if not exists Teacher (   -- needs updation 
			username varchar(35),
			
			FOREIGN KEY (username) REFERENCES user(username),
			primary key (username)
		);

		Create table if not exists Class (
			class_id int AUTO_INCREMENT,
			username varchar(35),
			class_name varchar(35) Not Null,
			course_title varchar(35) Not Null,
			Course_Code varchar(35) unique,
            Unique_Class_code varchar(15) unique,
			Date_created dateTime,
			descript varchar(300),
			
			
			FOREIGN KEY (username) REFERENCES Teacher(username),
			primary key (class_id,username)
		);

		Create table if not exists Student (  -- needs updation
			username varchar(35),
			class_id int,
			Department varchar(35),
			Date_joined dateTime,
			
			FOREIGN KEY (username) REFERENCES user(username),
			FOREIGN KEY (class_id) REFERENCES class(class_id),
			primary key (class_id,username)
		);



		Create table if not exists Post (
			post_id int AUTO_INCREMENT,    -- one class can have multiple posts, so use id to distinguish betweeen them.
			username varchar(35),
			class_id int,
			title varchar(35),
			descript varchar(300),
			dateCreated dateTime,
			
			FOREIGN KEY (username) REFERENCES class(username),
			FOREIGN KEY (class_id) REFERENCES class(class_id),
			primary key (post_id,username,class_id)
		);

		Create table if not exists Assignment (
			a_id int AUTO_INCREMENT,       -- one class can have multiple assignments, so use id to distinguish betweeen them.
			username varchar(35),
			class_id int,
			a_title varchar(35),
			total_marks int,
			Date_created dateTime,
			due_date dateTime,
			descript varchar(300),
			
			
			FOREIGN KEY (username) REFERENCES class(username),
			FOREIGN KEY (class_id) REFERENCES class(class_id),
			primary key (a_id,username,class_id)
		);





		Create table if not exists Grade (
			std_username varchar(35),         -- graded to which student
			
			assign_id int,                    -- graded on which assignment
			teacher_username varchar(35),     -- graded by which teacher
			class_id int,                     -- graded to which class
			
			marks_obtained float,

			FOREIGN KEY (teacher_username) REFERENCES Assignment(username),
			FOREIGN KEY (assign_id) REFERENCES Assignment(a_id),
			FOREIGN KEY (class_id) REFERENCES Assignment(class_id),
			FOREIGN KEY (std_username) REFERENCES student(username),
			
			primary key (std_username, assign_id, class_id, teacher_username)
		);


		Create table if not exists post_comment (
			comment_id int AUTO_INCREMENT,    -- post can has multiple comments
			
			post_id int ,                     -- post number of the class (class can have many posts).
			teacher_username varchar(35),     -- teacher who created the post
			class_id int,                     -- post of which class
			
			comment_time datetime not null,
			comment_text varchar(255) not null,
			comment_by_std_username varchar(35) default null,    -- comment can be made either by teacher and student
			comment_by_teacher_username varchar(35) default null,

			FOREIGN KEY (teacher_username) REFERENCES post(username),
			FOREIGN KEY (post_id) REFERENCES post(post_id),
			FOREIGN KEY (class_id) REFERENCES post(class_id),
			
			FOREIGN KEY (comment_by_std_username) REFERENCES student(username),
			FOREIGN KEY (comment_by_teacher_username) REFERENCES teacher(username),
			
			primary key (comment_id, post_id, class_id, teacher_username)
		);


		Create table if not exists Assignment_Submission (
			
			std_username varchar(35),         -- submission by student
			
			assign_id int,                    -- assignment id in the respective class
			teacher_username varchar(35),     -- assignment prepared/shared by which teacher
			class_id int,                     -- assignment of which class
			
			FOREIGN KEY (teacher_username) REFERENCES Assignment(username),
			FOREIGN KEY (assign_id) REFERENCES Assignment(a_id),
			FOREIGN KEY (class_id) REFERENCES Assignment(class_id),
			FOREIGN KEY (std_username) REFERENCES student(username),
			
			primary key (std_username, assign_id, class_id, teacher_username)
		);

	COMMIT;
	END ;;
DELIMITER ;