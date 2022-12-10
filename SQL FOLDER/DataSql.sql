call CreatePost("haider92", "2", "Introduction to Database", "this is our first post for this classroom, here we will share with you the course outline"); 
call CreatePost("haider92", "2", "Introduction to Database", "this is our first post for this classroom");
call CreatePost("Ashar", "3", "Introduction to Database", "this is our first post for this classroom");
call CreatePost("haider92", "2", "lecture No:1", "this is our first lecture slides");


call CreateAssignment("haider92", "2", "Assignment No:1",100, "2022/12/27","First Assignment here!!");
call CreateAssignment("haider92", "2", "Assignment No:2",100, "2023/1/1","Second Assignment here!!");


call RemoveStudentFromClass("Yousuf2","3","Ashar88");

call ViewAllPost("2");
call AllStudents("2");



call CommentOnPost(6,null,"haider92","Hey guyz i have missed some details, will share it in some other post"); 
call CommentOnPost(6,"Ashar88",null,"Alright teacher"); 
call CommentOnPost(6,"Yousuf2",null,"Please share it quick, sir."); 

call AllCommentsOnPost(6);

call AssignGrade(1,"Ashar88","haider92",59);
call AssignGrade(1,"Yousuf2","haider92",85);


call AssignGrade(1,"Yousuf22","haider92",85);
call AssignGrade(3,"Yousuf2","haider92",99);


call ViewGrade(3,"Yousuf2");