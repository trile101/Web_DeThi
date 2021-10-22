import logo from './Icon/logo.svg'
import logo_gift from './Icon/gift.svg'
import {GlobalState} from '../../GlobalState'
import { useContext } from 'react'
import {Link} from 'react-router-dom'

function Header() {
    const state = useContext(GlobalState)
    const [_search, setSearch] = state._search

    const changeSearch = ({target}) => {
        setSearch(target.value)
    }
    return (
        <>
            <header>
                <Link to={'/'}>
                    <div className="form-Logo">
                        <img src={logo} alt="" width="60" />
                        <div>
                            <h4>Tài liệu đề thi - HCMUS</h4>
                        </div>
                    </div>
                </Link>
                <div className="input-group">
                    <input type='text' className="form-seacch" placeholder="Nhập tên môn học" value={_search} onChange={changeSearch}/>
                    <button className="button_search" name="search" type="button" ><p>Search</p></button>
                </div>
                <Link to={'/contribute'}>
                    <div className="form-Distribution">
                        <img src={logo_gift} alt="" width="30" />
                        <h6>Đóng góp Đề thi</h6>
                    </div>
                </Link>
            </header>
        </>
    )
}

export default Header