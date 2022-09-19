import './Expense.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from './ExpenseChart';

function Expense(props) {
    //console.log(props);
    const [filteredYear, setSelectedYear] = useState('2022');
    const filterDataHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    }

    const filteredExpense = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    })


    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected = {filteredYear} onChangeFilter = {filterDataHandler}/>
                <ExpenseChart expenses = {filteredExpense}/>
                <ExpenseList items = {filteredExpense} />
            </Card>
        </div>
    );
}

export default Expense;