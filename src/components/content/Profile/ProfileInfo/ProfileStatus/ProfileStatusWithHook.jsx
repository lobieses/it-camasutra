import React, {useState, useEffect} from 'react';

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
        props.updateStatus(status);
    }

    const changeStatus = (event) => {
        setStatus(event.target.value);
    }

    return (
        <div>
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