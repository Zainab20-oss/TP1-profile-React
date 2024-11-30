import React from "react";
import profile from '/Users/macintosh/Desktop/react/tp1-profile/src/Components/Images/pic.png';
import "./profile.css";
 function Profile(){
    return(
            <main>
                <h1>Welcome Zainab Esahraoui !</h1>
                <div className="profile">
                    <img src={profile} className="img"/>
                    <h2>Zainab Es-sahraoui</h2>
                    <hr/>
                    <h4>StudentID:17287236</h4>
                    <h4>Class:DEVOWF202</h4>
                    <h4>Section:A</h4>
                </div>
                <div className="general">
                    <h2>General information</h2>
                    <table border="1" >
                        <tr>
                            <td>Roll</td>
                            <td>:</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Academic Year</td>
                            <td>:</td>
                            <td>2024</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>:</td>
                            <td>Female</td>
                        </tr>
                        <tr>
                            <td>Adresse</td>
                            <td>:</td>
                            <td>Tanger</td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td>:</td>
                            <td>20</td>
                        </tr>
                    </table>
                </div>
                <div className="paragraphe">
                    <h2>Other information</h2>
                    <p>A school organizational chart, or organigram, typically outlines the hierarchy and roles within an educational institution. At the top of the chart, you'll usually find the Principal or Headmaster, who oversees the overall administration, policies, and strategic direction of the school. Below the Principal are Vice Principals or Assistant Principals, who may handle specific areas such as curriculum development, student affairs, or faculty supervision.</p>
                </div>
            </main>
    )
 }
 export default Profile;