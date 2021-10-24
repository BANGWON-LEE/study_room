import React from "react";
import StyledDiv2 from "../styled/StyledDiv2";

function BoardCommentsForm({ boardComment }) {
    return (
    <StyledDiv2 style={{ paddingLeft: "18px" }}>
        <div style={{ float: "left", display: "inline-block" }}>
            {boardComment.mem_userid}
        </div>
        <div style={{ display: "inline-block", paddingRight: "45px" }}>
            {boardComment.cm_content}
        </div>
    </StyledDiv2>
  );
}

export default BoardCommentsForm;
