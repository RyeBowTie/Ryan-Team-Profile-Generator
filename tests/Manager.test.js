const Manager = require('../lib/manager.js');

const manager = new Manager('Ryan', 1, 'email@email.com', 6);

describe("Manager", () => {
    describe("Initialization", () => {
      it("should create a Manager object", () => {
        expect(manager.name).toBe('Ryan');
        expect(manager.id).toBe(1);
        expect(manager.email).toBe('email@email.com');
        expect(manager.office).toBe(6);
      });
    })
    describe("getOffice", () => {
      it("return Manager's office number", () => {
        const getOffice = manager.getOffice();
        expect(getOffice).toBe(6);
      });
    })
    describe("getRole", () => {
      it("return Manager", () => {
        const getRole = manager.getRole();
        expect(getRole).toBe("Manager");
      });
    });
});