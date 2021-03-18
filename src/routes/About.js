import React from "react";
import "./About.css";

function About(props) {
    console.log(props);
    return (
        <div className="about_container">
            <span>
                "Freedom is the freedom to say that two make four, If that i granted, all else follows."
            </span>
            <span>-George Orwell, 1984</span>
        </div>
    );
}

export default About;

// import React from "react";

// function About(props){
//     console.log(props);
//     return <span>About this page : I built it because I love movies.</span>;
    
// }

// export default About;