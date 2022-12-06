package com.ashar.MyClassroom.repository.Assignment;

import java.sql.CallableStatement;
import java.sql.SQLException;
import java.sql.Types;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;


@Repository
public class AssignmentRepository {

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
	
	public boolean deletePost(String post_id, String teacherUsername) throws SQLException {

		boolean result = false;

		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		callableStatement = jdbcTemplate.getDataSource().getConnection().prepareCall("{call DeletePost(?, ?, ?)}");
		callableStatement.setString(1, post_id);
		callableStatement.setString(2, teacherUsername);
		callableStatement.registerOutParameter(3, Types.BOOLEAN);

		callableStatement.executeUpdate();
		result = callableStatement.getBoolean(3);
		callableStatement.getConnection().close();

		return result;
	}

	
	
	
}
