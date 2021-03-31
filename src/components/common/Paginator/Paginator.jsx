import React from 'react';
import style from './Paginator.module.css';

const Paginator = (props) => {

    const checkNumRange = (page, totalPage) => {
        if(totalPage > page && page > 0) {
            return true
        }
    }

    const pages = Math.ceil(props.totalCounts / props.pageSize);

    let pagesArr = [props.focusPage];

    for(let i = 1; i <= 3; i++) {
        if(checkNumRange(props.focusPage + i, pages)) {
            pagesArr.push(props.focusPage + i);
        }
        if(checkNumRange(props.focusPage - i, pages)) {
            pagesArr.unshift(props.focusPage - i);
        }
    }

    const pagesElem = pagesArr.map(page => {
        return <span
            key={page}
            className={page === props.focusPage ? style.focusPage : undefined}
            onClick={() => {props.onChangePage(page)}}
        >{page}</span>
    });

    return (
        <div className={style.pages}>
            {pagesElem}
        </div>
    )
}

export default Paginator