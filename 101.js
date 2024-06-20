const fs = require('fs');
const readline = require('readline');

class Appointment {
  constructor(day, month, year, surname) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.surname = surname;
  }
}

async function getInput(prompt) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

function saveAppointmentsToFile(appointments, filename) {
  const data = JSON.stringify(appointments, null, 2);
  fs.writeFileSync(filename, data, 'utf8');
}

function loadAppointmentsFromFile(filename) {
  const data = fs.readFileSync(filename, 'utf8');
  const appointmentsData = JSON.parse(data);
  return appointmentsData.map(
    (appointment) =>
      new Appointment(
        appointment.day,
        appointment.month,
        appointment.year,
        appointment.surname
      )
  );
}

function printAppointments(appointments, filename) {
  let appointmentMap = {};

  appointments.forEach((appointment) => {
    let date = `${appointment.day}-${appointment.month}-${appointment.year}`;
    if (!appointmentMap[date]) {
      appointmentMap[date] = [];
    }
    appointmentMap[date].push(appointment.surname);
  });

  const results = [];
  for (let date in appointmentMap) {
    const result = `На ${date} записані наступні люди: ${appointmentMap[date].join(", ")}`;
    console.log(result);
    results.push(result);
  }

  fs.writeFileSync(filename, results.join('\n'), 'utf8');
}

async function main() {
  const appointments = [];
  const filename = 'appointments.json';
  const resultsFilename = 'appointments_results.txt';

  while (true) {
    const day = await getInput('Введіть день: ');
    const month = await getInput('Введіть місяць: ');
    const year = await getInput('Введіть рік: ');
    const surname = await getInput('Введіть прізвище: ');

    appointments.push(new Appointment(day, month, year, surname));

    const more = await getInput('Бажаєте додати ще один запис? (так/ні): ');
    if (more.toLowerCase() !== 'так') {
      break;
    }
  }

  saveAppointmentsToFile(appointments, filename);

  const loadedAppointments = loadAppointmentsFromFile(filename);

  printAppointments(loadedAppointments, resultsFilename);
}

main();