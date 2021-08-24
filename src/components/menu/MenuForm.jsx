import React from 'react';
import StyledDiv1 from '../styled/StyledDiv1';
import StyledButtonMenu from '../styled/StyledButtonMenu';
import StyledDiv2 from '../styled/StyledDiv2';
import StyledH1 from '../styled/StyledH1';
import { Link } from 'react-router-dom';


const MenuForm = ({onSubmit}) => {

    return (
        <div className="body">
            <StyledDiv1>
                <form onSubmit={onSubmit}>
                    <div className="title">
                        <StyledH1>
                            WONY Study Club
                        </StyledH1>
                    </div>        
                    <StyledDiv2>
                        <Link to='/timeChoice'>
                            <StyledButtonMenu>
                                입장
                            </StyledButtonMenu>
                        </Link>
                    </StyledDiv2>
                    <StyledDiv2>
                        <StyledButtonMenu>자리이동</StyledButtonMenu>
                    </StyledDiv2>
                    <StyledDiv2>
                        <StyledButtonMenu>퇴실</StyledButtonMenu>
                    </StyledDiv2>
                </form>    
            </StyledDiv1>
        </div>
    )

}

export default MenuForm;