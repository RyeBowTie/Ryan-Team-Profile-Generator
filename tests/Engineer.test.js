const Engineer = require('../lib/engineer.js');

const engineer = new Engineer('Ryan', 1, 'email@email.com', 'RyeBowTie');

describe("Engineer", () => {
    describe("Initialization", () => {
      it("should create an Engineer object", () => {
        expect(engineer.name).toBe('Ryan');
        expect(engineer.id).toBe(1);
        expect(engineer.email).toBe('email@email.com');
        expect(engineer.github).toBe('RyeBowTie');  
      });
    })
    describe("getGitHub", () => {
      it("return the GitHub username of the engineer", () => {          
        const getGitHub = engineer.getGitHub();
        expect(getGitHub).toBe('RyeBowTie');
      });
    })
    describe("getRole", () => {
      it("return Engineer", () => {
        const getRole = engineer.getRole();
        expect(getRole).toBe("Engineer");
      });
    });
});