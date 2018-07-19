export function fetchCourses() {
  return {
    type: 'FETCH_COURSES',
    payload: [
      {
        name: "Math I",
        description: "You learn basic algebra and geometry in this course."
      },
      {
        name: "Math II",
        description: "Learn trigonometry and advanced algebra with this course."
      },
      {
        name: "Math III",
        description: "This course teaches pre-calc and builds on previous Math courses."
      },
      {
        name: "English I",
        description: "Learn 9th grade English with this course."
      },
      {
        name: "English II",
        description: "Learn 10th grade English with this course."
      },
      {
        name: "CTE I",
        description: "A basic knowledge on how to operate a computer is taught in this course."
      },
      {
        name: "Programming I",
        description: "A basic concept of programming is taught in this course."
      },
      {
        name: "Art I",
        description: "Fundamental concepts and techniques of painting are covered in this course."
      },
      {
        name: "Concert Band I",
        description: "This course covers playing an instrument and reading music."
      }
    ]
  }
}