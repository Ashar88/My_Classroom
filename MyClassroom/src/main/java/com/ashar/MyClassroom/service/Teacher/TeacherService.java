package com.ashar.MyClassroom.service.Teacher;

import java.sql.SQLException;
import java.util.Map;

public interface TeacherService {

	void CreateClassroom(String username, Map<String, String> obj) throws SQLException;

	void editClassroom(String username, Map<String, String> obj) throws SQLException;

	void createPost(String username, String class_id, String title, String descript) throws SQLException;


}
