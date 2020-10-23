import React from 'react';
import {Link} from "react-router-dom";


function Table(props) {
    return (
        <tr>
            <td className="">{props.roles.roleType}</td>
            <td className="">{props.roles.roleDescription}</td>
            <td className=""><Link to={`/roles/${props.roles.id}`}>
                <button>
                    View
                </button>
            </Link>
            </td>
        </tr>
    );
}

export default Table;