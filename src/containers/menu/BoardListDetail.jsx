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

    const [bd_page, bdSetPage] = useState(0);
    // by 이방원
    // 페이징으로 불러 올 현제 페이지를 알려주는 상태값
    // 2021-12-10

    const handlePageChange = (bd_page) => {
        bdSetPage(bd_page);
        console.log(bd_page);
    }

    // by 이방원
    // 페이지 번호를 클릭할 때마다 bd_page의 상태값이 바뀌도록 도와준다.
    // 2021-12-10    

    useEffect(() => {
        const {bd_idx, bd_title, mem_userid,  bd_regDate } = "";
        dispatch(
            list({
                bd_idx, bd_title,  mem_userid,  bd_regDate, bd_page
            })
        );
    }, [dispatch, bd_page]);



    return (
        <>
            <BoardListForm
                boardLists={boardLists}
            />
            <Paging
                bd_page={bd_page}
                handlePageChange={handlePageChange}
            />
        </>
    )


}

export default withRouter(BoardListDetail);