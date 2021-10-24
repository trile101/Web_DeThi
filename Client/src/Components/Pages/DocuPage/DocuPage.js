import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'

function DocuPage() {
    const params = useParams()
    const [file, setFile] = useState([])

    // lay gia tri tu URL
    const subject = params.subject

    // goi API de lay du lieu
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async() => {
        const res = await axios.get(`http://localhost:4000/api/subject/s/${subject}`)
        setFile(res.data)
    }, [])

    return (
        <div className="Body_Page">
            
            <div className="Page_file">
                {
                    file.map(f => {
                        return (
                            <Link to={`/${subject}/${f._id}`}>
                                <div className="Page_file_detail">
                                    <img src="https://cdn-icons-png.flaticon.com/512/3767/3767084.png" alt="" heigth="70px" width="80px" />
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