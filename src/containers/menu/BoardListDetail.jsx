import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import BoardListForm from "../../components/menu/BoardListForm";
import { list } from "../../modules/boardList";

function BoardListDetail() {

    const dispatch = useDispatch();
    const {boardLists, boardListError} = useSelector(({boardList}) => ({
        boardLists: boardList.boardList,
        boardListError : boardList.error
    }));    
    console.log('디테일 맨 위');
    console.log(boardLists);

    useEffect(() => {
        const {bd_idx, bd_title, mem_userid,  bd_regDate, bd_recommand } = "";
        dispatch(
            list({
                bd_idx, bd_title,  mem_userid,  bd_regDate, bd_recommand
            })
        );
    }, [dispatch]);


    useEffect(() =>{
        if(boardLists) {
            console.log('게시판 리스트 성공');
            //console.log(boardList);
        } else if(boardListError) {
            console.log('게시판 리스트 오류');
            console.log(boardListError);
        }
    }, [boardLists, boardListError])



    return (
        <BoardListForm
        boardLists={boardLists}
        />
    )


}

export default withRouter(BoardListDetail);