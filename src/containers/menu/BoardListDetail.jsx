import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import BoardListForm from "../../components/menu/BoardListForm";
import Paging from "../../components/Paging";
import { list } from "../../modules/boardList";

function BoardListDetail() {

    const dispatch = useDispatch();
    const {boardLists, boardListError} = useSelector(({boardList}) => ({
        boardLists: boardList.boardList,
        boardListError : boardList.error
    }));    

    useEffect(() =>{
        if(boardLists) {
            console.log('게시판 리스트 성공');

        } else if(boardListError) {
            //console.log('게시판 리스트 오류');
            console.log(boardListError);
        }
    }, [boardLists, boardListError])

    const [page, setPage] = useState(0);

    const handlePageChange = (page) => {
        setPage(page);
        console.log(page);
    }

    useEffect(() => {
        const {bd_idx, bd_title, mem_userid,  bd_regDate } = "";
        dispatch(
            list({
                bd_idx, bd_title,  mem_userid,  bd_regDate, page
            })
        );
    }, [dispatch, page]);



    return (
        <>
            <BoardListForm
                boardLists={boardLists}
            />
            <Paging
                page={page}
                handlePageChange={handlePageChange}
            />
        </>
    )


}

export default withRouter(BoardListDetail);