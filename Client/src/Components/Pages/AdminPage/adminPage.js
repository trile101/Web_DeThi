import axios from 'axios'
import React  from 'react'
import {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'

function AdminPage()  {
    const state = useContext(GlobalState)
    const [admin, setAdmin] = state._admin

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [sub_dis, setSub_Dis]= useState([])


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async() => {
        if (admin === "true") {
            // tao ket noi toi server
            const res = await axios.get('http://localhost:4000/api/UnSubject')
            setSub_Dis(res.data)
        }
    }, [admin])

    const onSubmit = async e => {
        e.preventDefault()
        var bodyFormData = new FormData()
        bodyFormData.append('Email', email)
        bodyFormData.append('Pass', pass)

        // send data
        const res = await axios.post("http://localhost:4000/api/admin", bodyFormData)

        if (res.data) {
            setAdmin('true')
        } else {
            alert("Bạn nhập sai email hay password gì rồi (o,o) ")
        }
    }
    const Click_Y = async({target}) => {
        // active
        const res = await axios.get(`http://localhost:4000/api/ActiveFile/${target.value}`)
        if (res.data === "oke nha") {
            alert("File da duoc active!")
        }
        // remove
        const tempt = await sub_dis.filter((sub) => {
            if (sub._id === target.value) return false
            return true
        })
        setSub_Dis(tempt)
    }
    const Click_X = async({target}) => {
        // active
        const res = await axios.get(`http://localhost:4000/api/deleteFile/${target.value}`)
        if (res.data === "Oke") {
            alert("File da duoc xoa khoi database!")
        }
        // remove
        const tempt = await sub_dis.filter((sub) => {
            if (sub._id === target.value) return false
            return true
        })
        setSub_Dis(tempt)
    }

    const determinAdmin = () => {
        return (
            <div className="Body_place1">
                <div className="place_form">
                    <form className="form_infor_login" onSubmit={onSubmit}>
                        <div className="form_name">
                            <h3>LOGIN</h3>
                        </div>
                        <input type="email" placeholder="Email" value = {email} onChange={({target}) => {setEmail(target.value)}} className="form_input"/>
                        <input type="password" placeholder="Password" value={pass} onChange={({target}) => {setPass(target.value)}} className="form_input" />
                        <div className="form_submit">
                            <button type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    const isAdmin = () => {
        return (
            <div className="Body_Page">
                {
                    sub_dis.map(sub => {
                        return (
                            <div className="Place">
                                <Link to={`/${sub.subject}/${sub._id}`}>
                                    <div className="place_infor">
                                        <div className="Name_sub">
                                            <p>MÔN: {sub.subject}</p>
                                        </div>
                                        <div className="Name_year">
                                            <p>NĂM: {sub.year}</p>
                                        </div>
                                    </div>
                                </Link>
                                <button className="place_button_X" value={sub._id} onClick={Click_X}/>
                                <button className="place_button_Y"  value={sub._id} onClick={Click_Y}/>
                            </div>
                        )
                    })
                }
                

            </div>
        )
    }

    
    return (
        <>
            {admin === "false" && determinAdmin()}
            {admin === "true" && isAdmin()}
        </>
    )
}

export default AdminPage