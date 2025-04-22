import React, { useContext,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from './FormContext';

export default function AddressInfo() {
    const { formData, setFormData } = useContext(FormContext);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
      const newErrors = {};
      if (!formData.address) newErrors.address = 'address is required';
      if (!formData.city) newErrors.city = 'city is required';
      if (!formData.state) newErrors.state = 'state is required';
      if (!formData.zip) newErrors.zip = 'zip code is required';
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
      if (validate()) {
        navigate('/professional');
      }
  };


  return (
    <div className='formData'>
        <div>
          <input name="address" className='input' placeholder="Street Address" onChange={handleChange} />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>

        
        <div>
          <input name="city" className='input' placeholder="City" onChange={handleChange} />
          {errors.city && <p className="error">{errors.city}</p>}
        </div>
        
        <div>
          <input name="state" className='input' placeholder="State/Province" onChange={handleChange} />
          {errors.state && <p className="error">{errors.state}</p>}
        </div>
        
        <div>
          <input name="zip" className='input' placeholder="Zip Code" onChange={handleChange} />
          {errors.zip && <p className="error">{errors.zip}</p>}
        </div>
        
        <div><input name="country" className='input' placeholder="Country" onChange={handleChange} /></div>
        <div style={{ marginTop: '20px' }}>
                <button onClick={() => navigate('/contact')}>Back</button>
                 
                <button onClick={handleNext}>Next</button>
            </div>
    </div>
  )
}
