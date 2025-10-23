function Pagination({prev,page,next}) {
    return(
        <div className="pagination">
            <button onClick={prev} disabled={page===1}>Prev</button>
            <span>Page:<strong>{page}</strong></span>
            <button onClick={next}>Next</button>
        </div>
        
    );
    
}
export default Pagination;