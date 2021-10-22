import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'

function DocuPage() {
    const params = useParams()
    const [file, setFile] = useState([])
    const [year, setYear] = useState([])
    const [sort, setSort] = useState('')
    // lay gia tri tu URL
    const subject = params.subject

    // goi API de lay du lieu
    useEffect(async() => {
        const res = await axios.get(`http://localhost:4000/api/subject/s/${subject}`)
        const res1 = await axios.get(`http://localhost:4000/api/year`)
        setFile(res.data)
        setYear(res1.data)
    }, [])

    return (
        <div className="Body_Page">
            
            <div className="Page_file">
                {
                    file.map(f => {
                        return (
                            <Link to={`/${subject}/${f._id}`}>
                                <div className="Page_file_detail">
                                    <img src="https://cdn-icons-png.flaticon.com/512/3767/3767084.png" heigth="70px" width="80px" />
                                    <h4>{f.subject + "-" + f.year}</h4>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DocuPage