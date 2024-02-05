const Giphs = ({giph}) => {
    return(<div className="gif-container">
            <img src={giph.images.original.url} />
        </div>)
}

export default Giphs;