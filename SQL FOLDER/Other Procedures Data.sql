use my_classroom;

Drop procedure if exists CreateClassroom;
DELIMITER ;;

CREATE  DEFINER=`root`@`localhost` PROCEDURE `CreateClassroom`(
IN TeacherUsername varchar(35),
IN name varchar(50),
IN title varchar(50),
IN code varchar(50),
IN unique_code varchar(50),
IN descript varchar(50)
)
COMMENT 'Creating Classroom by the teacher'
sp: BEGIN
     declare flag int;
	 DECLARE exit handler for sqlexception
	   BEGIN
		 -- ERROR
         select "error"
	   ROLLBACK;
	 END;
	   
	 DECLARE exit handler for sqlwarning
	  BEGIN
		 -- WARNING
         select "warning"
	  ROLLBACK;
	 END;

	START TRANSACTION;
    SET FOREIGN_KEY_CHECKS=0;
		 Select count(*) into flag from user where user.username = TeacherUsername;
		 if flag = 0 then
			leave sp;
		 end if;  set flag = 0;   -- for using it again
		
	select 2;
		  Select count(*) into flag from teacher where teacher.username = TeacherUsername;
          if flag = 0 then
              Insert into Teacher values(TeacherUsername);
		  end if; set flag = 0;

	select 3 ;
		INSERT INTO class
		(`username`,`class_name`,`course_title`,`Course_Code`,`Unique_Class_code`,`Date_created`,`descript`)
		values (TeacherUsername ,name, title, code, unique_code, now(), descript);
	
    
	select 4;
         
    COMMIT;
	END ;;
DELIMITER ;



Drop procedure JoinClassroom;
DELIMITER ;;
CREATE  DEFINER=`root`@`localhost` PROCEDURE `JoinClassroom`(
IN stdUsername varchar(35),
IN unique_class_code varchar(50)
)
COMMENT 'Join Classroom by the Student'
sp: BEGIN
     DECLARE flag int; DECLARE var_id int;
     Declare teacherUsername varchar(35);
     
	 DECLARE exit handler for sqlexception
	   BEGIN
		  select "error"
	   ROLLBACK;
	 END;
	   
	 DECLARE exit handler for sqlwarning
	  BEGIN
         select "warning"
	  ROLLBACK;
	 END;

	START TRANSACTION;
    SET FOREIGN_KEY_CHECKS=0;
    
                         -- Verification here--
                         
		 Select count(*) into flag from user where user.username = stdUsername;
		 if flag = 0 then
			leave sp;
		 end if;  set flag = 0;   -- for using it again
	select 1;
      
		 Select count(*),class_id, username into flag, var_id,teacherUsername from class
             where class.unique_class_code = unique_class_code;
		if flag = 0 or teacherUsername = stdUsername then
			leave sp;
		 end if;  set flag = 0;   -- for using it again         
         
         
                                  -- logic here -- 
                                 
	select 2;
		 --  select class_id into var_id from class where class.unique_class_code = unique_class_code;
		  Insert into student values(stdUsername,var_id,null,now());
	
    select 3;   
         
    COMMIT;
	END ;;
DELIMITER ;













Drop procedure if exists CreatePost;
DELIMITER ;;
CREATE  DEFINER=`root`@`localhost` PROCEDURE `CreatePost`(
IN teacherUsername varchar(35),
IN class_id varchar(50),
IN title varchar(50),
IN descript varchar(300)
)
COMMENT 'post created by the teacher'
sp: BEGIN
     DECLARE flag int; DECLARE var_id int;
	 DECLARE exit handler for sqlexception
	   BEGIN
		  select "error"
	   ROLLBACK;
	 END;
	   
	 DECLARE exit handler for sqlwarning
	  BEGIN
         select "warning"
	  ROLLBACK;
	 END;

	START TRANSACTION;
    SET FOREIGN_KEY_CHECKS=0;
    
                         -- Verification here--
	select 1;
		Select count(*) into flag from class where class.class_id = class_id and class.username = teacherUsername;
		 if flag = 0 then
			leave sp;
		 end if;  set flag = 0;   -- for using it again
	select 2;      
		
                         -- logic here--
        
	select 3;
		INSERT INTO post (`username`,`class_id`,`title`,`descript`,`dateCreated`)
		   VALUES (teacherUsername, class_id, title, descript, now());

    select 3;   
         
    COMMIT;
	END ;;
DELIMITER ;











Drop procedure if exists CreateAssignment;
DELIMITER ;;
CREATE  DEFINER=`root`@`localhost` PROCEDURE `CreateAssignment`(
IN teacherUsername varchar(35),
IN class_id varchar(50),
IN title varchar(50),
IN totalMarks int,
IN due_date varchar(30),
IN descript varchar(300)
)
COMMENT 'Assignment created by the teacher'
sp: BEGIN
     DECLARE flag int; DECLARE var_id int;
     Declare date_ datetime;
     
	 DECLARE exit handler for sqlexception
	   BEGIN
		  select "error"
	   ROLLBACK;
	 END;

	START TRANSACTION;
    SET FOREIGN_KEY_CHECKS=0;
    
                         -- Verification here--
	select 1;
		Select count(*) into flag from class where class.class_id = class_id and class.username = teacherUsername;
		 if flag = 0 then
			leave sp;
		 end if;  set flag = 0;   -- for using it again
	select 2;      
		
        
                              -- logic here--
        
	select 3;
   select convert(CAST(due_date AS DATE), datetime) into date_;
	select date_;
		INSERT INTO `my_classroom`.`assignment`
        (`username`,`class_id`,`a_title`,`total_marks`,`Date_created`,`due_date`,`descript`)
        values
        (teacherUsername, class_id, title,totalMarks, now(), date_ ,descript);

    select 4; 
	   
    COMMIT;
	END ;;
DELIMITER ;













Drop procedure if exists RemoveStudentFromClass;
DELIMITER ;;
CREATE  DEFINER=`root`@`localhost` PROCEDURE `RemoveStudentFromClass`(
IN teacherUsername varchar(35),
IN class_id varchar(50),
IN stdUsername varchar(35)
)
COMMENT 'Assignment created by the teacher'
sp: BEGIN
     DECLARE flag int; DECLARE var_id int;
     Declare date_ datetime;
     
	 DECLARE exit handler for sqlexception
	   BEGIN
		  select "error"
	   ROLLBACK;
	 END;

	START TRANSACTION;
    SET FOREIGN_KEY_CHECKS=0;
    
                         -- Verification here--
	select 1;
		Select count(*) into flag from class c join student s on s.class_id = c.class_id 
        where c.class_id = class_id and c.username = teacherUsername and s.username = stdUsername;
		 if flag = 0 then
			leave sp;
		 end if;  set flag = 0;   -- for using it again
    select 2;     
    
							-- logic here--
                            
         delete from Student s where s.class_id = class_id and s.username = stdUsername;
	select 3;      
		
    COMMIT;
	END ;;
DELIMITER ;







Drop procedure if exists ViewAllPost;
DELIMITER ;;
CREATE  DEFINER=`root`@`localhost` PROCEDURE `ViewAllPost`(
IN class_id varchar(50)
)
COMMENT 'All posts to be viewed in the classroom'
sp: BEGIN
     DECLARE flag int; DECLARE var_id int;
	 DECLARE exit handler for sqlexception
	   BEGIN
		  select "error"
	   ROLLBACK;
	 END;
	   
	 DECLARE exit handler for sqlwarning
	  BEGIN
         select "warning"
	  ROLLBACK;
	 END;

	START TRANSACTION;
    SET FOREIGN_KEY_CHECKS=0;
    
                         -- Verification here--
	select 1;
		Select count(*) into flag from class where class.class_id = class_id;
        if flag = 0 then
			leave sp;
		 end if;  set flag = 0;   -- for using it again
	select 2;      
		
                         -- logic here--
                         
          Select p.* from class c join post p on c.class_id = p.class_id 
          where c.class_id = class_id order by p.dateCreated desc;
          
    COMMIT;
	END ;;
DELIMITER ;




Drop procedure if exists AllStudents;
DELIMITER ;;
CREATE  DEFINER=`root`@`localhost` PROCEDURE `AllStudents`(
IN class_id int
)
COMMENT 'All Students of the class'
sp: BEGIN
     DECLARE flag int; 
     DECLARE exit handler for sqlexception
	   BEGIN
		  select "error"
	   ROLLBACK;
	 END;
	   
	 DECLARE exit handler for sqlwarning
	  BEGIN
         select "warning"
	  ROLLBACK;
	 END;

	START TRANSACTION;
    SET FOREIGN_KEY_CHECKS=0;
    
                         -- Verification here--
	select 1;
		Select count(*) into flag from class where class.class_id = class_id;
        if flag = 0 then
			leave sp;
		 end if;  set flag = 0;   -- for using it again	
    select 2; 
    
                         -- logic here--
                         
          Select s.* from class c join student s on c.class_id = s.class_id and s.class_id= class_id;
          
    COMMIT;
	END ;;
DELIMITER ;









Drop procedure if exists CommentOnPost;
DELIMITER ;;
CREATE  DEFINER=`root`@`localhost` PROCEDURE `CommentOnPost`(
IN post_id int,
IN by_student varchar(35),
IN by_Teacher varchar(35),
IN comment_text varchar(255)
)
COMMENT 'All comments on the post'
sp: BEGIN
     DECLARE flag int; 
     DECLARE teacherUsername varchar(35); DECLARE class_id__ int;
	 
     DECLARE exit handler for sqlexception
	   BEGIN
		  select "error"
	   ROLLBACK;
	 END;
	   
	 DECLARE exit handler for sqlwarning
	  BEGIN
         select "warning"
	  ROLLBACK;
	 END;

	START TRANSACTION;
    SET FOREIGN_KEY_CHECKS=0;
    
                         -- Verification here--
	select 1;
		Select count(*), username, class_id into flag, teacherUsername, class_id__ 
        from post p where p.post_id = post_id;

	select -1;
        if flag = 0 then
			leave sp;
		 end if;  set flag = 0;   -- for using it again
	
    
								-- logic --
    select 2;
	    if by_student is not null and by_teacher is not null then   -- one user can comment at one time.
          leave sp;
	    end if;              

     select 3;   
    	if by_student is not null  then
                  -- student enrolled in the class or not.
			select count(*) into flag from class c join student s on c.class_id = s.class_id
            where c.class_id = class_id__ and s.username = by_student;
			if flag = 0 then
				leave sp;
			 end if;  set flag = 0;   -- for using it again  
             
             INSERT INTO post_comment
            (`post_id`,`teacher_username`,`class_id`,`comment_time`,
            `comment_text`,`comment_by_std_username`,`comment_by_teacher_username`)
            VALUES(post_id, teacherUsername, class_id__, now(), comment_text, by_student,null);
         end if;
         
	  select 4;
    	if by_teacher is not null  then
		   select if(by_teacher = teacherUsername, 1, 0) into flag;
		   if  flag = 0  then    -- valid teacher username be provided.
			   leave sp;
			end if;
		
            INSERT INTO post_comment
            (`post_id`,`teacher_username`,`class_id`,`comment_time`,
            `comment_text`,`comment_by_teacher_username`)
            VALUES(post_id, teacherUsername, class_id__, now(), comment_text, teacherUsername);
	    end if;
	 
     select 5;        
            
    COMMIT;
	END ;;
DELIMITER ;







Drop procedure if exists AllCommentsOnPost;
DELIMITER ;;
CREATE  DEFINER=`root`@`localhost` PROCEDURE `AllCommentsOnPost`(
IN post_id int
)
COMMENT 'All Comments on a post in the class'
sp: BEGIN
     DECLARE flag int; 
     DECLARE exit handler for sqlexception
	   BEGIN
		  select "error"
	   ROLLBACK;
	 END;
	   
	 DECLARE exit handler for sqlwarning
	  BEGIN
         select "warning"
	  ROLLBACK;
	 END;

	START TRANSACTION;
    SET FOREIGN_KEY_CHECKS=0;
    
                         -- Verification here--
	select 1;
		Select count(*) into flag from post where post.post_id = post_id;
        if flag = 0 then
			leave sp;
		 end if;  set flag = 0;   -- for using it again	
    select 2; 
    
                         -- logic here--
                         
          Select pc.* from post p join post_comment pc on pc.post_id = p.post_id 
          order by pc.comment_time asc;
          
    COMMIT;
	END ;;
DELIMITER ;







Drop procedure if exists AssignGrade;
DELIMITER ;;
CREATE  DEFINER=`root`@`localhost` PROCEDURE `AssignGrade`(
IN assignment_id varchar(35),
IN stdUsername varchar(35),
IN MarksObt int
)
COMMENT 'Assign Grade by the teacher to a specific Student'
sp: BEGIN
     DECLARE flag int; DECLARE flag2 int;
     DECLARE class_id__ int; Declare teacherUsername varchar(35);
     
	 DECLARE exit handler for sqlexception
	   BEGIN
		  select "error"
	   ROLLBACK;
	 END;

	START TRANSACTION;
    SET FOREIGN_KEY_CHECKS=0;
    
                         -- Verification here--
                         
	select 1;   -- checking if assignment exists
		Select count(*),class_id, username into flag, class_id__,teacherUsername
        from assignment where a_id = assignment_id;                  
		 if flag = 0 then
			leave sp;
		 end if;  set flag = 0;   -- for using it again
	
    
    select 2;  -- checking if student enrolled in the class.
        select count(*) into flag from student 
        where class_id = class_id__ and username = stdUsername;
		 if flag = 0 then
			leave sp;
		 end if;  set flag = 0;   -- for using it again
         
        
                              -- logic here--
        
	select 3;
	select count(*) into flag2 from grade
	where std_username = stdUsername and assign_id = assignment_id;

	select "3*";
		if flag2 = 0 then
			select "4*";
			INSERT INTO `my_classroom`.`grade`
			(`std_username`,`assign_id`,`teacher_username`,`class_id`,`marks_obtained`)
			VALUES (stdUsername, assignment_id, teacherUsername, class_id__, MarksObt);
		else 
			select "4**";
			update `my_classroom`.`grade`        -- 
			set marks_obtained = MarksObt 
			where std_username = stdUsername and assign_id = assignment_id; 
		
		end if;  set flag2 = 0;   -- for using it again
    
    select 5; 
	   
    COMMIT;
	END ;;
DELIMITER ;












Drop procedure if exists ViewGrade;
DELIMITER ;;
CREATE  DEFINER=`root`@`localhost` PROCEDURE `ViewGrade`(
IN assignment_id varchar(35),
IN stdUsername varchar(35)
)
COMMENT 'View Grade by the student or Teacher'
sp: BEGIN
     DECLARE flag int; DECLARE flag2 int;
     DECLARE class_id__ int; Declare teacherUsername varchar(35);
     
	 DECLARE exit handler for sqlexception
	   BEGIN
		  select "error"
	   ROLLBACK;
	 END;

	START TRANSACTION;
    SET FOREIGN_KEY_CHECKS=0;
    
    select 1; 
		Select count(*) into flag from grade
        where assign_id = assignment_id and std_username = stdUsername;              
		 if flag = 0 then
			leave sp;
		 end if;  set flag = 0;   -- for using it again

	select 2;           
    	Select * from grade
        where assign_id = assignment_id and std_username = stdUsername;          
	   
    COMMIT;
	END ;;
DELIMITER ;


