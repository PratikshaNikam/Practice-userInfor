import React, { useContext,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from './FormContext';

export default function ContactInfo() {
    const { formData, setFormData } = useContext(FormContext);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = 'email is required';
        if (!formData.phone) newErrors.phone = 'phone number is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };

    const handleNext = () => {
        if (validate()) {
          navigate('/address');
        }
    };

    return (
        <div className='formData'>
            
            <div >
                <input name="email" className='input' type="email" placeholder="Email" onChange={handleChange} required />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            
            <div>
                <input name="phone" className='input' placeholder="Phone Number" onChange={handleChange} />
                {errors.phone && <p className="error">{errors.phone}</p>}
            </div>
            
            <div><input name="alternateEmail" className='input' type="email" placeholder="Alternate Email" onChange={handleChange} /></div>
            <div><input name="emergencyContact" className='input' placeholder="Emergency Contact" onChange={handleChange} /></div>
            
            
            <div style={{ marginTop: '20px' }}>
                <button onClick={() => navigate('/')}>Back</button>
                 
                <button onClick={handleNext}>Next</button>
            </div>
        </div>

  )
}
