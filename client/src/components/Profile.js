import React, { useState, useEffect } from "react";

const Profile = ({ currentUser }) => {
  //const [courseList, setCourseList] = useState([]);
  const { username, display_name, courses } = currentUser;

  /* const allCourses = courses.map((course) => course.course_name);
  const uniqueCourses = [...new Set(allCourses)];
  const displayUniqueCourses = uniqueCourses.map((course, id) => {
    return <h5 key={id}>{course}</h5>;
  }); */

  const displayUniqueCourses = courses.map((course, id) => {
    return <h5 key={id}>{course.course_name}</h5>;
  });

  /* useEffect(() => {
    fetch("/courseList")
      .then((r) => r.json())
      .then((data) => {
        setCourseList(data);
      });
  }, []); */

  /*   const alsoUniqueCourses = courseList.map((course, id) => {
    return <h5 key={id}>{course}</h5>;
  }); */

  return (
    <>
      <h2>{display_name}</h2>
      <h4>{username}</h4>
      {displayUniqueCourses}
      {/* {alsoUniqueCourses} */}
    </>
  );
};

export default Profile;
