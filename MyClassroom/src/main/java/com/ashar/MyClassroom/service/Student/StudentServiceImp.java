package com.ashar.MyClassroom.service.Student;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ashar.MyClassroom.entity.Student;
import com.ashar.MyClassroom.repository.Student.StudentRepository;

@Service
public class StudentServiceImp implements StudentService {

	@Autowired
	private StudentRepository StudentRepo;

	@Override
	public List<Student> AllStudents(Map<String, String> obj) {
		return StudentRepo.AllStudents(obj.get("class_id"));
	}

	
	@Override
	public boolean IsStudentOfaClass(Map<String, String> obj) throws SQLException {
		return StudentRepo.IsStudentOfaClass(obj.get("class_id"), obj.get("stdUsername"));
	}

//	@Override
//	public String GetStudentUsernameFromClassId(Map<String, String> obj) throws SQLException {
//		return StudentRepo.GetStudentUsernameFromClassId(obj.get("class_id"));
//	}
//
//	
//	@Override
//	public boolean RemoveStudentFromClass(Map<String, String> obj) throws SQLException {
//		 return StudentRepo.RemoveStudentFromClass(obj.get("teacherUsername"), obj.get("class_id"), obj.get("stdUsername"));
//	}
//
//
//	@Override
//	public boolean IsStudentOfaClass(Map<String, String> obj) throws SQLException {
//		 return StudentRepo.IsStudentOfaClass(obj.get("class_id"), obj.get("StudentUsername"));
//	}

}
