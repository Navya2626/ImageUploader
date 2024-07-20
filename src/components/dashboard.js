import React from 'react'
import ProfileImage from './profileImage'

const Dashboard = () => {

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100vw',
            background: 'linear-gradient(147.52deg, #F9FAFB 8.89%, #D2D6DB 100.48%)'
        }}>
            <ProfileImage />
        </div>

    )
}

export default Dashboard