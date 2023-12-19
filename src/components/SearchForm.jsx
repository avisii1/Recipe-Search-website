import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export const SearchForm = () => {
    let [term, setTerm] = useState('')

    const navigate = useNavigate()

    const handleChange = e => {
        setTerm(e.target.value)
    }

    const handleSubmit = () => {
        navigate(`/search?q=${term}`)
    }

    return <div className="input-group">
        <input type="search" className="search" placeholder="Search" value={term} onChange={handleChange} />
        <button className="btn" onClick={handleSubmit}><FontAwesomeIcon icon={faSearch} /></button>
    </div>
}