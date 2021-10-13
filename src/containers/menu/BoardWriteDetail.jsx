import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import BoardWriteForm from '../../components/menu/BoardWriteForm';
import { changeField, initializeForm, write } from '../../modules/boardWrite';

function BoardWriteDetail({history}) {
    //const [error, setError] = useState('정보를 입력하세요');
    const dispatch = useDispatch();
    const {form, boardWrite, boardWriteError} = useSelector(({boardWrite}) => ({
        form : boardWrite.write,
        boardWrite: boardWrite.boardWrite,
        boardWriteError : boardWrite.boardWriteError,
    }))
    
    const getUser = localStorage.getItem("users");
    // 다시 Object로 변환
    const mem_userid = JSON.parse(getUser).mem_userid;
    const mem_idx = JSON.parse(getUser).mem_idx; 
    console.log(mem_userid);


    const onChange = (event) => {
        const { value, name } = event.currentTarget; // currentTarget는 선택 된 태그의 부모 태그까지 불러온다.
        dispatch(
            changeField({
            form: "write",
            key: name,
            value,
            }),
            );
        };

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