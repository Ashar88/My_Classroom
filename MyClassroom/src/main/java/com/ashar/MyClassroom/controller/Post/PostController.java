package com.ashar.MyClassroom.controller.Post;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ashar.MyClassroom.entity.Post;
import com.ashar.MyClassroom.service.Post.PostService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {

	@Autowired
	private PostService PostService;
	
	@PostMapping("/createPost")
	public String createPost (@RequestBody Map<String,String> obj ) throws SQLException {
	    	boolean result = PostService.CreatePost(obj);
            return Boolean.toString(result);
	}
	
	
	@PutMapping("/editPost")
	public String editPost (@RequestBody Map<String,String> obj ) throws SQLException {
		 
		 boolean result = PostService.editPost(obj);
		 return Boolean.toString(result);
	}

	
	@DeleteMapping("/deletePost")
	public String DeletePost (@RequestBody Map<String,String> obj ) throws SQLException {

		boolean result = PostService.deletePost(obj);
		return Boolean.toString(result);

	}

	
	@GetMapping("/viewAllPost")
	public List<Post> viewAllPost (@RequestBody Map<String,String> obj ) throws SQLException {
		String classId = obj.get("class_id");
		
		System.out.println(classId);
		return PostService.viewAllPost(classId);

	}

//	@PostMapping("/createPost")
//	public String createPost (@PathVariable String username,@PathVariable String class_id
//			, @RequestBody Map<String,String> obj ) throws SQLException {
//
//		  PostService.createPost(username, class_id,obj.get("title"), obj.get("descript"));
//
//			return null;
//	}
}
