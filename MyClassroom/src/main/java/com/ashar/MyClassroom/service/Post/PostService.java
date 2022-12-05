package com.ashar.MyClassroom.service.Post;

import java.sql.SQLException;
import java.util.Map;

public interface PostService {

	void CreateClassroom(String username, Map<String, String> obj) throws SQLException;

	void editClassroom(String username, Map<String, String> obj) throws SQLException;

	void createPost(String username, String class_id, String title, String descript) throws SQLException;

	void deleteClassroom(String username, String class_id, String string, String string2) throws SQLException;


}
