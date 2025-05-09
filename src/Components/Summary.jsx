import React, { useContext } from 'react';
import { FormContext } from './FormContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Summary = () => {
  const { formData } = useContext(FormContext);
  const navigate = useNavigate();

  const displayField = (label, value) => (
    <div className='row'>
      <span className='label'>{label} : </span>
      <span>{value || 'N/A'}</span>
    </div>
  );

  const handleSubmit = () => {
    // Here you'd call an API or backend
    console.log(formData);
    alert('Form submitted!');
  };


  // const handleSubmit = async () => {
  //   try {
  //     // Sending the formData to the server
  //     const response = await axios.post('https://user-api.onrender.com/submit', formData, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       }
  //     });
  
  //     console.log('✅ User saved:', response.data); // Successfully saved user data
  
  //   } catch (error) {
  //     console.error('❌ Error:', error.response || error);
  //   }
  // };
  
  

  return (
    <>
    <div >
      
      {displayField("Full Name", formData.fullName)}
      {displayField("Date of Birth", formData.dob)}
      {displayField("Gender", formData.gender)}
      {displayField("Email", formData.email)}
      {displayField("Phone", formData.phone)}
      {displayField("Alternate Email", formData.alternateEmail)}
      {displayField("Emergency Contact", formData.emergencyContact)}
      {displayField("Address", formData.address)}
      {displayField("City", formData.city)}
      {displayField("State", formData.state)}
      {displayField("Zip", formData.zip)}
      {displayField("Country", formData.country)}
      {displayField("Job Title", formData.jobTitle)}
      {displayField("Company", formData.company)}
      {displayField("Experience", formData.experience)}
      {displayField("Skills", formData.skills)}
      {displayField("Bio", formData.bio)}

      
    </div>
    <div style={{ marginTop: '20px' }}>
        <button onClick={() => navigate('/professional')}>Back</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
    
  );
};


export default Summary;
