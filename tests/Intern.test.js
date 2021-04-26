const Intern = require('../lib/intern.js');

describe("Intern", () => {
    describe("Initialization", () => {
      it("should create an Intern object", () => {
        const intern = new Intern('Ryan', 1, 'email@email.com', 'Harvard')
        
        expect(intern.name).toBe('Ryan')
        expect(intern.id).toBe(1)
        expect(intern.email).toBe('email@email.com') 
        expect(intern.school).toBe('Harvard')       
      });
    })
    describe("getSchool", () => {
      it("return the intern's school", () => {          
        const intern = new Intern('Ryan', 1, 'email@email.com', 'Harvard')
        
        const getSchool = intern.getSchool()
        
        expect(getSchool).toBe('Harvard');
      });
    })
    describe("getRole", () => {
      it("return Intern", () => {
        const intern = new Intern('Ryan', 1, 'email@email.com', 'Harvard')
        
        const getRole = intern.getRole()
        
        expect(getRole).toBe("Intern");
      });
    })
})