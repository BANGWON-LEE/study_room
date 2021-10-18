# study_room(seat for student)
# 스터디카페(독서실) 좌석 선택 시스템
독서실에 가서 좌석을 선택하는 시스템을 웹을 구현하였습니다.

### <현재 구현한 기능>
##### components폴더 파일은 뷰 역할을 담당한다.
##### containers폴더 파일은 뷰에서 입력된 정보 등을 받아 dispatch(액션)으로 modules폴더에 있는 파일에 명령을 한다.
##### modules폴더는 containers 폴더에 있는 파일의 dispatch(액션) 명령을 받아 미들웨어(redux-saga)단계에서 db데이터를 주고 받는다. 
##### 그 후 reducer의 역할로 이전 상태값을 새로운 상태값으로 바꿔주어 components폴더(뷰 역할) 파일에 전달한다. 

- 회원가입.<br/> 
  RegisterForm.jsx(components폴더), RegisterDetail.jsx(containers폴더), auth.js(modules폴더)<br/>

- 로그인.<br/>
  UsersForm.jsx(components폴더), UserDetail.jsx(containers폴더), users.js(modules폴더)<br/>

- 메뉴.<br/>  
  MenuForm.jsx(components폴더), MenuDetail.jsx(containers폴더)<br/> 

- 좌석 및 좌석 사용할 시간 선택<br/> 
  TimeChoiceForm.jsx(components폴더 / 시간과 금액 선택을 보여줌), SeatForm.jsx(components폴더/ 좌석을 보여줌) SeatZoneForm.jsx(components폴더/ 좌석을 보여줌)<br/>
  TimeChoiceDetail.jsx(containers폴더 / 시간과 금액 선택), seatDetail.jsx(containers폴더 / 좌석 선택), seat.js(modules폴더 / 좌석 선택에 활용됨),<br/> 
  zones.js(modules폴더 / 전체 좌석의 정보를 보여줌)<br/> 

- 유저정보(좌석 선택 후 사용가능).<br/>
  UserInfoForm(components폴더), UserInfoDetail.jsx(containers폴더), userInfo.js(modules폴더)<br/>

- 퇴실(로그아웃)<br/>
  MenuForm.jsx(components폴더 / 메뉴 컴포넌트에 로그아웃 기능 버튼이 있음), MenuDetail.jsx(containers폴더 / 해당 파일에 로그아웃 기능  localStorage.removeItem이 있다.<br/>
  logout.js(modules폴더)<br/>
  
- 게시판 글작성<br/>
  BoardWriteForm.jsx(components폴더), BoardWriteDetail.jsx(containers폴더), boardWrite.js(modules폴더)<br/> 
  
- 게시판 리스트<br/>
  BoardListForm.jsx(components폴더), BoardListZoneForm.jsx(components폴더), BoardListDetail.js(containers폴더), boardList.js(modules폴더)<br/>
  
- 게시판 글내용<br/>
  BoardContentForm.jsx(components폴더), BoardContentsDetail.jsx(containers폴더), boardContents.js(modules폴더)<br/>  

- 게시판 댓글 글작성 및 보기<br/>
  BoardCommentForm.jsx(components폴더 / 글작성) BoardCommentDetail.jsx(containers폴더 / 글작성), boardComment(modules폴더 / 글작성)<br/>
  BoardCommenstForm.jsx(components폴더 / 글내용) BoardCommentsDetail.jsx(containers폴더 / 글내용), boardComments(modules폴더 / 글내용)<br/>
  

<앞으로 구현할 기능><br/>
- 게시판, 자동 로그아웃<br/>
1. 게시판<br/>
: 게시판 글수정 구현할 예정, css도 새로 손봐야 함

### this project is for my skill improve

## information about project
this project name is study_room.<br/>
student and studying person can select a seat and can check selected seat<br/>
 
if you select a seat then your account is loged out so if you want check booking seat<br/>
you must log in to study room<br/> 
<br/>
my next goal is automatic log out <br/>
<br/>
automatic log out is if you selected a seat to study for an hour then your seat will be log out after an hour<br/>   
<br/>
thaks for reading



>>>>>>> 6761d6d065fb9ef1fbb124bb5d387967db4e8677


