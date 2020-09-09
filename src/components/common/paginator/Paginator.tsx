import React, { useState } from 'react'
import style from './Paginator.module.css'
import cn from 'classnames'

const Paginator: React.FC<PropsType> = ({currentPage, pageCount, pageSize, pageEvent, portionSize = 10}) => {

    let pagesCount = Math.ceil(pageCount / pageSize);

    let pages = []

    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    let currentPortionNumber = Math.floor(currentPage / portionSize);
    let portionCount = Math.ceil(pagesCount / portionSize);
    currentPortionNumber === 0 ? currentPortionNumber = 1 : currentPortionNumber = currentPortionNumber
    let [portionNumber, setPortionNumber] = useState(currentPortionNumber);
    let leftBorderPagination = (portionNumber - 1) * portionSize + 1;
    let rightBorderPagination = portionNumber * portionSize; 

    return <div className={style.pagination}>
        <div className={style.paginationCon}>
        {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)} className={style.btn}>Пред.</button>}
        {pages
            .filter(i => (i >= leftBorderPagination && i <= rightBorderPagination))
            .map(p => <span className = { cn({ [style.currentPage]: currentPage === p }, style.pagItem )}
                            onClick={() => pageEvent(p)} key={p}>{p}</span>)}
        {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)} className={style.btn}>След.</button>}
    </div>
    </div>
}

export default Paginator



type PropsType = {
    currentPage: number
    pageCount: number
    pageSize: number
    pageEvent: (n: number) => void
    portionSize?: number
}