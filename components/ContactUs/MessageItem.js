import moment from 'moment'
import React from 'react'

function MessageItem({email , message , date}) {
    return (
        <tr>
            <td>{email}</td>
            <td>{message}</td>
            <td>{moment.unix(date).format("MM/DD/YYYY h:m")}</td>
            <td>
                <button>answer</button>
            </td>
        </tr>
    )
}

export default MessageItem
