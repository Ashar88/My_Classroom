
use my_classroom;
drop table if exists grade;
drop table if exists  dfdafnment_submission; 
drop table if exists Assignment_Submission;
drop table if exists assignment;
drop table if exists post_comment;
drop table if exists post;
drop table if exists student2nf;
drop table if exists student;
drop table if exists class;
drop table if exists teacher;
drop table if exists  user;


CALL `my_classroom`.`CreateTables`();


insert into user values("Ashar88","Ashar","Saleem","fast123","asharsaleem55@gmail.com"
                        ,"03323328439","M","20");
insert into user values("faizan88","faizan","Saleem","faizan123","faizan@gmail.com"
                        ,"03323327777","M","20");
insert into user values("haider92","haider","Neutral","neutrality","haider@gmail.com"
                        ,"03328937577","M","24");
insert into user values("Yousuf2","Yousuf","sharif","fast1234","yousuf@gmail.com"
                        ,"03312345678","M","20");
                        
                        
Call CreateClassroom("Yousuf2","DB-Fall 22","DB CS2005","890073","890073", "database class for section bse-5A",@var);
Call CreateClassroom("haider92","AP-Fall 22","DB CS2005","1254","1254", "database class for section bse-5A",@var);

 
 
 -- ****************** First verified input**********************
 
Call CreateClassroom("Yousuf2","DB-Fall 22","DB CS2005","73","73","database class for section bse-5A",@var);
Call CreateClassroom("faizan88","DB-Fall 22","DB CS2005","2743","2743" ,"database class for section bse-5A",@var);

-- Call DeleteClassroom(1,"Yousuf2", @var);

Call JoinClassroom("Yousuf2","1254",@var);
Call JoinClassroom("Ashar88","1254",@var);
Call JoinClassroom("Ashar88","73",@var);
Call JoinClassroom("Ashar88","2743",@var);

 -- ****************** First verified input**********************
 





 -- ****************** second verified input**********************
call CreatePost("haider92", "2", "Introduction to Database", "this is our first post for this classroom, here we will share with you the course outline",@var); 
call CreatePost("haider92", "2", "Introduction to Database", "this is our first post for this classroom",@var);
call CreatePost("haider92", "2", "lecture No:1", "this is our first lecture slides",@var);
call CreatePost("haider92", "2", "lecture No:2", "Slides are attached below",@var);


call EditPost(2,"haider92", "2", "(Duplicated)Introductio", "(Duplicated)this is our first post for this classroom",@var);
call DeletePost(2,"haider92", @var);


     -- incorrect data
call CreatePost("Ashar", "3", "Introduction to Database", "this is our first post for this classroom",@var);


call CreateAssignment("haider92", "2", "Assignment No:1",100, "2022/12/27","First Assignment here!!", @var);
call CreateAssignment("haider92", "2", "Assignment No:2",100, "2023/1/1","Second Assignment here!!", @var);
call CreateAssignment("haider92", "2", "Assignment No:3",100, "2023/5/17","Third Assignment here!!", @var);

call EditAssignment(2,"haider92", "2", "Assignment No:2",150, "2023/2/2","(Updated)Second Assignment here!!", @var);
call DeleteAssignment(2,"haider92", @var);


 -- call RemoveStudentFromClass("Yousuf2","3","Ashar88",@var );
 call ViewAllPost(2);

 -- ****************** second verified input**********************




 -- ****************** third verified input**********************


call ViewAllPost("2");
call AllStudents("2");

call CommentOnPost(1,null,"haider92","Hey guyz i have missed some details, will share it in some other post",@var); 
call CommentOnPost(1,"Ashar88",null,"Alright teacher",@var); 
call CommentOnPost(1,"Yousuf2",null,"Please share it quick, sir.",@var); 

-- incorrect input
call CommentOnPost(1,"Yousuf2","haider","Please share it quick, sir.",@var); 

-- call AllCommentsOnPost(1);


call AssignGrade(1,"Ashar88",59,@var);
call AssignGrade(1,"Yousuf2",85,@var);
call AssignGrade(1,"Yousuf2",25,@var);

call AssignGrade(3,"Yousuf2",99,@var);

call AssignGrade(2,"Yousuf2012",99,@var);
call AssignGrade(2,"Yousuf2",99,@var);



call ViewGrade(1,"Yousuf2");
call ViewGrade(3,"Yousuf2");


 -- ****************** third verified input**********************


 
 
--  
 CREATE  DEFINER=`root`@`localhost` PROCEDURE `CreateJabasroom`(
IN TeacherUsername varchar(35),
IN name varchar(50),
IN title varchar(50),
IN code varchar(50),
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
         
    COMMIT;
	END ;;
DELIMITER ;
