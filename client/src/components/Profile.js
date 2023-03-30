import React from "react";

const Profile = ({ currentUser }) => {
  //const [courseList, setCourseList] = useState([]);
  const { username, display_name, courses } = currentUser;

  let displayUniqueCourses = null;

  if (courses !== undefined) {
    if (courses.length > 0) {
      displayUniqueCourses = courses.map((course, id) => {
        return <h5 key={id}>{course.course_name}</h5>;
      });
    } else {
      displayUniqueCourses = "No courses yet!";
    }
  } else {
    displayUniqueCourses = "No courses yet!";
  }

  return (
    <>
      <h2>{display_name}</h2>
      <h4>{username}</h4>
      {displayUniqueCourses}
    </>
  );
};

export default Profile;
