package com.ashar.MyClassroom.repository.Teacher;

import java.sql.CallableStatement;
import java.sql.SQLException;
import java.sql.Types;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;


@Repository
public class TeacherRepository {

	@Autowired
	private DataSource dataSource;
	CallableStatement callableStatement;
	

	public String GetTeacherUsernameFromClassId(String class_id) throws SQLException {
		
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		callableStatement = jdbcTemplate.getDataSource().getConnection().prepareCall("{call GetTeacherUsernameFromClassId(?,?)}");
		callableStatement.setString(1, class_id);
		callableStatement.registerOutParameter(2, Types.VARCHAR);


		callableStatement.executeUpdate();
		String result = callableStatement.getString(2);
		callableStatement.getConnection().close();

		return result;
	}
	
	public boolean RemoveStudentFromClass(String teacherUsername, String class_id, String stdUsername) throws SQLException {
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		callableStatement = jdbcTemplate.getDataSource().getConnection().prepareCall("{call RemoveStudentFromClass(?, ?, ?, ?)}");
		callableStatement.setString(1, teacherUsername);
		callableStatement.setString(2, class_id);
		callableStatement.setString(3, stdUsername);
		callableStatement.registerOutParameter(4, Types.BOOLEAN);
		
		callableStatement.executeUpdate();

		boolean result = callableStatement.getBoolean(4);
		callableStatement.getConnection().close();

		return result;
	}

	
	
	public boolean IsTeacherOfaClass(String class_id, String TeacherUsername) throws SQLException {
		
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		callableStatement = jdbcTemplate.getDataSource().getConnection().prepareCall("{call IsTeacherOfaClass(?, ?, ?)}");
		callableStatement.setString(1, class_id);
		callableStatement.setString(2, TeacherUsername);
		callableStatement.registerOutParameter(3, Types.BOOLEAN);
		
		callableStatement.executeUpdate();

		boolean result = callableStatement.getBoolean(3);
		callableStatement.getConnection().close();

		return result;
	}
	
	
}
