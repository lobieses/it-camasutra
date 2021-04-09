import React from 'react';

const ChangePhoto = (props) => {
    const onChangePhoto = (event) => {
        if(event.target.files.length) {
            props.onUpdatePhoto(event.target.files[0]);
        }
    }
    return (
        <div>
            <input type="file" onChange={onChangePhoto}/>
        </div>
    )
}

export default ChangePhoto;