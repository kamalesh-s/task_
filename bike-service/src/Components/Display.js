import React, {useState,useEffect}from 'react'
import firebase from "./firebase";
import {db} from "./firebase.js";

function Display() {
    const [contactObj, setContactObjects] = useState({})

    useEffect(() => {
    db.collection("userdata").get("value",snapshot=>{
        if(snapshot.val()!=null)
        setContactObjects({...snapshot.val()
        })
    })
    }, [])
    return (
        <div>
            <table>
                <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Bikename</th>
            <th>Bikeno</th>
            <th>Mobilenumber</th>
            <th>Service</th>
            <th>Date</th>
            </tr>
            <tbody>
                {
                    Object.keys(contactObj).map(id=>{
                        return <tr key={id}>
                            <td>{contactObj[id].Name}</td>
                            <td>{contactObj[id].Age}</td>
                            <td>{contactObj[id].Bikename}</td>
                            <td>{contactObj[id].Bikeno}</td>
                            <td>{contactObj[id].Mobilenumber}</td>
                            <td>{contactObj[id].Service}</td>
                            <td>{contactObj[id].Date}</td>
                            <td></td>
                        </tr>
                    })
                }
            </tbody>
            </table>
        </div>
    )
}

export default Display
