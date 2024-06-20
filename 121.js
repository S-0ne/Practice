class Schedule {
    constructor() {
      this.lessons = [];
    }
  
    addLesson(lessonNumber, subject, teacher, form) {
      const lesson = {
        lessonNumber,
        subject,
        teacher,
        form
      };
      this.lessons.push(lesson);
    }
  
    getLessons() {
      return this.lessons;
    }
  
    getLessonsByNumber(lessonNumber) {
      return this.lessons.filter(lesson => lesson.lessonNumber === lessonNumber);
    }
  
    getLessonsBySubject(subject) {
      return this.lessons.filter(lesson => lesson.subject === subject);
    }
  
    getLessonsByTeacher(teacher) {
      return this.lessons.filter(lesson => lesson.teacher === teacher);
    }
  
    getLessonsByForm(form) {
      return this.lessons.filter(lesson => lesson.form === form);
    }
  }
  
  const schedule = new Schedule();
  
  schedule.addLesson(1, 'Математика', 'Іваненко', 'Лекція');
  schedule.addLesson(2, 'Фізика', 'Петренко', 'Практика');
  schedule.addLesson(3, 'Хімія', 'Сидоренко', 'Лабораторна');
  schedule.addLesson(1, 'Інформатика', 'Коваль', 'Лекція');
  
  console.log(schedule.getLessons());
  
  console.log(schedule.getLessonsByNumber(1));
  
  console.log(schedule.getLessonsBySubject('Математика'));
  
  console.log(schedule.getLessonsByTeacher('Петренко'));
  
  console.log(schedule.getLessonsByForm('Лекція'));  