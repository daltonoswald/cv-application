import { useState } from "react";
import Contact from "./Contact";
import Education from "./Education";
import Work from "./Work";
import "../styles.css"

function App() {
    // const [person, setPerson] = useState({ name: '', email: '', phone: '' });
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [schoolName, setSchoolName] = useState('');
    const [degreeName, setDegreeName] = useState('');
    const [gradDate, setGradDate] = useState('');

    const [company, setCompany] = useState('');
    const [title, setTitle] = useState('');
    const [duties, setDuties] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    function updateValue(value, stateName) {
        console.log(stateName);
        if (stateName === 'name') {
            setName(value)
        } else if (stateName === 'email') {
            setEmail(value)
        } else if (stateName === 'phone') {
            setPhone(value)
        } else if (stateName === 'schoolName') {
            setSchoolName(value)
        } else if (stateName === 'degreeName') {
            setDegreeName(value)
        } else if (stateName === 'gradDate') {
            setGradDate(value)
        } else if (stateName === 'company') {
            setCompany(value)
        } else if (stateName === 'title') {
            setTitle(value)
        } else if (stateName === 'duties') {
            setDuties(value)
        } else if (stateName === 'start') {
            setStart(value)
        } else if (stateName === 'end') {
            setEnd(value)
        }
    }

    return (
        <>
    <div className="container">
        <div className="form-container">
            <Contact updateName={updateValue} name={name} email={email} phone={phone} />
            <Education updateName={updateValue} schoolName={schoolName} degreeName={degreeName} gradDate={gradDate} />
            <Work updateName={updateValue} company={company} title={title} duties={duties} start={start} end={end}/>
        </div>
        <div className="preview-container">
            <div className="contact">
                <h1 className="cv-name">{name}</h1>
                <div className="contact-info">
                    <div className="contact-row">
                        <img className="email-icon" src="src/assets/email-outline.svg" alt="email icon" />
                        <h4 className="cv-email">{email}</h4>
                    </div>
                    <div className="contact-row">
                        <img className="phone-icon" src="src/assets/phone.svg" alt="phone icon" />
                        <h4 className="cv-phone">{phone}</h4>
                    </div>
                </div>
            </div>
            <div className="education">
                <h2 className="education-header">Education</h2>
                <h3 className="cv-school-name">{schoolName}</h3>
                <p className="cv-degree-name">{degreeName}</p>
                <p className="grad-date">{gradDate}</p>
            </div>
            <div className="work">
                <h2 className="work-header">Professional Experience</h2>
                <h3 className="cv-company">{company}</h3>
                <p className="cv-title">{title}</p>
                <p className="start-end">{start} - {end}</p>
                <p className="duties-title">Duties:</p>
                <p className="duties-list">{duties}</p>
            </div>
        </div>
    </div>
    </>
    )
}

export default App