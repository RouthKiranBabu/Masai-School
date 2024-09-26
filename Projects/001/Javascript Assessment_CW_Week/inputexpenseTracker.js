let val = require("./expenseTracker")
let et = new val.ExpenseTracker()
console.log(et.addExpense(185, "Legume", "Lentils: High in protein and fiber; great for heart health."))
console.log(et.addExpense(172, "Legume", "Chickpeas: Versatile and rich in protein and fiber."))
console.log(et.addExpense(190, "Legume", "Edamame: Young soybeans, rich in protein and essential nutrients."))
console.log(et.addExpense(185, "Legume", "Black beans: Protein-rich and high in fiber for digestion."))
console.log(et.addExpense(185, "Legume", "Kidney beans: High in protein and fiber, excellent in stews."))
console.log(et.addExpense(240, "Plant-Based Milk", "Soy milk: High in protein and often fortified with vitamins."))
console.log(et.addExpense(240, "Dairy (optional)", "Greek yogurt: High in protein and probiotics (not vegan)."))
console.log(et.addExpense(185, "Grain", "Quinoa: Complete protein with all nine essential amino acids."))
console.log(et.addExpense(120, "Grain", "Buckwheat: High in protein and essential nutrients."))
console.log(et.addExpense(30, "Nut/Seed", "Chia seeds: High in protein, omega-3 fatty acids, and fiber."))
console.log(et.addExpense(30, "Nut/Seed", "Hemp seeds: Complete protein source with healthy fats."))
console.log(et.addExpense(28, "Nut/Seed", "Pumpkin seeds: Rich in protein and various minerals."))
console.log(et.addExpense(30, "Nut/Seed", "Flaxseeds: Provides protein along with omega-3 fatty acids."))
console.log(et.addExpense(120, "Soy-Based Product", "Tofu: Versatile protein source made from soybeans."))
console.log(et.addExpense(120, "Soy-Based Product", "Tempeh: Fermented soybeans, high in protein and probiotics."))
console.log(et.addExpense(120, "Dairy (optional)", "Cottage cheese: High in casein protein, slow-digesting (not vegan)."))

console.log("Expenses >>> ", et.expenses)

console.log("CategorizedExpenses >>> ", et.categorizeExpenses())
console.log("getExpenseSummaryByCategory >>> ", et.getExpenseSummaryByCategory())
console.log("setBudget >>> ", et.setBudget(200))
console.log("trackSpending >>> ", et.trackSpending())

console.log("Monthly Report >>> ", et.generateMonthlyReport(8))
console.log("Yearly Report >>>", et.generateYearlyReport(2024))