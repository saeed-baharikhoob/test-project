interface usePaginationProps {
    currentPage: number
    total: number
    limit: number
    onPageChange: (page: number) => void
}
const usePagination = ({total,limit,currentPage,onPageChange}:usePaginationProps)=>{
    const totalPage = Math.ceil(total / limit)
    const pages = Array.from({length:totalPage}, (_,i) => i + 1)
const handePageChange = (newPage: number) => {
        if(currentPage >= 1 && currentPage <= totalPage) {
            onPageChange(newPage)
        }
}
    return (
        <div>
           <button onClick={() => handePageChange(currentPage - 1)}>
               prev
           </button>
            {pages.map((page: number) => (
                <button onClick={() => handePageChange(page)}>
                    {page}
                </button>
            ))}
            <button onClick={() => handePageChange(currentPage + 1)}>
                next
            </button>
        </div>
    )
}
export default usePagination