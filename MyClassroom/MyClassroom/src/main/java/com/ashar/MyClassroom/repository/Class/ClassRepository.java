package com.ashar.MyClassroom.repository.Class;

import java.sql.CallableStatement;
import java.sql.SQLException;
import java.sql.Types;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.ashar.MyClassroom.entity.Assignment;
import com.ashar.MyClassroom.entity.Class;
import com.ashar.MyClassroom.entity.Post;
import com.ashar.MyClassroom.mapper.AssignmentRowMapper;
import com.ashar.MyClassroom.mapper.ClassRowMapper;
import com.ashar.MyClassroom.mapper.PostRowMapper;


@Repository
public class ClassRepository {

	@Autowired
	private DataSource dataSource;
	CallableStatement callableStatement;
	
	
	
	public boolean CreateAssignment(String teacherUsername, String class_id, String title, String totalMarks
			, String due_date, String descript) throws SQLException
	{
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		callableStatement = jdbcTemplate.getDataSource().getConnection().prepareCall("{call CreateAssignment(?, ?, ?, ?, ?, ?, ?)}");
		callableStatement.setString(1, teacherUsername);
		callableStatement.setString(2, class_id);
		callableStatement.setString(3, title);
		callableStatement.setString(4, totalMarks);
		callableStatement.setString(5, due_date);
		callableStatement.setString(6, descript);
		callableStatement.registerOutParameter(7, Types.BOOLEAN);
		
		callableStatement.executeUpdate();

		boolean result = callableStatement.getBoolean(7);
		callableStatement.getConnection().close();

		return result;
	}
	
	
	public boolean editAssignment(String assignment_id, String teacherUsername, String class_id, String title, String totalMarks
			, String due_date, String descript) throws SQLException {
		
		
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		callableStatement = jdbcTemplate.getDataSource().getConnection().prepareCall("{call EditAssignment(?, ?, ?, ?, ?, ?, ?, ?)}");
		
		callableStatement.setString(1, assignment_id);
		callableStatement.setString(2, teacherUsername);
		callableStatement.setString(3, class_id);
		callableStatement.setString(4, title);
		callableStatement.setString(5, totalMarks);
		callableStatement.setString(6, due_date);
		callableStatement.setString(7, descript);
		callableStatement.registerOutParameter(8, Types.BOOLEAN);
		
		callableStatement.executeUpdate();

		boolean result = callableStatement.getBoolean(8);
		callableStatement.getConnection().close();

		return result;
	}
	
	
	public boolean deleteAssignment(String assignment_id, String teacherUsername) throws SQLException {

		boolean result = false;
		
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		callableStatement = jdbcTemplate.getDataSource().getConnection().prepareCall("{call deleteAssignment(?, ?, ?)}");
		
		callableStatement.setString(1, assignment_id);
		callableStatement.setString(2, teacherUsername);
		callableStatement.registerOutParameter(3, Types.BOOLEAN);

		callableStatement.executeUpdate();
		result = callableStatement.getBoolean(3);
		callableStatement.getConnection().close();

		return result;
	}


	@SuppressWarnings("deprecation")
	public List<Assignment> ViewAllAssignment(String class_id) throws SQLException {
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		System.out.println("post");
		List<Assignment> assignments = jdbcTemplate.query("call ViewAllAssignment(?);", new Object[] {class_id},new AssignmentRowMapper());
		
		String Username = getUsername(class_id);
		
		for(int i=0; i<assignments.size(); i++) {
			assignments.get(i).setUsername(Username);
		}
		
		return assignments;
	}

	public String getUsername(String classId) throws SQLException {
		System.out.print("in the get username");
	
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		callableStatement = jdbcTemplate.getDataSource().getConnection().prepareCall("{call GetTeacherUsernameFromClassId(?,?)}");
		callableStatement.setString(1, classId);
		callableStatement.registerOutParameter(2, Types.VARCHAR);


		callableStatement.executeUpdate();
		String result = callableStatement.getString(2);
		callableStatement.getConnection().close();

		return result;
	}


	public boolean CreateClassroom(String TeacherUsername, String name, String title, String code, String unique_code,
			String descript) throws SQLException {
		
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		callableStatement = jdbcTemplate.getDataSource().getConnection().prepareCall("{call CreateClassroom(?, ?, ?, ?, ?, ?, ?)}");
		
		callableStatement.setString(1, TeacherUsername);
		callableStatement.setString(2, name);
		callableStatement.setString(3, title);
		callableStatement.setString(4, code);
		callableStatement.setString(5, unique_code);
		callableStatement.setString(6, descript);
		callableStatement.registerOutParameter(7, Types.BOOLEAN);
		
		callableStatement.executeUpdate();

		boolean result = callableStatement.getBoolean(7);
		callableStatement.getConnection().close();

		return result;
	}


	public boolean EditClassroom(String class_id, String TeacherUsername, String name, String title, String code,
			String descript) throws SQLException {
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		callableStatement = jdbcTemplate.getDataSource().getConnection().prepareCall("{call EditClassroom(?, ?, ?, ?, ?, ?, ?)}");
		
		callableStatement.setString(1, class_id);
		callableStatement.setString(2, TeacherUsername);
		callableStatement.setString(3, name);
		callableStatement.setString(4, title);
		callableStatement.setString(5, code);
		callableStatement.setString(6, descript);
		callableStatement.registerOutParameter(7, Types.BOOLEAN);
		
		callableStatement.executeUpdate();

		boolean result = callableStatement.getBoolean(7);
		callableStatement.getConnection().close();

		return result;
	}


	public boolean DeleteClassroom(String class_id, String TeacherUsername) throws SQLException {
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		callableStatement = jdbcTemplate.getDataSource().getConnection().prepareCall("{call DeleteClassroom(?, ?, ?)}");
		
		callableStatement.setString(1, class_id);
		callableStatement.setString(2, TeacherUsername);
		callableStatement.registerOutParameter(3, Types.BOOLEAN);
		
		callableStatement.executeUpdate();

		boolean result = callableStatement.getBoolean(3);
		callableStatement.getConnection().close();

		return result;
	}


	public boolean JoinClassroom(String stdUsername, String unique_class_code) throws SQLException {
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		callableStatement = jdbcTemplate.getDataSource().getConnection().prepareCall("{call JoinClassroom(?, ?, ?)}");
		
		callableStatement.setString(1, stdUsername);
		callableStatement.setString(2, unique_class_code);
		callableStatement.registerOutParameter(3, Types.BOOLEAN);
		
		callableStatement.executeUpdate();

		boolean result = callableStatement.getBoolean(3);
		callableStatement.getConnection().close();

		return result;
	}


	public String GetUniqueCodeOfClass(String class_id) throws SQLException {
		
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		callableStatement = jdbcTemplate.getDataSource().getConnection().prepareCall("{call GetUniqueCodeOfClass(?, ?)}");
		
		callableStatement.setString(1, class_id);
		callableStatement.registerOutParameter(2, Types.VARCHAR);
		
		callableStatement.executeUpdate();

	     String result = callableStatement.getString(2);
		callableStatement.getConnection().close();

		return result;
	}

	
	@SuppressWarnings("deprecation")
	public List<Class> AllClassroomsOfTeacher(String username) {	
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
	
		List<Class> Classrooms = jdbcTemplate.query("call AllClassroomsOfTeacher(?);", new Object[] {username},new ClassRowMapper());

		
		return Classrooms;
	}


	@SuppressWarnings("deprecation")
	public List<Class> AllClassroomsOfStudent(String username) {
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);

		List<Class> Classrooms = jdbcTemplate.query("call AllClassroomsOfStudent(?);", new Object[] {username},new ClassRowMapper());
		return Classrooms;
	}


	@SuppressWarnings("deprecation")
	public List<Class> GetClassData(String class_id) {
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		List<Class> ClassroomData = jdbcTemplate.query("call GetClassData(?);", new Object[] {class_id},new ClassRowMapper());
		return ClassroomData;
	}
	
}
