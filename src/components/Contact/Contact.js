import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="bg-warning">
            <h1>if you need more information.
                Please contact with us
            </h1>
            <br/>
            <h2>Hot Line 1 : <Link to="/Riaz">01670263752(Mr.Arafat)</Link> </h2>
            <h2>Hot Line 2 : <Link to= "/Riaz">01622118833(Mr. Riaz)</Link> </h2>
            <h3>Address : 1683 Manda, New-Calofornia         </h3>
        </div>
    );
};

export default Contact;