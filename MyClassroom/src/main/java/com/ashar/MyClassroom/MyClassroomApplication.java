package com.ashar.MyClassroom;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.sql.DataSource;
import org.springframework.boot.CommandLineRunner;



@SpringBootApplication
public class MyClassroomApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(MyClassroomApplication.class, args);
	}
	@Autowired
	private DataSource dataSource;

	@Override
	public void run(String... args) throws Exception {
		String sqlQuery = "call CreateTables();";
		JdbcTemplate jdbcTemplate = new JdbcTemplate((DataSource) dataSource);
		jdbcTemplate.execute(sqlQuery);
	}

}

