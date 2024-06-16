import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ListStudents from './components/ListStudents';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import './App.css';

function App() {
    const [studentsUpdated, setStudentsUpdated] = useState(false);

    const handleAdd = () => {
        setStudentsUpdated(!studentsUpdated);
    };

    const handleEdit = () => {
        setStudentsUpdated(!studentsUpdated);
    };

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/add-student">Add Student</Link>
                        </li>
                    </ul>
                </nav>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<ListStudents key={studentsUpdated} />} />
                        <Route path="/add-student" element={<AddStudent onAdd={handleAdd} />} />
                        <Route path="/edit-student/:id" element={<EditStudent onEdit={handleEdit} />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
