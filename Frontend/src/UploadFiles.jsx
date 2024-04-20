import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

export default function UploadFiles() {

  const [file, setFile] = useState();
  const [uploadedFile, setUploadedFile] = useState();
  const [error, setError] = useState();

  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    const url = 'http://localhost:5173/uploadFile';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config)
      .then((response) => {
        console.log(response.data);
        setUploadedFile(response.data.file);
      })
      .catch((error) => {
        console.error("Error uploading file: ", error);
        setError(error);
      });
  }

  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
          <h1>React File Upload</h1>
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
        {uploadedFile && <div>
            <img src={uploadedFile} alt="Uploaded content"/>
            <p style={{color:'green'}} > FILE UPLOADED {file.name} SUCCESSFULLY</p>
        </div> }
        {error && <p style={{color:'red'}} >Error uploading file {file.name} : {error.message}</p>}
    </div>
  );
}
