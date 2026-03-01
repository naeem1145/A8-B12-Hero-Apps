import React from 'react';
import logo from '../assets/logo.png';

const Loading = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen ">


            <img
                src={logo}
                alt="Loading..."
                className="w-24 h-24 mb-4"
                style={{
                    animation: 'spin 3s linear infinite',
                }}
            />

            {/* Inline CSS for animation */}
            <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
};

export default Loading;
