import React from 'react';
import '../data/Backend';
import '../data/Frontend';
import '../index.css';
const TableFormat = (props) => {
    return (
        <>
            <h3>{props.title}</h3>
            <table className='scrollabletbody'>
                <thead>
                    <tr>
                        <th >SNO.</th>
                        <th >Name</th>
                        <th>Project Allocation</th>
                        <th >Skills</th>
                        <th >Comments</th>

                    </tr>
                </thead>
                <tbody >
                    {props.members?.map((item, key) => {
                        return (
                            <tr key={item.sn}>
                                <td >{key + 1}</td>
                                <td >{item.name}</td>
                                <td >
                                    <button
                                        onClick={() => props.updateAllocation(item.sn)}
                                        style={{ backgroundColor: item.allocation ? "#B1FB17" : "#F75D59", width: "50px" }}
                                    >
                                        {item.allocation ? "Yes" : "No"}
                                    </button>
                                </td>
                                <td >{item.skills}</td>
                                <td >
                                    <input
                                        type="text"
                                        value={item.comments}
                                        onChange={(e) => props.updateComment(item.sn, e)}
                                        style={{ width: "100%" }}
                                    />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
export default TableFormat;