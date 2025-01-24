import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function calReportPage() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [reminders, setReminders] = useState([]);
    const [newEvent, setNewEvent] = useState({
        date: '',
        title: '',
        description: '',
    });

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewEvent((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const daysInMonth = (month, year) => {
        return 32 - new Date(year, month, 32).getDate();
    };

    const previous = () => {
        if (currentMonth === 0) {
            setCurrentYear(currentYear - 1);
            setCurrentMonth(11);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const next = () => {
        if (currentMonth === 11) {
            setCurrentYear(currentYear + 1);
            setCurrentMonth(0);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const jump = (month, year) => {
        setCurrentMonth(month);
        setCurrentYear(year);
    };

    useEffect(() => {
        console.log(`Calendar updated for ${currentMonth + 1}/${currentYear}`);
    }, [currentMonth, currentYear]);

    return (
        <div className="min-h-screen flex">
            {/* Sidebar */}
            <div className={`w-64 bg-gray-800 ${isCollapsed ? 'hidden' : 'flex'} flex-col p-4`}>
                <div className="text-center mb-8">
                    <a href="/">
                        <img src="../image/NZHome.png" alt="NZ Home Logo" className="h-20 mx-auto" />
                    </a>
                </div>
                <a href="/" className="text-white py-2 hover:bg-gray-700 px-4 rounded-lg mb-2">
                    <i className="fas fa-layer-group mr-2"></i> Devices
                </a>
                <a href="#" className="text-white py-2 hover:bg-gray-700 px-4 rounded-lg mb-2">
                    <i className="fas fa-chart-pie mr-2"></i> Internet Usage
                </a>
                <a href="#" className="text-white py-2 hover:bg-gray-700 px-4 rounded-lg mb-2">
                    <i className="fas fa-wind mr-2"></i> Calendar
                </a>
            </div>

            <div className="flex-1 bg-gray-100 p-8">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-3xl text-center text-gray-800">NZ HOME</h1>
                    <a href="#" className="text-xl text-gray-800"><i className="fas fa-bell"></i></a>
                </div>

                {/* Calendar Controls */}
                <div className="flex items-center justify-between mb-4">
                    <button onClick={previous} className="text-xl font-bold text-gray-800">←</button>
                    <h2 className="text-xl">{new Date(currentYear, currentMonth).toLocaleString("default", { month: "long" })} {currentYear}</h2>
                    <button onClick={next} className="text-xl font-bold text-gray-800">→</button>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-lg">
                    {/* Calendar */}
                    <div className="mt-8">
                        <table className="table-auto w-full text-center">
                            <thead>
                                <tr>
                                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                                        <th key={index} className="py-2">{day}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {/* Dynamic calendar rendering goes here */}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Footer with Month and Year Selection */}
                <div className="flex justify-between mt-8">
                    <label htmlFor="month" className="text-lg">Jump To:</label>
                    <div className="flex gap-4">
                        <select
                            id="month"
                            className="px-4 py-2 border rounded-lg"
                            onChange={(e) => jump(parseInt(e.target.value), currentYear)}
                        >
                            {Array.from({ length: 12 }, (_, i) => (
                                <option key={i} value={i}>
                                    {new Date(0, i).toLocaleString("default", { month: "short" })}
                                </option>
                            ))}
                        </select>
                        <select
                            id="year"
                            className="px-4 py-2 border rounded-lg"
                            onChange={(e) => jump(currentMonth, parseInt(e.target.value))}
                        >
                            {Array.from({ length: 10 }, (_, i) => (
                                <option key={i} value={currentYear - 5 + i}>
                                    {currentYear - 5 + i}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default calReportPage;