import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { contents } from "../../modules/boardContents";
import BoardContentsForm from "../../components/menu/BoardContentForm";

function BoardContentsDetail({ match, history }) {
  const dispatch = useDispatch();
  const { boardContents, boardContentsError } = useSelector(({ boardContents }) => ({
    boardContents: boardContents.boardContents,
    boardContentsError: boardContents.error 
  }));
  
  const getUser = localStorage.getItem("users");
  const cm_mem_idx = JSON.parse(getUser).mem_idx;
  //by 이방원
  // localStorage를 통하여 접속해 있는 계정의 고유번호(mem_idx)를 가져온다.
  // 게시글을 만든 게시자의 고유 번호와 비교하기 위해서 가져왔다.
  // 2021-11-10


  useEffect(() => {
    const bd_idx = match.params;
    dispatch(contents(bd_idx));
  }, []);
 

  function onBack(){
    history.push("/boardList/0");
  }

  useEffect(() => {
    if (boardContents) {
      //console.log("성공contents");
      //console.log(boardContents);
    }

    if (boardContentsError) {
      if (boardContentsError.response.status === 400) {
        return;
      }
      //console.log(`BoardContentsError!`);
      //console.log(boardContentsError);

      return;
    }
  }, [boardContents, boardContentsError]);
  

  return <BoardContentsForm boardContents={boardContents} onBack={onBack} cm_mem_idx={cm_mem_idx} />;
}

export default withRouter(BoardContentsDetail);
