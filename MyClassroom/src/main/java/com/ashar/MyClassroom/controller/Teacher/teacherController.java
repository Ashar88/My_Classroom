package com.ashar.MyClassroom.controller.Teacher;

import java.sql.SQLException;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ashar.MyClassroom.service.Teacher.TeacherService;


@RestController
public class teacherController {

	@Autowired
	private TeacherService TeacherService;
	
	@PostMapping("/createClassroom/{username}")
	public String createClassroom (@PathVariable String username, @RequestBody Map<String,String> obj ) throws SQLException {
	    	TeacherService.CreateClassroom(username, obj);

			return null;
	}
	
	@PutMapping("/editClassroom/{username}")
	public String editClassroom (@PathVariable String username, @RequestBody Map<String,String> obj ) throws SQLException {
	    	TeacherService.editClassroom(username, obj);

			return null;
	}
	
	@PostMapping("/createPost/{username}/{class_id}")
	public String createPost (@PathVariable String username,@PathVariable String class_id
			, @RequestBody Map<String,String> obj ) throws SQLException {

//	  System.out.println(username + class_id+ obj.get("title")+ obj.get("descript"));
		
		  TeacherService.createPost(username, class_id,obj.get("title"), obj.get("descript"));

			return null;
	}
}
