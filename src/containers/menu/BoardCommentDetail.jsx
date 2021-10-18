import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import BoardCommentForm from "../../components/menu/BoardCommentForm";
import { comment, initializeForm, changeField } from "../../modules/boardComment";
import { comments } from "../../modules/boardComments";

function BoardCommentDetail({match}) {
    const dispatch = useDispatch();
    const {form, boardComment, boardComments, boardCommentError ,boardContents} = useSelector(({boardComment, boardContents, boardComments}) => ({
        form : boardComment.comment,
        boardComment : boardComment.boardComment,
        boardCommentError : boardComment.error,
        boardContents: boardContents.boardContents,
        boardComments : boardComments.boardComments
        
    }));


    console.log('댓글 data 확인하기');
    console.log(boardComments);

    const getUser = localStorage.getItem("users");
    const cm_mem_idx = JSON.parse(getUser).mem_idx; //JSON.parse를 사용하여 객체로 생성.
    
    const cm_bd_idx = boardContents.bd_idx;
    console.log("댓글 게시판 번호");
    console.log(cm_bd_idx);

    
    useEffect(() => {
        const bd_idx = match.params.bd_idx;
        console.log('댓글 방 번호 ');
        console.log(bd_idx);
        dispatch(
            comments({
                bd_idx, 
            })
        );
    }, []);


    const onChange = (event) => {
        const { value, name } = event.currentTarget; // currentTarget는 선택 된 태그의 부모 태그까지 불러온다.
        dispatch(
            changeField({
            form: "comment",
            key: name,
            value,
        }),
        );
        };



    function onSubmit(event){
        event.preventDefault();
        const { cm_content } = form;
        
        if ([cm_content].includes("")) {
            alert("빈 칸을 모두 입력하세요")
            return;
        }
        dispatch(comment({cm_bd_idx, cm_content, cm_mem_idx}));
        };   


        
    
    useEffect(() => {
        console.log('댓글 이니시얼');
        dispatch(initializeForm("comment"));
    }, [dispatch]);    



    useEffect(() => {
        if (boardCommentError) {
            console.log('error!');
            console.log(boardCommentError);

            return;
        }
        if (boardComment) {
            console.log("성공");
            console.log(boardComment);
            
            return;
            
        }

        }, [boardComment, boardCommentError, dispatch ]);



    return(
        <BoardCommentForm
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            boardComments={boardComments}
        />
    );


}

export default withRouter(BoardCommentDetail);