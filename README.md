# study_room(seat for student)
# 스터디카페(독서실) 좌석 선택 시스템
독서실에 가서 좌석을 선택하는 시스템을 웹을 구현하였습니다.
<br/>

# 포트폴리오 구현 사이트 링크<br/>
http://study-room-service.s3-website.ap-northeast-2.amazonaws.com/

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
  
- 게시판 글수정<br/> 
  BoardEditForm.jsx(components폴더), BoardEditDetail.jsx(Containers폴더), BoardEdit(modules폴더)<br/>
  : 게시글 작성자와 접속 중인 아이디의 고유번호가 일치하면 게시글에서 글수정이라는 버튼이 보이도록 삼항연산자로 구현하였다.<br/>
    글수정 버튼을 클릭하면, 제목과 글내용을 수정할 수 있도록 하였고, 글이 수정되면 수정된 날짜로 글등록 날짜가 수정된다.<br/>
    
- 자동 로그아웃<br/>
  : TimeChoiceDetail.jsx에 코드를 입력했다. 사용할 시간과 좌석을 선택하면 버튼을 누른 후 바로 시간이 흐르도록 하였다.<br/>
    시간이 측정되는 것은 비동기 방식으로 setTimeOut메서드를 사용하였다. ms(밀리세컨드)를 사용하여 설정된 시간이 다 소모되면, 로그아웃이 되도록 하였다.
    로그아웃은 즉, 퇴실과 같은 기능이다.

<앞으로 구현할 기능><br/>
- 독서실 이용자 랭킹 순위를 구현하려고 한다. (누가 얼마나 많은 시간을 이용하였는지 순위를 보여줄 예정)
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


