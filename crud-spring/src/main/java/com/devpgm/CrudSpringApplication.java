package com.devpgm;

import com.devpgm.models.Course;
import com.devpgm.repositories.CourseRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CourseRepository courseRepository) {
		return args -> {
			courseRepository.deleteAll();

			Course c1 = new Course();
			c1.setName("Angular com Spring");
			c1.setCategory("Front end");

			Course c2 = new Course();
			c2.setName("React com Spring");
			c2.setCategory("Front end");

			Course c3 = new Course();
			c3.setName("Curso Node JS");
			c3.setCategory("Back end");

			courseRepository.saveAll(Arrays.asList(c1, c2, c3));
		};
	}

}
