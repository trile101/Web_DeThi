/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios'
import { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { store } from 'react-notifications-component';

function DetailPage() {
    const [file, setFile] = useState(null)
    const [NumPage, setNumPage] = useState(0)
    const params = useParams()
    const _id = params._Id

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async() => {
      const res = await axios.get(`http://localhost:4000/api/files/${_id}`)
      setFile(res.data)
    }, [])
    useEffect(() => {
      if (file != null) {
        try{
          setNumPage(Object.keys(file.data).length)
        } catch (err) {
          setNumPage(1)
        }
      }  
    }, [file])

    function FilePdf() {
        return (
            // eslint-disable-next-line jsx-a11y/iframe-has-title
            <iframe src={"data:application/pdf;base64," + file.data} />
        )
    }

    function FileImage() {
        if (NumPage === 1) {

            return (
                <div className="sub_file">
                    <div className="place_subFile">
                        <img src={`data:image/png;base64,${file.data}`}/>
                    </div>
                </div>
            )   
        }
        var tmp = []
        for (var i = 0; i < NumPage; i++) {
            tmp.push(i)
        }
        return (
            <div className="sub_file">
                {
                    tmp.map(i =>{
                        return (
                            <div className="place_subFile">
                                <img src={`data:image/png;base64,${file.data[String(i)]}`}/> 
                            </div>
                        )
                    })
                }
            </div>
        )
    } 

    if (!file) return (
        <div className="Body_place2">
            <div className="bar">
                <span className="dot1"></span>
                <span className="dot2"></span>
                <span className="dot3"></span>
            </div>
        </div>
    )

    function MyNotification() {
        return (
          <div className="Place_notification">
              <p>Thi xong, quay lại update đề thi lên nhá </p>
              <img src="https://i.pinimg.com/736x/44/c9/94/44c9947e11ff63b178641296a8d09556.jpg" width="50px" heigh="50px"/>
          </div>
        )
      }

    const handleOnClick = () => {
        store.addNotification({
            content: MyNotification,
            type: "success",
            container: 'top-right',
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 5000,
            },
            width: 380
        })
    }

    return (
        <div className="Body_place1">
            <div className="Place_name">
                <h3>{"Đề thi: " + file.subject + " - " + file.year}</h3>
            </div>
            <div className="Place_File">
                {
                    (file.mimetype === "application/pdf" ? FilePdf(): FileImage())
                }
            </div>
            <form className="Place_Download" method="get" action={`http://localhost:4000/api/download${_id}`}>
                <button type="submit" onClick={handleOnClick}>Download!</button>
            </form>
        </div>
    )
    
}

export default DetailPage