import React from "react";
import StyledFooter from "./styled/StyledFooter";
import StyledFooterContentP from "./styled/StyledFooterContentP";
import StyledFooterDiv1 from "./styled/StyledFooterDiv1";
import StyledFooterGitA from "./styled/StyledFooterGitA";
import StyledFooterGitImg from "./styled/StyledFooterGitImg";


export default function FooterDiv() {
    return(
        <StyledFooter>
                <StyledFooterDiv1>
                    <StyledFooterContentP>
                        <StyledFooterGitA href="https://github.com/BANGWON-LEE">
                            <StyledFooterGitImg src="/img/git_hub.png" />
                            GitHub
                        </StyledFooterGitA>
                        <br/>
                        <StyledFooterGitA href="mailto:qkddnjs31@gmail.com" > 
                            <StyledFooterGitImg src="/img/mail.png" />
                            qkddnjs31@gmail.com
                        </StyledFooterGitA>
                        <br/>
                        © 2021 - Template developed by wony
                    </StyledFooterContentP>
                </StyledFooterDiv1>
            </StyledFooter>
    );
}