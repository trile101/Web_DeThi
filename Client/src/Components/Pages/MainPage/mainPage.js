import axios from 'axios'
import {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'

function MainPage(){
    const state = useContext(GlobalState)
    const [_search, setSearch] = state._search
    const [subject, setSubject] = useState([])
    const [subDisplay, setSubDisplay] = useState([])

    useEffect(async () =>  {
        const res = await axios.get('http://localhost:4000/api/subject')
        setSubject(res.data)
        setSearch('#')
        setSearch('')
    }, [])

    useEffect(async () => {
        if (subject.length != 0) {
            const tempt = await subject.filter((sub) => {
                const t1 = sub.name.toLowerCase()
                const t_search = _search.toLowerCase()
                if (t1.search(t_search) != -1 || _search === '') return true
                return false
            })
            setSubDisplay(tempt)
        }
    }, [_search])


    function Page_subject(sub) {
        return (
            <Link to={`/${sub.name}`}>
                <div className="Name_subject">
                    <h5>{sub.name}</h5>
                </div>
            </Link>
        )
    }
    return (
        <div className="Body_Page">
            {
                subDisplay.map(sub => {
                    return Page_subject(sub)
                })
            }
        </div>
    )
}

export default MainPage