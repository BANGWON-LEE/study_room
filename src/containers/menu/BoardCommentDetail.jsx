import e from "cors";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import BoardCommentForm from "../../components/menu/BoardCommentForm";
import {
    comment,
    initializeForm,
    changeField,
} from "../../modules/boardComment";
import { comments } from "../../modules/boardComments";

function BoardCommentDetail({ match }) {
    const dispatch = useDispatch();
    let { form, boardComment, boardComments, boardCommentError, boardContents } =
    useSelector(({ boardComment, boardContents, boardComments }) => ({
        form: boardComment.comment,
        boardComment: boardComment.boardComment,
        boardCommentError: boardComment.error,
        boardContents: boardContents.boardContents,
        boardComments: boardComments.boardComments,
    }));

    const getUser = localStorage.getItem("users");
    const cm_mem_idx = JSON.parse(getUser).mem_idx; //JSON.parse를 사용하여 객체로 생성.
    const get_mem_userid = JSON.parse(getUser).mem_userid;

    const cm_bd_idx = boardContents.bd_idx;

    useEffect(() => {
        const bd_idx = match.params.bd_idx;
        console.log("댓글 방 번호 ");
        console.log(bd_idx);
        dispatch(
        comments({
            bd_idx,
        })
        );
    }, []);

    const [commentList, setCommentList] = useState([]);

    const onChange = (event) => {
        const { value, name } = event.currentTarget; // currentTarget는 선택 된 태그의 부모 태그까지 불러온다.

        dispatch(
        changeField({
            form: "comment",
            key: name,
            value,
        })
        );
    };

    let checkComment = form.cm_content;

    const onSubmit = useCallback(
        (event) => {
        let { cm_content } = form;

        let resultComment = {
            name: get_mem_userid,
            content: cm_content,
        };

        if ([cm_content].includes("")) {
            alert("빈 칸을 모두 입력하세요");
            return;
        }

        dispatch(comment({ cm_bd_idx, cm_content, cm_mem_idx }));
        setCommentList((commentList) => commentList.concat(resultComment));
        dispatch(initializeForm("comment"));
        },
        [checkComment]
    );

    //by 이방원
    // onSubmit 함수는 댓글을 input(text)를 통해 입력 후 [등록] 버튼을 클릭하면 실행되는 로직이다.
    // 댓글 내용 즉, input(text) 태그에 아무런 글이 입력되어 있지 않으면 "빈 칸을 모두 입력하세요"라는 알림창이 뜬다.
    // 위의 댓글의 작성자는 localStroage에 담겨 있는 해당 계정 아이디를 받아오고 위에서 말했듯이 input(text) 태그의 글 내용을 cm_content 변수에 담는다.
    // 그리고 dispatch의 액션 과정을 통해 댓글이 달릴 '게시판의 번호'와 '글 내용', '댓글을 남기는 계정의 고유번호'를 보낸다.
    // 그리고 댓글을 입력하고 버튼을 클릭하면 refresh되지 않아도 댓글창에 보일 수 있도록 하였다. (댓글창을 배열로 구성하여 댓글 내용을 concat메서드를 통해 배열에 추가 되도록 하였다.)
    // 그리고 댓글이 추가되면 기존에 있던 input(text) 태그에는 initializeForm을 활용하여 태그 안의 텍스트를 초기화 시킨다.
    // 2021-11-06


    function onKeyPress(e) {
        if (e.key === "Enter") {
        onSubmit();
        }
    }

    useEffect(() => {
        console.log("댓글 이니시얼");
        dispatch(initializeForm("comment"));
    }, [dispatch]);

    useEffect(() => {
        if (boardCommentError) {
        console.log("error!");
        console.log(boardCommentError);

        return;
        }
        if (boardComment) {
        console.log("성공");
        console.log(boardComment);

        return;
        }
    }, [boardComment, boardCommentError, dispatch]);

    return (
        <BoardCommentForm
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        boardComments={boardComments}
        onKeyPress={onKeyPress}
        commentList={commentList}
        />
    );
}

export default withRouter(BoardCommentDetail);
