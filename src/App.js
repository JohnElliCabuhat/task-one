import React, { Component } from "react";

class App extends Component {
  state = {
    empData: [
      {
        id : 1,
        name: "John Elli Cabuhat",
        age: 25,
        DOB: "01/13/1998",
        salary: 30000,
        designation: "junior developer",
        image: <img src="Elli-passport-photo.jpg" alt="profile" />,
        department: "IT Department"
      },

      {
        id : 2,
        name: "Billy Hawks",
        age: 30,
        DOB: "04/15/1994",
        salary: 45000,
        designation: "devops developer",
        image: <img src="billy.jpg" alt="profile 2" />,
        department: "IT Department"
      },

      {
        id : 3,
        name: "Max Howard",
        age: 23,
        DOB: "07/23/2000",
        salary: 55000,
        designation: "senior developer",
        image: <img src="max.jpg" alt="profile 3" />,
        department: "IT Department"
      }
    ]
  }

  displayInfo = (empList) => {
    alert(
      "Name : " + empList.name +
      "\nAge : " + empList.age +
      "\nDate of Birth : " + empList.DOB +
      "\nSalary : " + empList.salary +
      "\nDesignation : " + empList.designation +
      "\nDepartment : " + empList.department
    );
  }

  render() {
    const empList = this.state.empData.map((item) => {
      return (
        <div key={item.id}>
          <button onMouseOver={() => this.displayInfo(item)}>{item.name}</button>
          <>{item.image}</>
          <>{item.designation}</>
        </div>
      )
    })
    return (
      <>
        <div>{empList}</div>
      </>
    );
  }
}

export default App;