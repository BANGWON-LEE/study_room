import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import BoardEditForm from '../../components/menu/BoardEditForm';
import { changeField, initializeForm, edit } from '../../modules/boardEdit';

function BoardEditDetail({history, match}) {
    
    const dispatch = useDispatch();
    const {form, boardEdit, boardEditError} = useSelector(({boardEdit}) => ({
        form : boardEdit.edit,
        boardEdit: boardEdit.boardEdit,
        boardEditError : boardEdit.boardEditError,
    }))
    
    const getUser = localStorage.getItem("users");
    const mem_idx = JSON.parse(getUser).mem_idx; //JSON.parse를 사용하여 JSON 객체로 생성.
    const bd_idx = match.params.bd_idx;

    //useCallback을 사용하여 최적화를 시킴 이전 코드보다 최적화 된 것을 Profiler(개발자 도구의  redux-devtools)로 확인함    
    const onChange = useCallback((e) => {
        const {value, name} = e.currentTarget;
        //console.log("게시판");
        dispatch(
            changeField({
            form: "edit",
            key: name,
            value,
            }),
            );
    }, [dispatch])

    function onSubmit(event){
        
        const { bd_title, bd_textarea } = form;
        
        if ([bd_title, bd_textarea].includes("")) {
            alert("빈 칸을 모두 입력하세요")
            return;
        }
        dispatch(edit({bd_title, bd_textarea, mem_idx, bd_idx }));
        history.push("/menu");
        };   
        
        useEffect(() => {
            //console.log('이니시얼');
            dispatch(initializeForm("edit"));
        }, [dispatch]);    

        useEffect(() => {
            if (boardEditError) {
                //console.log('error!');
                //console.log(boardEditError);
    
                return;
            }
            if (boardEdit) {
                //console.log("성공");
                //console.log(boardEdit);
                
                return;
                
            }
    
            }, [boardEdit, boardEditError, dispatch ]);
    
        return(
            <BoardEditForm
                form={form}
                onChange={onChange}
                onSubmit={onSubmit}
            />
        )
}

export default withRouter(BoardEditDetail);