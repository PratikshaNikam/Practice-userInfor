import React, { useContext,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from './FormContext';

const PersonalInfo = () => {
  const { formData, setFormData } = useContext(FormContext);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.dob) newErrors.dob = 'Date of Birth is required';
    if (!formData.gender) newErrors.gender = 'Please select a gender';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      navigate('/contact');
    }
  };

  return (
    <div className='formData'>
      <div>
        <input name="fullName" className='input' placeholder="Full Name" onChange={handleChange} />
        {errors.fullName && <p className="error">{errors.fullName}</p>}
      </div>
      
      <div>
        <input name="dob" className='input' type="date" placeholder="Date of Birth" onChange={handleChange} />
        {errors.dob && <p className="error">{errors.dob}</p>}
      </div>
      
      <div>
      <select name="gender" className='input' onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <p className="error">{errors.gender}</p>}
      </div>
      
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default PersonalInfo;

