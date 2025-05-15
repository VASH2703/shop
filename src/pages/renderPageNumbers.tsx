const  MAX_VISIBLE_PAGES = 7;
const OUTSIDE_PAGES = Math.ceil(MAX_VISIBLE_PAGES / 2);

function renderPageNumbers (totalPages: number, currentPage: number) {
    const pageNumbers: (string)[] = [];

    pageNumbers.push("1");

    if (totalPages <= MAX_VISIBLE_PAGES) {
        for (let i = 2; i <= totalPages; i++) {
            pageNumbers.push(''+i);
        }
        return pageNumbers;
    }
        
    if (currentPage <= OUTSIDE_PAGES) {
        for (let i = 2; i <= OUTSIDE_PAGES+1; i++) {
            pageNumbers.push(''+i);
        }
        pageNumbers.push('...');
        pageNumbers.push(''+totalPages);
        return pageNumbers;
    } 
    
    if (currentPage > totalPages - OUTSIDE_PAGES) {
        pageNumbers.push('...');
        for (let i = totalPages - OUTSIDE_PAGES; i <= totalPages; i++) {
            pageNumbers.push(''+i);
        }
        return pageNumbers;
    }
        
    pageNumbers.push('...');
    pageNumbers.push(''+(currentPage - 1));
    pageNumbers.push(''+currentPage);
    pageNumbers.push(''+(currentPage + 1));
    pageNumbers.push('...');
    pageNumbers.push(''+totalPages);
    return pageNumbers;
};

export default renderPageNumbers;