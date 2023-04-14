import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import axios from 'axios'
import './FileUpload.scss'

function FileUpload() {
  const formData = new FormData()
  const onFileUpload = async(event) => {
    const selectedFile = event.target.files
    console.log(selectedFile.length)
    // Create an object of formData
    // Update the formData object
    for(let i = 0; i < selectedFile.length ; i++)
    formData.append( "files", selectedFile[i], selectedFile[i].name )
    // Send formData object
    axios.post("http://localhost:8800/upload", formData).then(res=>{ 
    console.log('Response :', res)  }).catch(err=> console.log('Upload failed',err))
  }
  return <div className="file-card">
          <div className="file-inputs">
            <input type="file" multiple onChange={onFileUpload} />
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