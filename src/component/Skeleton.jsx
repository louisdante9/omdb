export default function Skeleton() {
    return (
        <div className="movie-result">
            <div className='poster-image-placeholder'>
                <img alt="" className='skeleton' />
            </div>
            <div className='movie-details-placeholder'>
                <div className='skeleton'></div>
                <div className='skeleton'></div>
                <div className='skeleton'></div>
                <div className='skeleton'></div>
            </div>
        </div>
    )
}