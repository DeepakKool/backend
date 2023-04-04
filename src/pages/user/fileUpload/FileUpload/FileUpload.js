import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import axios from 'axios';
import './FileUpload.scss'

function FileUpload() {
  function onFileUpload(event) {
    let selectedFile = event.target.files
    console.log(selectedFile)
    // Create an object of formData
    const formData = new FormData()
    // Update the formData object
    formData.append( "files", selectedFile[0], selectedFile[0].name )
    // Details of the uploaded file
    for(var pair of formData.entries()) {
      console.log(pair[0]+', '+pair[1]);
    }
    // Request made to the backend api
    // Send formData object
    axios.post("http://localhost:8800/upload", formData)
  }
  return <div className="file-card">

      <div className="file-inputs">
          <input type="file" onChange={onFileUpload} />
          <button>
              <i>
                  <FontAwesomeIcon icon={faPlus} />
              </i>
              Upload
          </button>
      </div>

      <p className="main">Supported files</p>
      <p className="info">PDF, JPG, PNG</p>
  </div>
}
  
  export default FileUpload;