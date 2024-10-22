document.addEventListener('DOMContentLoaded', function() {
    // Manage Students
    const addStudentButton = document.getElementById('add-student');
    const studentNameInput = document.getElementById('student-name');
    const studentIdInput = document.getElementById('student-id');
    const studentList = document.getElementById('student-list');

    addStudentButton.addEventListener('click', function() {
        const name = studentNameInput.value.trim();
        const id = studentIdInput.value.trim();
        if (name && id) {
            const li = document.createElement('li');
            li.innerHTML = `${name} (ID: ${id}) <button class="remove-btn">Remove</button>`;
            studentList.appendChild(li);
            studentNameInput.value = '';
            studentIdInput.value = '';

            li.querySelector('.remove-btn').addEventListener('click', function() {
                studentList.removeChild(li);
            });
        }
    });
 // Teacher Profiles
 const addProfileButton = document.getElementById('add-teacher-profile');
 const profileTeacherNameInput = document.getElementById('profile-teacher-name');
 const profileSubjectInput = document.getElementById('profile-subject');
 const profileContactInput = document.getElementById('profile-contact');
 const teacherProfileList = document.getElementById('teacher-profile-list');

 addProfileButton.addEventListener('click', function() {
     const name = profileTeacherNameInput.value.trim();
     const subject = profileSubjectInput.value.trim();
     const contact = profileContactInput.value.trim();
     if (name && subject && contact) {
         const li = document.createElement('li');
         li.innerHTML = `${name} - ${subject} - ${contact} <button class="remove-btn">Remove</button>`;
         teacherProfileList.appendChild(li);
         profileTeacherNameInput.value = '';
         profileSubjectInput.value = '';
         profileContactInput.value = '';

         li.querySelector('.remove-btn').addEventListener('click', function() {
             teacherProfileList.removeChild(li);
         });
     }
 });
    // Manage Courses
    const addCourseButton = document.getElementById('add-course');
    const courseNameInput = document.getElementById('course-name');
    const courseList = document.getElementById('course-list');

    addCourseButton.addEventListener('click', function() {
        const courseName = courseNameInput.value.trim();
        if (courseName) {
            const li = document.createElement('li');
            li.innerHTML = `${courseName} <button class="remove-btn">Remove</button>`;
            courseList.appendChild(li);
            courseNameInput.value = '';

            li.querySelector('.remove-btn').addEventListener('click', function() {
                courseList.removeChild(li);
            });
        }
    });

    // Manage Staff
    const addStaffButton = document.getElementById('add-staff');
    const staffNameInput = document.getElementById('staff-name');
    const staffList = document.getElementById('staff-list');

    addStaffButton.addEventListener('click', function() {
        const staffName = staffNameInput.value.trim();
        if (staffName) {
            const li = document.createElement('li');
            li.innerHTML = `${staffName} <button class="remove-btn">Remove</button>`;
            staffList.appendChild(li);
            staffNameInput.value = '';

            li.querySelector('.remove-btn').addEventListener('click', function() {
                staffList.removeChild(li);
            });
        }
    });

    // Manage Teachers
    const addTeacherButton = document.getElementById('add-teacher');
    const teacherNameInput = document.getElementById('teacher-name');
    const teacherList = document.getElementById('teacher-list');

    addTeacherButton.addEventListener('click', function() {
        const teacherName = teacherNameInput.value.trim();
        if (teacherName) {
            const li = document.createElement('li');
            li.innerHTML = `${teacherName} <button class="remove-btn">Remove</button>`;
            teacherList.appendChild(li);
            teacherNameInput.value = '';

            li.querySelector('.remove-btn').addEventListener('click', function() {
                teacherList.removeChild(li);
            });
        }
    });

    // Subject Notes Upload
    const uploadNoteButton = document.getElementById('upload-note');
    const noteSubjectInput = document.getElementById('note-subject');
    const noteFileInput = document.getElementById('note-file');
    const noteList = document.getElementById('note-list');

    uploadNoteButton.addEventListener('click', function() {
        const subject = noteSubjectInput.value.trim();
        const file = noteFileInput.files[0];
        if (subject && file) {
            const li = document.createElement('li');
            li.innerHTML = `${subject} - ${file.name} <button class="remove-btn">Remove</button>`;
            noteList.appendChild(li);
            noteSubjectInput.value = '';
            noteFileInput.value = '';

            li.querySelector('.remove-btn').addEventListener('click', function() {
                noteList.removeChild(li);
            });
        }
    });

    // Live Sessions
    const scheduleSessionButton = document.getElementById('schedule-session');
    const sessionTitleInput = document.getElementById('session-title');
    const sessionTimeInput = document.getElementById('session-time');
    const sessionList = document.getElementById('session-list');

    scheduleSessionButton.addEventListener('click', function() {
        const title = sessionTitleInput.value.trim();
        const time = sessionTimeInput.value;
        if (title && time) {
            const li = document.createElement('li');
            li.innerHTML = `${title} at ${new Date(time).toLocaleString()} <button class="remove-btn">Remove</button>`;
            sessionList.appendChild(li);
            sessionTitleInput.value = '';
            sessionTimeInput.value = '';

            li.querySelector('.remove-btn').addEventListener('click', function() {
                sessionList.removeChild(li);
            });
        }
    });

    // Attendance
    const markAttendanceButton = document.getElementById('mark-attendance');
    const attendanceStudentInput = document.getElementById('attendance-student');
    const attendanceList = document.getElementById('attendance-list');

    markAttendanceButton.addEventListener('click', function() {
        const studentName = attendanceStudentInput.value.trim();
        if (studentName) {
            const li = document.createElement('li');
            li.innerHTML = `${studentName} <button class="remove-btn">Remove</button>`;
            attendanceList.appendChild(li);
            attendanceStudentInput.value = '';

            li.querySelector('.remove-btn').addEventListener('click', function() {
                attendanceList.removeChild(li);
            });
        }
    });
});
