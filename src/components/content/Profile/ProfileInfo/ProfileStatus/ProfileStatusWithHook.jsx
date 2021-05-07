import React, {useState, useEffect} from 'react';
import style from './ProfileStatus.module.css';

const ProfileStatusWithHook = (props) => {

    let [editMod, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deActivateEditMode = () => {
        setEditMode(false);
        props.onUpdateStatus(status);
    }

    const changeStatus = (event) => {
        setStatus(event.target.value);
    }

    return (
        <div className={style.status}>
            {!editMod
                ? <div onDoubleClick={activateEditMode}>{status ? status : '-----'}</div>
                : <input
                        type="text"
                        autoFocus={true}
                        value={status}
                        onChange={changeStatus}
                        onBlur={deActivateEditMode}/>
            }
        </div>
    )

}

export default ProfileStatusWithHook;