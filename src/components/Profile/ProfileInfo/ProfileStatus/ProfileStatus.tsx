import React from 'react';
import styles from './ProfileStatus.module.css';

type ProfileInfoType = {
    status: string | null
}

export class ProfileStatus extends React.Component<ProfileInfoType> {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                    : <div>
                        <input autoFocus onBlur={this.deactivateEditMode} value={'Status'} type="text"/>
                    </div>
                }
            </div>
        )
    }

}
