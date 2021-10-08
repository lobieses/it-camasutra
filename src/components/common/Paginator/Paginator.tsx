import React, {FC} from 'react';
import style from './Paginator.module.css';
//icons
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {userType} from "../../../types/types";

type PropsType = {
    totalCounts: number,
    pageSize: number,
    focusPage: number,
    onChangePage: (page: number) => void,
}

const Paginator: FC<PropsType> = (props) => {
    const checkNumRange = (page: number, totalPage: number) => {
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
            className={page === props.focusPage ? style.focusPage : ''}
            onClick={() => {props.onChangePage(page)}}
        >{page}</span>
    });

    const onBack = () => {
        if(props.focusPage !== 1) {
            props.onChangePage(props.focusPage -1)
        }
    }

    const onForward = () => {
        if(props.focusPage < pages) {
            props.onChangePage(props.focusPage + 1)
        }
    }

    return (
        <div className={style.pages}>
            <ArrowBackIosIcon onClick={onBack}/>
            {pagesElem}
            <ArrowForwardIosIcon onClick={onForward}/>
        </div>
    )
}

export default Paginator