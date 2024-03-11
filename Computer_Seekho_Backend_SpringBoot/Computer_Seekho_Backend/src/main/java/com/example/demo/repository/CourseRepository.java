package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Course;


@Repository
public interface CourseRepository extends JpaRepository<Course, Integer> {

	/*@Transactional
    @Modifying
    @Query("UPDATE Course c SET c.course_name = :course_name, c.duration_id = :duration_id, "
            + "c.capacity = :capacity, c.qualification_id = :qualification_id, "
            + "c.age_group = :age_group, c.description = :description, "
            + "c.syallbus = :syallbus, c.video = :video, c.photo = :photo, "
            + "c.isActive = :isActive WHERE c.course_id = :course_id")
    void updateCourse(
            @Param("course_name") String course_name,
            @Param("duration_id") int duration_id,
            @Param("capacity") int capacity,
            @Param("qualification_id") int qualification_id,
            @Param("age_group") int age_group,
            @Param("description") String description,
            @Param("syallbus") String syallbus,
            @Param("video") String video,
            @Param("photo") String photo,
            @Param("isActive") int isActive,
            @Param("course_id") int course_id );*/
}
