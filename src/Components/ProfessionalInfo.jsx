import React, { useContext,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from './FormContext';

export default function ProfessionalInfo() {
    const { formData, setFormData } = useContext(FormContext);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const validate = () => {
        const newErrors = {};
        if (!formData.jobTitle) newErrors.jobTitle = 'Job Title is required';
        if (!formData.experience) newErrors.experience = 'Please add complete experience';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };

    const handleNext = () => {
        if (validate()) {
          navigate('/summary');
        }
    };
    return (
        <div className='formData'>
            <div>
                <input name="jobTitle" className='input' placeholder="Job Title" onChange={handleChange} />
                {errors.jobTitle && <p className="error">{errors.jobTitle}</p>}
            </div>
            
            <div><input name="company" className='input' placeholder="Company Name" onChange={handleChange} /></div>

            <div>
                <input name="experience" className='input' type="number" placeholder="Years of Experience" onChange={handleChange} />
                {errors.experience && <p className="error">{errors.experience}</p>}
            </div>
            
            <div><input name="skills" className='input' placeholder="Skills (comma separated)" onChange={handleChange} /></div>
            <div><textarea name="bio" className='input' placeholder="Tell us about yourself..." onChange={handleChange} /></div>
            <div style={{ marginTop: '20px' }}>
                <button onClick={() => navigate('/address')}>Back</button>
                 
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
  )
}
