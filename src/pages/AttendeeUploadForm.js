import React, { useState } from 'react';
import axios from 'axios';

const AttendeeUploadForm = () => {
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post('/api/attendees/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log(response.data);
        // Handle success response and duplicate attendee data as needed

        setErrorMessage('');
        setFile(null);
        
      } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
          setErrorMessage(error.response.data.error.file[0]);
        } else {
          setErrorMessage('Failed to upload attendee list. Please try again.');
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="file">Upload Attendee List (Excel file):</label>
        <input type="file" id="file" onChange={handleFileChange} />
      </div>
      {errorMessage && <p>{errorMessage}</p>}
      <button type="submit">Upload</button>
    </form>
  );
};

export default AttendeeUploadForm;
