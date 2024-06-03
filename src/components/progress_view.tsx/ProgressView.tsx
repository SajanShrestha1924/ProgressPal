import { Fragment } from "react/jsx-runtime";
import './ProgressView.css';

export default function ProgressView() {
    const title = "Todo Done";
    const subtitle = "keep it up";
    const todoItems = [
        {
            "id": 1,
            "completed": false,
            "description": "Review PRs"
        },
        {
            "id": 2,
            "completed": true,
            "description": "Create progress view component"
        }
    ];

    const todoList = todoItems.map((todoItem) =>
        <li>{todoItem.description}</li>
    );

    return (
        <Fragment>
            <p id="title">{title}</p>
            <p id="subtitle">{subtitle}</p>
            {todoList}
        </Fragment>
    );
}