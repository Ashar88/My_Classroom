package com.ashar.MyClassroom.service.Teacher;

import java.sql.SQLException;
import java.util.Map;

public interface TeacherService {

	String GetTeacherUsernameFromClassId(Map<String, String> obj) throws SQLException;

	boolean RemoveStudentFromClass(Map<String, String> obj) throws SQLException;

	boolean IsTeacherOfaClass(Map<String, String> obj) throws SQLException;


}
