import React, { useState, useEffect } from 'react';
import { getStudent, updateStudent } from '../api';

const EditStudent = ({ id, onEdit }) => {
    const [student, setStudent] = useState({ name: '', age: '', class: '' });

    useEffect(() => {
        fetchStudent();
    }, [id]);

    const fetchStudent = async () => {
        const response = await getStudent(id);
        setStudent(response.data);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateStudent(id, student);
        onEdit();
    };

    return (
        <div>
            <h2>Edit Student</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={student.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Age:</label>
                    <input type="number" name="age" value={student.age} onChange={handleChange} />
                </div>
                <div>
                    <label>Class:</label>
                    <input type="text" name="class" value={student.class} onChange={handleChange} />
                </div>
                <button type="submit">Update Student</button>
            </form>
        </div>
    );
};

export default EditStudent;
