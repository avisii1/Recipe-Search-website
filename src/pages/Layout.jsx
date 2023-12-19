import * as bootstrap from 'bootstrap'
import { Link, Outlet, useNavigate } from "react-router-dom"
import { SearchForm } from "../components/SearchForm"
import { useDispatch, useSelector } from "react-redux"
import { logOut } from "../services/firebase"
import { remove } from "../store/userSlice"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export const Layout = () => {

    let user = useSelector(state => state.user.value)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logout = () => {
        logOut()
            .then(() => {
                dispatch(remove())
                navigate('/login')
            })
            .catch(err => {})
    }

    return <div className="container bg-white pt-3">
        <header className="row">
            <div className="col-auto">
                <Link to="/" className="link-success text-decoration-none">
                    <h1><i className="fa-solid fa-film"></i> Movie Info</h1>
                </Link>
            </div>
            <div className="col">
                <ul className="nav justify-content-center">
                    {
                        Object.keys(user).length ?
                        <>
                            <li className="nav-item">
                                <span className="nav-link">{user.name}</span>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-link nav-link" onClick={logout}>Logout</button>
                            </li>
                        </> :
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to='login'>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='register'>Register</Link>
                            </li>
                        </>
                    }
                </ul>
            </div>
            <div className="col-4 ms-auto">
                <SearchForm />
            </div>
        </header>

        <Outlet />

        <footer className="row text-bg-dark py-3">
            <div className="col-4">
                <div className="row">
                    <div className="col-12">
                        <h2>
                            <i className="fa-solid fa-film"></i> Movie Info
                        </h2>
                    </div>
                    <div className="col-12">
                        <strong>Email: </strong>
                        <a href="mailto:info@movieinfo.com" className="link-light text-decoration-none">info@movieinfo.com</a>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="row">
                    <div className="col-12">
                        <h3>Find us on</h3>
                    </div>
                    <div className="col-12">
                        <a href="https://facebook.com" target="_blank" className="link-light">
                            <i className="fa-brands fa-facebook fa-2x"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" className="link-light ms-2">
                            <i className="fa-brands fa-twitter fa-2x"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" className="link-light ms-2">
                            <i className="fa-brands fa-instagram fa-2x"></i>
                        </a>
                        <a href="https://youtube.com" target="_blank" className="link-light ms-2">
                            <i className="fa-brands fa-youtube fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="row">
                    <div className="col-12">
                        <h3>Subscribe to newsletter</h3>
                    </div>
                    <div className="col-12">
                        <div className="input-group">
                            <input type="email" className="form-control" placeholder="Enter email" />
                            <button className="btn btn-outline-light">
                                <i className="fa-solid fa-send"></i>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 my-3 text-center">
                &copy; Movie Info, 2022. All rights reserved.
            </div>
        </footer>
    </div>
}