import axios from "axios"
import {useState} from 'react'
import React from 'react'

function DisPage() {
    const [year, setYear] = useState('2021')
    const [subject, setSubject] = useState('')
    const [file, setFile] = useState('')

    const onSubmit = async e => {
      e.preventDefault()
      // check ten nguoi dung nhap ten mon hoc
      if (subject === subject.toLowerCase()) {
        alert("Bạn nhập sai format tên môn học rồi (^.^)")
      } else
      if (subject === '') {
        alert("Bạn quên nhập tên môn học (^.^)")
      } else if (file === '') {
        alert("Bạn quên upload tài liệu lên trang rồi (^.^)")
      }  else {
        // tao form data
        const formData = new FormData()
        for (let Fi of file) {
          formData.append('many-files', Fi)
        }

        formData.append('subject', subject)
        formData.append('select', year)

        try {
          const res = await axios.post('http://localhost:4000/api/uploadFile', formData, {
            headers:{
              'Content-Type': 'multipart/form-data'
            }
          })
          if (res.data === "Updated123!") {
            alert("Đã updated thành công - Cảm ơn bạn đã đóng góp tài liệu!")
          }

        } catch (err) {
          alert(err)
        }
      }
    }
    

    return (
        <>
          <div className='Body_Page12'>
              <div className="Body_Page123">
                  <div className="Place_sen">
                      <h2>
                          Cùng đóng góp tài liệu nào!
                      </h2>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAiu9WWAFExJbsbzdlH_Vxqv7iZAhm-RZ-sQ&usqp=CAU" alt="" width="40px" height="40px"/>
                      <img src="http://baoquocte.vn/stores/news_dataimages/minhhoa/092016/20/11/110706_bieu_tuong_cam_xuc.jpg" alt="" width="60px" height="40px"/>
                  </div>

                  <form onSubmit={onSubmit}>
                      <div className="form-group">
                          <label for="example-input-file"> </label>
                          <input type="file" name="many-files" multiple id="input-many-files" class="form-control-file border" onChange={e => {setFile(e.target.files)}}/>
                      </div>
                      <div class="form-group1">
                          <select class="form-select" value={year} onChange={({target}) => setYear(target.value)}name="select">
                              <option value="2021">2021</option>
                              <option value="2020">2020</option>
                              <option value="2019">2019</option>
                              <option value="2018">2018</option>
                              <option value="2017">2017</option>
                              <option value="2016">2016</option>
                              <option value="2015">2015</option>
                              <option value="2014">2014</option>
                          </select>
                          <input type="text" value={subject} onChange={({target}) => {setSubject(target.value)}}name="subject" placeholder="Nhập tên môn học"/>
                          <p>Bạn ơi tên môn học viết hoa chữ cái đầu (ví dụ như: toán tổ hợp = Toán tổ hợp)</p>
                      </div>
                      <button type="submit" >Submit</button>
                  </form>
              </div> 
          </div>
        </>
    )
}

export default DisPage