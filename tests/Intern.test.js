const Intern = require('../lib/intern.js');

const intern = new Intern('Ryan', 1, 'email@email.com', 'Harvard');

describe("Intern", () => {
    describe("Initialization", () => {
      it("should create an Intern object", () => {
        expect(intern.name).toBe('Ryan');
        expect(intern.id).toBe(1);
        expect(intern.email).toBe('email@email.com'); 
        expect(intern.school).toBe('Harvard');      
      });
    })
    describe("getSchool", () => {
      it("return the intern's school", () => {          
        const getSchool = intern.getSchool();
        expect(getSchool).toBe('Harvard');
      });
    })
    describe("getRole", () => {
      it("return Intern", () => {
        const getRole = intern.getRole();
        expect(getRole).toBe("Intern");
      });
    })
})