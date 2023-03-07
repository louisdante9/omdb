import useMediaQuery from "../../hooks/useMediaQuery";
import PropTypes from 'prop-types'
import { Button } from "../Button";

export function Search({ formData: { title, year }, handleChange, handldeSubmit }) {
    const matches = useMediaQuery('(min-width:700px)')
    return (
        <div className='search'>
            <div className={`wrapper ${matches ? 'wrapper' : 'filter__mobile'}`}>
                <input type="text"
                    className="search-input"
                    name="title"
                    value={title || ''} onChange={handleChange}
                    placeholder="Enter Movies or Series name"
                />

                {matches && (<>
                    <input type="text" name="year" value={year || ''} onChange={handleChange} placeholder="Year:" />
                    <select name="genre" defaultValue={'DEFAULT'} onChange={handleChange}>
                        <option value="DEFAULT" disabled>Choose a genre ...</option>
                        <option value="movie">movie</option>
                        <option value="series">series</option>
                        <option value="episode">episode</option>
                    </select>
                </>)}

                <Button handleClick={handldeSubmit}>search</Button>
            </div>
                {!matches && (
                    <div className="filter__mobile">
                        <input type="text" name="year" value={year || ''} onChange={handleChange} placeholder="Year:" />
                        <select name="genre" defaultValue={'DEFAULT'} onChange={handleChange}>
                            <option value="DEFAULT" disabled>Choose a genre ...</option>
                            <option value="movie">movie</option>
                            <option value="series">series</option>
                            <option value="episode">episode</option>
                        </select>
                    </div>
                )}
        </div>

    )
}

Search.propTypes = {
    title: PropTypes.string,
    year: PropTypes.string,
    handleChange: PropTypes.func,
    handldeSubmit: PropTypes.func
}