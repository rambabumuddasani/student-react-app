import React, { useEffect, useState } from 'react';
import { getStudents, deleteStudent } from '../api';

const ListStudents = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        const response = await getStudents();
        setStudents(response.data);
    };

    const handleDelete = async (id) => {
        await deleteStudent(id);
        fetchStudents();
    };

    return (
        <div>
            <h2>Students List</h2>
            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        {student.name} - {student.age} - {student.class}
                        <button className="delete" onClick={() => handleDelete(student.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListStudents;
