import React from "react";
import StyledButton1 from "../styled/StyledButton1";
import StyledDiv2 from "../styled/StyledDiv2";
import StyledDiv3 from "../styled/StyledDiv3";
import StyledText3 from "../styled/StyledText3";
import BoardCommentsForm from "./BoardCommentsForm";

function BoardCommentForm({
    form,
    boardComments,
    onChange,
    onSubmit,
    onKeyPress,
    commentList,
}) {
    const commentDetail = commentList;

    return (
        <div className="body" style={{ height: "90%" }}>
            <StyledDiv3
                style={{ backgroundColor: "gray", paddingTop: "10px", height: "100%" }}
            >
                {boardComments && (
                    <div>
                        {boardComments.map((boardComment) => (
                        <BoardCommentsForm boardComment={boardComment} />
                        ))}
                    </div>
                )}
                <StyledDiv2 style={{ paddingLeft: "7px" }}>
                    {commentDetail && (
                    <StyledDiv2 style={{ paddingLeft: "12px", paddingTop: "5px" }}>
                        {commentDetail.map((comment) => {
                            return (
                                <div>
                                    <div style={{ float: "left", display: "inline-block" }}>
                                    {comment.name}
                                    </div>
                                    <div
                                        style={{ display: "inline-block", paddingRight: "45px" }}
                                    >
                                        {comment.content}
                                    </div>
                                </div>
                                );
                        })}
                    </StyledDiv2>
                    )}
                </StyledDiv2>
                <StyledText3
                    value={form.cm_content}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                    name="cm_content"
                    style={{
                        display: "inline-table",
                        marginRight: "0px",
                        paddingRight: "0px",
                        borderRightWidth: "0px",
                    }}
                />
                <StyledButton1
                    style={{ hegiht: "18px", fontSize: "11.5px", marginLeft: "0px" }}
                    onClick={onSubmit}
                >
                    등록
                </StyledButton1>
            </StyledDiv3>
        </div>
    );
}

export default BoardCommentForm;
