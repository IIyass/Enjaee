import React from 'react'
import * as Style from './style'
import Bitmap from '../../Illustration/Bitmap.png'
import ProfilInput from '../UI/ProfilInput';
import { ProfilButton } from '../UI/ProfilButton';
import ProfilSelector from '../UI/ProfilSelector';
import ProfilFooter from './ProfilFooter';

const Profil = () => {
    const options =
        [
            { value: 'abc', label: 'abc' },
            { value: 'def', label: 'def' }
        ]

    return (
        <Style.Wrapper >
            <h1>Profil</h1>
            <Style.Hero>
                <img src={Bitmap} />
                <Style.InputInfo>
                    <div id="ProfilInfo">
                        <ProfilInput label="Name" placeholder="Sandip Dave" />
                        <ProfilInput label="Number" placeholder="+91 (942) 900 0062" />
                    </div>
                    <ProfilInput label="Status" placeholder="Life is Hell to waste some time with Lazy Peoples." />
                    <Style.ButtonContainer>
                        <ProfilButton>Edit</ProfilButton>
                        <ProfilButton>Save</ProfilButton>
                    </Style.ButtonContainer>
                </Style.InputInfo>
            </Style.Hero>
            <Style.Setting>
                <h2>SETTINGS</h2>
                <div style={{ width: "360px" }}>
                    <ProfilSelector width="350px" border='none' borderBottom="2px solid #4A4A4A" placeholder="gmail" options={options} label="Sync Contact" />
                </div>
                <h3>Privacy and Security</h3>
                <Style.Privacy>
                    <ProfilSelector width="350px" border='none' borderBottom="2px solid #4A4A4A" placeholder="everybody" options={options} label="Last Status" />
                    <ProfilSelector width="350px" border='none' borderBottom="2px solid #4A4A4A" placeholder="Only Friend" options={options} label="Profile Picture" />
                    <ProfilSelector width="350px" border='none' borderBottom="2px solid #4A4A4A" placeholder="Friends" options={options} label="Online Status" />
                    <ProfilSelector width="350px" border='none' borderBottom="2px solid #4A4A4A" placeholder="5 Contacts" options={options} label="Block Contacts" />
                    <ProfilSelector width="350px" border='none' borderBottom="2px solid #4A4A4A" placeholder="Yes" options={options} label="Chat " />
                </Style.Privacy>
                <h3>Notification</h3>
                <Style.Notification>
                    <ProfilSelector width="350px" border='none' borderBottom="2px solid #4A4A4A" placeholder="No" options={options} label="Message Preview" />
                    <ProfilSelector width="350px" border='none' borderBottom="2px solid #4A4A4A" placeholder="Yes" options={options} label="Sounds" />
                    <ProfilSelector width="350px" border='none' borderBottom="2px solid #4A4A4A" placeholder="Yes" options={options} label="Light" />
                    <ProfilSelector width="350px" border='none' borderBottom="2px solid #4A4A4A" placeholder="Yes" options={options} label="Join New User" />
                </Style.Notification>
                <ProfilFooter />
            </Style.Setting>

        </Style.Wrapper >
    )
}

export default Profil;