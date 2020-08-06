import React, { useState } from 'react'
import style from './Paginator.module.css'

const Paginator = ({currentPage, pageCount, pageSize, pageEvent, portionSize = 10}) => {

    let pagesCount = Math.ceil(pageCount / pageSize);

    let pages = []

    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    let currentPortionNumber = Math.floor(currentPage / portionSize);
    let portionCount = Math.ceil(pagesCount / portionSize);
    currentPortionNumber === 0 ? currentPortionNumber = 1 : currentPortionNumber = currentPortionNumber
    let [portionNumber, setPortionNumber] = useState(currentPortionNumber);
    let leftBorderPagination = (portionNumber - 1) * pageSize + 1;
    let rightBorderPagination = portionNumber * pageSize; 

    return <div className={style.pagination}>
        {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>Пред.</button>}
        {pages
            .filter(i => (i >= leftBorderPagination && i <= rightBorderPagination))
            .map(p => <span className={currentPage === p ? style.currentPage : style.pag_item}
                            onClick={() => pageEvent(p)} key={p}>{p}</span>)}
        {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>След.</button>}
    </div>
}

export default Paginator