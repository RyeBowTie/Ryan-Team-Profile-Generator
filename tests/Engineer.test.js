const Engineer = require('../lib/engineer.js');


describe("Engineer", () => {
    describe("Initialization", () => {
      it("should create an Engineer object", () => {
        const engineer = new Engineer('Ryan', 1, 'email@email.com', 'RyeBowTie')
        
        expect(engineer.name).toBe('Ryan')
        expect(engineer.id).toBe(1)
        expect(engineer.email).toBe('email@email.com')
        expect(engineer.github).toBe('RyeBowTie');  
      });
    })
    describe("getGitHub", () => {
      it("return the GitHub username of the engineer", () => {          
        const engineer = new Engineer('Ryan', 1, 'email@email.com', 'RyeBowTie')
        
        const getGitHub = engineer.getGitHub()
        
        expect(getGitHub).toBe('RyeBowTie');
      });
    })
    describe("getRole", () => {
      it("return Engineer", () => {
        const engineer = new Engineer('Ryan', 1, 'email@email.com', 'RyeBowTie')
        
        const getRole = engineer.getRole()
        
        expect(getRole).toBe("Engineer");
      });
    })
})