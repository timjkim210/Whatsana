import React from 'react'

class TaskIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.toDateString = this.toDateString.bind(this)
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    handleClick() {
        this.props.deleteTask(this.props.projectId, this.props.task.id)
    }

    toDateString(date) {
        let monthKey = {
            '01': 'Jan',
            '02': 'Feb',
            '03': 'Mar',
            '04': 'Apr',
            '05': 'May',
            '06': 'Jun',
            '07': 'Jul',
            '08': 'Aug',
            '09': 'Sep',
            '10': 'Oct',
            '11': 'Nov',
            '12': 'Dec'
        }

        let day = date[8] + date[9]
        if (day[0] === '0') {
            day = day[1]
        } 


        return monthKey[date[5] + date[6]] + ' ' + day;
    }

    render() {
        if (this.props === undefined) {
            return null;
         }
        return(
            <li className="task-index-item">
                <p>{this.props.task.name}</p>
                <p>{this.props.users.map(user => {
                    if (user.id === this.props.task.assignee_id) {
                        return user.full_name
                    }
                })}</p>
                <p>{this.toDateString(this.props.task.due_date)}</p>
                <button onClick={this.handleClick}>Delete</button>
            </li>
        )
    }
}

export default TaskIndexItem;