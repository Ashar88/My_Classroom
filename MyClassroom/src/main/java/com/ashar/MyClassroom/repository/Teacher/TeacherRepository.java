package com.ashar.MyClassroom.repository.Teacher;

import java.sql.CallableStatement;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;


@Repository
public class TeacherRepository {

	@Autowired
	private DataSource dataSource;
	CallableStatement callableStatement;
	
	
	
	public boolean CreateClassroom(String username, String name, String title, String code, String uniqueCode, String descript) throws SQLException
	{
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		callableStatement = jdbcTemplate.getDataSource().getConnection().prepareCall("{call CreateClassroom(?, ?, ?, ?, ?, ?)}");
		callableStatement.setString(1, username);
		callableStatement.setString(2, name);
		callableStatement.setString(3, title);
		callableStatement.setString(4, code);
		callableStatement.setString(5, uniqueCode);
		callableStatement.setString(6, descript);
		
		callableStatement.executeUpdate();
		callableStatement.getConnection().close();
		return true;
	}
	
	
	public boolean EditClassroom(String username, String name, String title, String code, String uniqueCode, String descript) throws SQLException
	{
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		callableStatement = jdbcTemplate.getDataSource().getConnection().prepareCall("{call EditClassroom(?, ?, ?, ?, ?, ?)}");
		callableStatement.setString(1, username);
		callableStatement.setString(2, name);
		callableStatement.setString(3, title);
		callableStatement.setString(4, code);
		callableStatement.setString(5, uniqueCode);
		callableStatement.setString(6, descript);
		
		callableStatement.executeUpdate();
		callableStatement.getConnection().close();
		return true;
	}


	public boolean createPost(String username, String class_id, String title, String descript) throws SQLException {
	
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		callableStatement = jdbcTemplate.getDataSource().getConnection().prepareCall("{call CreatePost(?, ?, ?, ?)}");
		callableStatement.setString(1, username);
		callableStatement.setString(2, class_id);
		callableStatement.setString(3, title);
		callableStatement.setString(4, descript);
		
		callableStatement.executeUpdate();
		callableStatement.getConnection().close();
		return true;
	}


	public boolean deleteClassroom(String username, String class_id, String title, String descript) throws SQLException {
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		callableStatement = jdbcTemplate.getDataSource().getConnection().prepareCall("{call DeleteClassroom(?, ?, ?, ?)}");
		callableStatement.setString(1, username);
		callableStatement.setString(2, class_id);
		callableStatement.setString(3, title);
		callableStatement.setString(4, descript);
		
		callableStatement.executeUpdate();
		callableStatement.getConnection().close();
		return true;
		
	}
}
