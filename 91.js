class Appointment {
    constructor(day, month, year, surname) {
      this.day = day;
      this.month = month;
      this.year = year;
      this.surname = surname;
    }
  }
  
  let appointments = [
    new Appointment(18, 6, 2024, "Іваненко"),
    new Appointment(19, 6, 2024, "Петренко"),
    new Appointment(18, 6, 2024, "Сидоренко"),
    new Appointment(20, 6, 2024, "Коваленко"),
    new Appointment(19, 6, 2024, "Лисенко"),
    new Appointment(21, 6, 2024, "Кравченко")
  ];
  
  function printAppointments(appointments) {
    let appointmentMap = {};
  
    appointments.forEach(appointment => {
      let date = `${appointment.day}-${appointment.month}-${appointment.year}`;
      if (!appointmentMap[date]) {
        appointmentMap[date] = [];
      }
      appointmentMap[date].push(appointment.surname);
    });
  
    for (let date in appointmentMap) {
      console.log(`На ${date} записані наступні люди: ${appointmentMap[date].join(", ")}`);
    }
  }
  
  printAppointments(appointments);  