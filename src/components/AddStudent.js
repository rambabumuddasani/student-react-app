import React, { useState } from 'react';
import { addStudent } from '../api';

const AddStudent = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [studentClass, setStudentClass] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addStudent({ name, age: parseInt(age), class: studentClass });
        onAdd();
        setName('');
        setAge('');
        setStudentClass('');
    };

    return (
        <div>
            <h2>Add Student</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Age:</label>
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div>
                    <label>Class:</label>
                    <input type="text" value={studentClass} onChange={(e) => setStudentClass(e.target.value)} />
                </div>
                <button type="submit">Add Student</button>
            </form>
        </div>
    );
};

export default AddStudent;
