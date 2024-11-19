class Employee {
    constructor(name, startDate, baseSalary) {
        this.name = name;
        this.startDate = startDate;
        this.baseSalary = baseSalary;
    }
}

class SalesPerson extends Employee {
    constructor(name, startDate, baseSalary, salesGoal, salesProfits, region) {
        super(name, startDate, baseSalary);
        this.salesGoal = salesGoal;
        this.salesProfits = salesProfits;
        this.region = region;
        this.isMonitored = false;
    }

    calculateSuccessRate() {
        let totalProfit = 0;
        for (const profit of this.salesProfits) {
            totalProfit += profit;
        }
        return (totalProfit / this.salesGoal) * 100;
    }

    calculateSalary() {
        let totalProfit = 0;
        for (const profit of this.salesProfits) {
            totalProfit += profit;
        }
        return this.baseSalary + totalProfit * 0.2;
    }

    success() {
        const successRate = this.calculateSuccessRate();
        const date = new Date();
        const yearsWorked = date.getFullYear() - this.startDate.getFullYear();

        let successLevel;
        if (yearsWorked < 1) {
            if (successRate < 30) successLevel = "low success";
            else if (successRate < 80) successLevel = "medium success";
            else successLevel = "high success";
        } else {
            if (successRate < 50) successLevel = "low success";
            else if (successRate < 90) successLevel = "medium success";
            else successLevel = "high success";
        }

        console.log(`${this.name} has ${successLevel} and a salary of ${this.calculateSalary()}`);
        return successLevel;
    }

    toString() {
        const successRate = this.calculateSuccessRate().toFixed(2);
        const monitoringStatus = this.isMonitored ? "is being monitored" : "is not being monitored";
        return `Employee ${this.name} has ${successRate} % success rate and ${monitoringStatus}.`;
    }
}

class SalesDepartment {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    updateMonitoring() {
        this.employees.forEach(employee => {
            const successLevel = employee.success();
            employee.isMonitored = (successLevel === "low success");
        });
    }

    checkMonitoring() {
        this.updateMonitoring();
    }

    successRate(region) {
        const employeesInRegion = this.employees.filter(emp => emp.region === region && !emp.isMonitored);
        const totalSuccessRate = employeesInRegion.reduce((sum, emp) => sum + emp.calculateSuccessRate(), 0);
        const averageSuccessRate = totalSuccessRate / employeesInRegion.length;
        if (employeesInRegion.length === 0) {
            console.log(`The average success rate for ${region} is 0 %`);
            return;
        }
        console.log(`The average success rate for ${region} is ${averageSuccessRate.toFixed(2)} %`);
    }

    print() {
        this.employees.forEach(employee => console.log(employee.toString()));
    }
}