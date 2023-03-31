import React from "react";

const Profile = ({ currentUser }) => {
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
    <div>
      <h1>User Profile</h1>
      <h3>
        Username: <span style={{ color: "darkblue" }}>{display_name}</span>
      </h3>
      <h3>
        Email:
        <span style={{ color: "darkblue" }}> {username}</span>
      </h3>

      <h3>Courses:</h3>
      {displayUniqueCourses}
    </div>
  );
};

export default Profile;
