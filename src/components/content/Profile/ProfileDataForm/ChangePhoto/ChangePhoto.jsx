import React from 'react';
import style from './ChangePhoto.module.css';

const ChangePhoto = (props) => {
    const onChangePhoto = (event) => {
        if(event.target.files.length) {
            props.onUpdatePhoto(event.target.files[0]);
        }
    }
    return (
        <div className={style.changePhotoButton}>
            <input type="file" id='upload' onChange={onChangePhoto}/>
            <label for='upload'>Upload photo</label>
        </div>
    )
}

export default ChangePhoto;