import { useState } from "react";
import '../styles/form-styles.css';

function Education({ schoolName, degreeName, gradDate, updateName }) {
    const [education, setEducation] = useState({ schoolName: '', degreeName: '', gradDate: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    if (isSubmitted) {
            return (
            <>
                <button className="form-edit" onClick={editForm}>Edit Education</button>
            </>
        )
    }

    function handleChange(e) {
        updateName(e.target.value, e.target.id);
    }

    function editForm(e) {
        e.preventDefault()
        setIsSubmitted(false);
    }

    function submitForm(e) {
        const newEducation = {...education, schoolName: schoolName, degreeName: degreeName, gradDate: gradDate}
        setEducation(newEducation)
        e.preventDefault();
        setIsSubmitted(true);
        console.log(`newEducation =`, newEducation);
    }

    return (
        <>
        <form className="form" onSubmit={submitForm}>
                <label>
                    School Name: {' '}
                    <input
                    id="schoolName"
                    key="schoolName"
                    value={schoolName}
                    placeholder="School Name"
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Degree Name: {' '}
                    <input
                    id="degreeName"
                    key="degreeName"
                    value={degreeName}
                    placeholder="Degree Name"
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Graduation Date: {' '}
                    <input
                    type="date"
                    id="gradDate"
                    key="gradDate"
                    value={gradDate}
                    onChange={handleChange}
                    />
                </label>
                <button
                type="submit"
                >Submit
                </button>
            </form>
        </>
    )
}

export default Education