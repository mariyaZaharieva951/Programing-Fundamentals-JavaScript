const { companyAdministration } = require('./companyAdministration');
const { expect } = require('chai');

describe("Company Administration test", function () {
    describe("Hiring Employee test", function () {
        it("Position is not 'Programmer", function () {
            expect(() => companyAdministration.hiringEmployee('Mariya','а',4)).to.throw(`We are not looking for workers for this position.`)
        });
        it("Position is'Programmer', yearsExperience is 4", function () {
            expect(companyAdministration.hiringEmployee('Mariya','Programmer',4)).to.equal(`Mariya was successfully hired for the position Programmer.`)
        });
        it("Position is'Programmer', yearsExperience is 3", function () {
            expect(companyAdministration.hiringEmployee('Mariya','Programmer',3)).to.equal(`Mariya was successfully hired for the position Programmer.`)
        });
        it("Position is'Programmer', yearsExperience is 2", function () {
            expect(companyAdministration.hiringEmployee('Mariya','Programmer',2)).equal(`Mariya is not approved for this position.`)
        });
        it("Position is'Programmer', yearsExperience is -2", function () {
            expect(companyAdministration.hiringEmployee('Mariya','Programmer',-2)).equal(`Mariya is not approved for this position.`)
        });
        it("Position is'Programmer', yearsExperience is 0", function () {
            expect(companyAdministration.hiringEmployee('Mariya','Programmer',0)).equal(`Mariya is not approved for this position.`)
        });
    });
    describe("Calculate Salary", function () {
        it("Hours is a string", function () {
            expect(() => companyAdministration.calculateSalary('a')).to.throw("Invalid hours")
        });
        it("Hours is an array", function () {
            expect(() => companyAdministration.calculateSalary([])).to.throw("Invalid hours")
        });
        it("Hours is an object", function () {
            expect(() => companyAdministration.calculateSalary({})).to.throw("Invalid hours")
        });
        it("Hours is a number = -1", function () {
            expect(() => companyAdministration.calculateSalary(-1)).to.throw("Invalid hours")
        });
        it("Hours is a number = 0", function () {
            expect(companyAdministration.calculateSalary(0)).to.equal(0);
        });
        it("Hours is a number = 2", function () {
            expect(companyAdministration.calculateSalary(2)).to.equal(30);
        });
        it("Hours is a number = 200", function () {
            expect(companyAdministration.calculateSalary(200)).to.equal(4000);
        });
    });
    describe("Fired Employee tests", function () {
        it("Invalid input: employees is a string", function () {
            expect(() => companyAdministration.firedEmployee('a', 1)).to.throw("Invalid input")
        });
        it("Invalid input: employees is a number", function () {
            expect(() => companyAdministration.firedEmployee(5, 1)).to.throw("Invalid input")
        });
        it("Invalid input: employees is a object", function () {
            expect(() => companyAdministration.firedEmployee({}, 1)).to.throw("Invalid input")
        });
        it("Invalid input: employees is an array, index is not integer", function () {
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1.1)).to.throw("Invalid input")
        });
        it("Invalid input: employees is an array", function () {
            expect(() => companyAdministration.firedEmployee([], 4)).to.throw("Invalid input")
        });
        it("Invalid input: employees is an array, index is number more than employees.length", function () {
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 4)).to.throw("Invalid input")
        });
        it("Invalid input: employees is an array, index is number equal employees.length", function () {
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 3)).to.throw("Invalid input")
        });
        it("Invalid input: employees is an array, index is negative number", function () {
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -3)).to.throw("Invalid input")
        });
        it("Valid input: employees is an array, index is 0", function () {
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 0)).to.equal(`Ivan, George`);
        });
        it("Valid input: employees is an array, index is 1", function () {
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1)).to.equal(`Petar, George`);
        });
        it("Valid input: employees is an array, index is 1", function () {
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 2)).to.equal(`Petar, George`);
        });
    });

});
