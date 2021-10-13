import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import BoardListForm from "../../components/menu/BoardListForm";
import { list } from "../../modules/boardList";

function BoardListDetail() {

    const dispatch = useDispatch();
    const {boardList, boardListError} = useSelector(({boardList}) => ({
        boardList: boardList.boardList,
    }));

    useEffect(() => {
        const { bd_title, bd_textarea, mem_userid,  bd_regDate } = "";
        dispatch(
            list({
                bd_title, bd_textarea, mem_userid,  bd_regDate
            })
        );
    }, [dispatch]);

    useEffect(() =>{
        if(boardList) {
            console.log('게시판 성공');
            console.log(boardList);

        }
    }, [boardList])




    return (
        <BoardListForm

        />
    )


}

export default withRouter(BoardListDetail);