const fs = require('fs');

const personsImported = fs.readFileSync('./Data/persons.json', 'utf-8');
const employeesImported = fs.readFileSync('./Data/employees.json', 'utf-8');
const candidatesImported = fs.readFileSync('./Data/candidates.json', 'utf-8');

const persons = JSON.parse(personsImported);
const employees = JSON.parse(employeesImported);
const candidates = JSON.parse(candidatesImported);

let count = 0;

const denormalizedData = persons.map((person) => {
  const employeesFiltered = employees.filter(
    (e) => e.personid === person.personid
  );
  const candidatesFiltered = candidates.filter(
    (c) => c.personid === person.personid
  );

  count++;

  return {
    ...person,
    employee: employeesFiltered ? employeesFiltered : null,
    candidate: candidatesFiltered ? candidatesFiltered : null,
  };
});

try {
  fs.writeFileSync('persons_denormalized.ndjson', '', 'utf-8');

  denormalizedData.forEach((obj) => {
    fs.appendFileSync(
      'persons_denormalized.ndjson',
      JSON.stringify(obj) + '\n',
      'utf-8'
    );
  });

  console.log(
    `Denormalized data saved successfully in NDJSON format with ${count} documents`
  );
} catch (err) {
  console.error(err);
}
