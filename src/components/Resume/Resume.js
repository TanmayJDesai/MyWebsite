import React from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ResumePage = () => {
    const navigate = useNavigate();

    return (
        <div className="resume-container">
            <button className="close-button" onClick={() => navigate('/')}>
                <X size={24} />
            </button>
            <iframe
                src="/Resume.pdf"
                title="Resume"
                className="resume-frame"
            />
        </div>
    );
};

export default ResumePage;