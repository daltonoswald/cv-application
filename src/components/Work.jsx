import { useState } from "react";
import '../styles/form-styles.css';

function Work({ company, title, duties, start, end, updateName }) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    if (isSubmitted) {
            return (
            <>
                <div className="form-edit-container"> Work
                    <button className="form-edit" onClick={editForm}>Edit Work</button>
                </div>
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
        e.preventDefault();
        setIsSubmitted(true);
    }

    return (
        <>
        <form className="form" onSubmit={submitForm}> Work
                <label>
                    Company Name: {' '}
                    <input
                    id="company"
                    key="company"
                    value={company}
                    placeholder="Company Name"
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Job Title: {' '}
                    <input
                    id="title"
                    key="title"
                    value={title}
                    placeholder="Job Title"
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Start Date: {' '}
                    <input
                    type="date"
                    id="start"
                    key="start"
                    value={start}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    End Date: {' '}
                    <input
                    type="date"
                    id="end"
                    key="end"
                    value={end}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Duties: {' '}
                    <textarea
                    id='duties'
                    key='duties'
                    value={duties}
                    placeholder='Duties'
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

export default Work