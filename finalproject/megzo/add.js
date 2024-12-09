var jobs = JSON.parse(localStorage.getItem('jobs'));

var addJobForm = document.getElementById('add-job');
var jobName = document.getElementById('jobName');
var jobCompany = document.getElementById('jobCompany');
var jobSalary = document.getElementById('jobSalary');
var jobHours = document.getElementById('jobHours');
var jobStatus = document.getElementById('jobStatus');
addJobForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (
    jobName.value == '' ||
    jobCompany.value == '' ||
    jobSalary.value == '' ||
    jobHours.value == '' ||
    jobStatus.value == ''
  ) {
    alert('Please fill all the fields');
    return false;
  } else {
    jobs.push({
      id: jobs.length + 1,
      name: jobName.value,
      Company: jobCompany.value,
      Salary: jobSalary.value,
      Hours: jobHours.value,
      Status: jobStatus.value,
    });
    localStorage.setItem('jobs', JSON.stringify(jobs));
    console.log(
      JSON.stringify({
        id: jobs.length + 1,
        name: jobName.value,
        Company: jobCompany.value,
        Salary: jobSalary.value,
        Hours: jobHours.value,
        Status: jobStatus.value,
      })
    );
    location.href = './Available.html';
    alert("Updated Successfuly");
  }
});
