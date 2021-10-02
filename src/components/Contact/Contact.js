import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (

        <div>
            <div className="bg-warning">
                <h1>if you need more information.
                Please contact with us
            </h1>
                <br />
                <h2>Hot Line 1 : <Link to="/Riaz">01670293752(Mr.Iasir Arafat)</Link> </h2>
                <h2>Hot Line 2 : <Link to="/Riaz">01622118833(Mr.Riaz)</Link> </h2>
                <h3>Address : 1683 Manda, New-California </h3>

            </div>
            <br/>
            <div style={{textAlign: 'center'}}>
                <Link to="/shop"> <button style={{backgroundColor:"green"}}>Back to Shop</button> </Link>
            </div>
        </div>

    );
};

export default Contact;

//Thanks