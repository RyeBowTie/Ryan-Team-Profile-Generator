const Employee = require('../lib/employee.js');

describe("Employee", () => {
    describe("Initialization", () => {
      it("should create an object", () => {
        const employee = new Employee('Ryan', 1, 'email@email.com')
        
        expect(employee.name).toBe('Ryan')
        expect(employee.id).toBe(1)
        expect(employee.email).toBe('email@email.com')
      });
    })
    describe("getName", () => {
        it("return the name of the employee", () => {          
          const employee = new Employee('Ryan', 1, 'email@email.com')
          
          const getName = employee.getName()
          
          expect(getName).toBe('Ryan');
        });
      })
      describe("getId", () => {
        it("return the id number of the employee", () => {
          const employee = new Employee('Ryan', 1, 'email@email.com')
          
          const getName = employee.getId()
          
          expect(getName).toBe(1);
        });
      })
      describe("getEmail", () => {
        it("return the email of the employee", () => {
          const employee = new Employee('Ryan', 1, 'email@email.com')
          
          const getName = employee.getEmail()
          
          expect(getName).toBe('email@email.com');
        });
      })
      describe("getRole", () => {
        it("return employee", () => {
          
          const employee = new Employee('Ryan', 1, 'email@email.com')
          
          const getName = employee.getRole()
          
          expect(getName).toBe("Employee");
        });
      })
})