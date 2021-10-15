import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import BoardWriteForm from '../../components/menu/BoardWriteForm';
import { changeField, initializeForm, write } from '../../modules/boardWrite';

function BoardWriteDetail({history}) {
    
    const dispatch = useDispatch();
    const {form, boardWrite, boardWriteError} = useSelector(({boardWrite}) => ({
        form : boardWrite.write,
        boardWrite: boardWrite.boardWrite,
        boardWriteError : boardWrite.boardWriteError,
    }))
    
    const getUser = localStorage.getItem("users");
    const mem_idx = JSON.parse(getUser).mem_idx; //JSON.parse를 사용하여 객체로 생성.
    

    //useCallback을 사용하여 최적화를 시킴 이전 코드보다 최적화 된 것을 Profiler(개발자 도구의  redux-devtools)로 확인함    
    const onChange = useCallback((e) => {
        const {value, name} = e.currentTarget;
        console.log("게시판");
        dispatch(
            changeField({
            form: "write",
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
        dispatch(write({bd_title, bd_textarea,mem_idx }));
        history.push("/boardList");
        };   
        
    
        useEffect(() => {
            console.log('이니시얼');
            dispatch(initializeForm("write"));
        }, [dispatch]);    

        useEffect(() => {
            if (boardWriteError) {
                console.log('error!');
                console.log(boardWriteError);
    
                return;
            }
            if (boardWrite) {
                console.log("성공");
                console.log(boardWrite);
                
                return;
                
            }
    
            }, [boardWrite, boardWriteError, dispatch ]);
    

        return(
            <BoardWriteForm
                form={form}
                onChange={onChange}
                onSubmit={onSubmit}
            />
        )



}

export default withRouter(BoardWriteDetail);