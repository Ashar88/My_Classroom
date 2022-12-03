package com.ashar.MyClassroom.entity;

public class Grade {

	private int std_username;

	private int assign_id;
	private String teacher_username;
	private int class_id;

	private float marks_obtained;

	public Grade(int std_username, int assign_id, String teacher_username, int class_id, float marks_obtained) {
		super();
		this.std_username = std_username;
		this.assign_id = assign_id;
		this.teacher_username = teacher_username;
		this.class_id = class_id;
		this.marks_obtained = marks_obtained;
	}

	public Grade() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getStd_username() {
		return std_username;
	}

	public void setStd_username(int std_username) {
		this.std_username = std_username;
	}

	public int getAssign_id() {
		return assign_id;
	}

	public void setAssign_id(int assign_id) {
		this.assign_id = assign_id;
	}

	public String getTeacher_username() {
		return teacher_username;
	}

	public void setTeacher_username(String teacher_username) {
		this.teacher_username = teacher_username;
	}

	public int getClass_id() {
		return class_id;
	}

	public void setClass_id(int class_id) {
		this.class_id = class_id;
	}

	public float getMarks_obtained() {
		return marks_obtained;
	}

	public void setMarks_obtained(float marks_obtained) {
		this.marks_obtained = marks_obtained;
	}
}
