export default function createReportObject(employeesList) {
    const myObj = {
      allEmployees: { ...employeesList },
      getNumberOfDepartments(employeesList) {
        return Object.keys(employeesList).length;
      },
    };
    return myObj;
  }