import {useState} from 'react';
import './style.css';

export const FileUploader = ({}) => {

    return (
        <form method="post" action="#" id="#" >
            <div className="form-group files">
                <label>Upload Your File </label>
                <input type="file"
                      
                       className="form-control"
                       multiple/>
            </div>

            <button>Submit</button>
        </form>
    )
};