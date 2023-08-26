import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

const HomePage = () => {
    console.log('home view inside compo');
    const dispatch = useDispatch()
    useEffect(() => {
        console.log('home view inside effect');
        getUsers()
    })
    let getUsers = async () => {
        await dispatch(retierveUsers())
    }
    return (
        <>
            <div>
                <div className="container">
                    Testing
                </div>
            </div>
        </>
    )
}

export default HomePage
