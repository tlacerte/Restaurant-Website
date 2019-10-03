import React from 'react'

const Hours = () => {
    return (
        <>
        <div className="hours-table">
        <table className="hours">
            <thead>
                <tr>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>11-9</td>
                    <td>11-9</td>
                    <td>11-9</td>
                    <td>11-9</td>
                    <td>11-11</td>
                    <td>11-11</td>
                    <td>11-9</td>
                </tr>
            </tbody>
        </table>
        </div>
        <h5>Happy Hour</h5>
        <div className="hours-table">
            <table className="hours">
                <thead>
                    <th>Monday-Thursday</th>
                </thead>
                <tbody>
                    <td>4-7</td>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Hours