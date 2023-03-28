import React from 'react'
import { useNavigate } from "react-router-dom";
import './Home.css'
function Home() {
    const navigate = useNavigate()
    return (
        <div style={{
            fontSize: "40px",
            textAlign: "center",
            paddingTop: "40px",
        }}><button type="button" class="btn btn-primary btn-lg">Home</button>
            <br></br>
            <div style={{
                fontSize: "40px",
                textAlign: "center",
                paddingTop: "120px",
            }} >
                <a href="/login"><button type="button" class="btn btn-primary btn-lg">login</button></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <a href="/register"><button type="button" class="btn btn-primary btn-lg">Register</button></a>

            </div>
        </div>
    )
}

export default Home
