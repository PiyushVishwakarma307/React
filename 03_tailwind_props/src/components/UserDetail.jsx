import React from 'react';

function UserDetail({ name, email, location, bio }) {
    return (
        <>
            <div className="bg-gray-100 p-3 rounded-lg shadow-md">
                <p className="text-gray-700 mb-2">Name: {name}</p>
                <p className="text-gray-700 mb-2">Email: {email}</p>
                <p className="text-gray-700 mb-2">Location: {location}</p>
                <p className="text-gray-700">Bio: {bio}</p>
            </div>
        </>
    );
}

export default UserDetail;