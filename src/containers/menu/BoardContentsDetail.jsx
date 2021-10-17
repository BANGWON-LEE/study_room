import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { contents } from "../../modules/boardContents";
import BoardContentsForm from "../../components/menu/BoardContentForm";

function BoardContentsDetail({ match }) {
  const dispatch = useDispatch();
  const { boardContents, boardContentsError } = useSelector(({ boardContents }) => ({
    boardContents: boardContents.boardContents,
    boardContentsError: boardContents.error 
  }));

  console.log(boardContents.mem_userid);

  useEffect(() => {
    const bd_idx = match.params;
    dispatch(contents(bd_idx));
  }, []);
  // 메뉴에서 [사용자 정보] 버튼을 클릭하면 [사용자 정보] 컴포넌트로 이동한다. 그때 첫 렌더링 하면서 mem_userid값으로 액션을 보낸다. mem_userid는 match.params 즉, URL을 통해 넘어오는 값을 받아온다.

  useEffect(() => {
    if (boardContents) {
      console.log("성공contents");
      console.log(boardContents);
    }

    if (boardContentsError) {
      if (boardContentsError.response.status === 400) {
        return;
      }
      console.log(`BoardContentsError!`);
      console.log(boardContentsError);

      return;
    }
  }, [boardContents, boardContentsError]);

  return <BoardContentsForm boardContents={boardContents} />;
}

export default withRouter(BoardContentsDetail);
