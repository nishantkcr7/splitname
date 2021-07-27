import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const splitName = () => {
    var str = document.getElementById("fullName").value;
    if (str.length == 0) {
        alert("Please Enter Your Name...");
        document.getElementById("fullName").focus();
        return 0;
    }
    var fSpace, lSpace;
    fSpace = str.indexOf(" ");
    lSpace = str.lastIndexOf(" ");
    if (fSpace == -1) {
       document.getElementById("fname").value = str;
        document.getElementById('fnamediv').style.visibility = 'visible';
    }
    else {
        if (fSpace == lSpace) {
            document.getElementById("fname").value = str.substring(0, fSpace);
            document.getElementById('fnamediv').style.visibility = 'visible';
            document.getElementById("lname").value = str.substring(fSpace + 1);
            document.getElementById('lnamediv').style.visibility = 'visible';
        }
        else {
            console.log('');
            // abc 1 def 2 ghi
            document.getElementById('fname').value = str.substring(0, fSpace);
            document.getElementById('fnamediv').style.visibility = 'visible';
            document.getElementById('mname').value = str.substring(fSpace+1, lSpace);
            document.getElementById('mnamediv').style.visibility = 'visible';
            document.getElementById('lname').value = str.substring(lSpace+1);
            document.getElementById('lnamediv').style.visibility = 'visible';
        }
    }
}

const App = () => {
    return <>
                <div className="container">
            <div className="row">
                <div className="col-12 shadow text-center bg-dark text-light">
                    <h2>Split Your Name</h2>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col text-center text-capitalize">
                    <input type="text" className='' id='fullName' placeholder='Enter Your Full Name' />
                    <input type="button" className='btn btn-outline-dark btn-sm' value='Split' onClick={splitName} />
                </div>
            </div>
            <div className="row" id='content'>
                <div className="col offset-md-4 offset-sm-3 offset-2">
                    <table className='table-responsive'>
                        <div style={{visibility:'collapse'}} id="fnamediv">
                            <tr>
                                <th>First Name</th>
                                <td>
                                    <input type="text" id='fname'/>
                                </td>
                            </tr>
                        </div>
                        <div style={{visibility:'collapse'}} id="mnamediv">
                            <tr>
                                <th>Middle Name</th>
                                <td>
                                    <input type="text" id='mname' />
                                </td>
                            </tr>
                        </div>
                        <div style={{visibility:'collapse'}} id="lnamediv">
                            <tr>
                                <th>Last Name</th>
                                <td>
                                    <input type="text" id='lname' />
                                </td>
                            </tr>
                        </div>
                    </table>
                </div>
            </div>
        </div>
    </>
}
export default App;