package com.ashar.MyClassroom.service.User;

import java.sql.SQLException;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ashar.MyClassroom.repository.Teacher.TeacherRepository;

@Service
public class UserServiceImp implements UserService {

	@Autowired
	private TeacherRepository TeacherRepo;

	
	@Override
	public void CreateClassroom(String username, Map<String, String> obj) throws SQLException {
		TeacherRepo.CreateClassroom(username, obj.get("name"), obj.get("title")
				, obj.get("code"), obj.get("unique_code"), obj.get("descript"));
	}


	@Override
	public void editClassroom(String username, Map<String, String> obj) throws SQLException {
		TeacherRepo.CreateClassroom(username, obj.get("name"), obj.get("title")
				, obj.get("code"), obj.get("unique_code"), obj.get("descript"));
	}


	@Override
	public void createPost(String username, String class_id, String title, String descript) throws SQLException {
		TeacherRepo.createPost(username, class_id, title, descript);

	}


	@Override
	public void deleteClassroom(String username, String class_id, String title, String descript) throws SQLException {
	
		TeacherRepo.deleteClassroom(username, class_id, title, descript);
	}
	

}
