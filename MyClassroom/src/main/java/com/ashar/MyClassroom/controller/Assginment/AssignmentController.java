package com.ashar.MyClassroom.controller.Assginment;

import java.sql.SQLException;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ashar.MyClassroom.service.Teacher.TeacherService;


@RestController
public class AssignmentController {

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

	
	@DeleteMapping("/deleteClassroom/{username}")
	public String DeleteClassroom (@PathVariable String username,@PathVariable String class_id
			, @RequestBody Map<String,String> obj ) throws SQLException {

		  TeacherService.deleteClassroom(username, class_id,obj.get("title"), obj.get("descript"));

			return null;
	}


	@PostMapping("/createPost/{username}/{class_id}")
	public String createPost (@PathVariable String username,@PathVariable String class_id
			, @RequestBody Map<String,String> obj ) throws SQLException {

		  TeacherService.createPost(username, class_id,obj.get("title"), obj.get("descript"));

			return null;
	}
}
