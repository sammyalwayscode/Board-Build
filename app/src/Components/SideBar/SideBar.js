import React from "react";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaUserSecret } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { BsFillCartCheckFill } from "react-icons/bs";
import { GrProductHunt } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import { ImMenu } from "react-icons/im";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const SideBar = () => {
  const [toogle, setToggle] = React.useState(false);
  const [toogleMenu, setToggleMenu] = React.useState(false);

  const onToogle = () => {
    setToggle(!toogle);
  };
  const onToogleMenu = () => {
    setToggleMenu(!toogleMenu);
  };
  return (
    <>
      {toogle ? (
        <Container>
          <Wrapper>
            <LogoHolder>
              <Logo />
            </LogoHolder>
            <NavHolder>
              <Naviation>
                <Nav>
                  <Icon>
                    <AiFillHome />
                  </Icon>
                  <span>Home</span>
                </Nav>
                <Nav>
                  <Icon>
                    <CgProfile />
                  </Icon>
                  <span>Profile</span>
                </Nav>
                <Nav>
                  <Icon>
                    <FaUserSecret />
                  </Icon>
                  <span>Users</span>
                </Nav>
                <Nav>
                  <Icon>
                    <GrGraphQl />
                  </Icon>
                  <span>Stats</span>
                </Nav>
                <Nav>
                  <Icon>
                    <BsFillCartCheckFill />
                  </Icon>
                  <span>Cart</span>
                </Nav>
                <Nav>
                  <Icon>
                    <GrProductHunt />
                  </Icon>
                  <span>Products</span>
                </Nav>
              </Naviation>
            </NavHolder>
            <Other>
              <Nav>
                <Icon>
                  <BiLogOut />
                </Icon>
                <span>Log Out</span>
              </Nav>
              <Nav>
                <Icons onClick={onToogle}>
                  <Icon>
                    {" "}
                    <BsFillArrowLeftCircleFill />{" "}
                  </Icon>
                </Icons>
              </Nav>
            </Other>
          </Wrapper>
        </Container>
      ) : (
        <InnerMenu>
          <Menu onClick={onToogleMenu}>
            <ImMenu />
          </Menu>
          {toogleMenu ? (
            <InnerContainer>
              <Wrapper>
                <LogoHolder>
                  <Logo />
                </LogoHolder>
                <NavHolder>
                  <Naviation>
                    <Nav>
                      <InnerIcon>
                        <AiFillHome />
                      </InnerIcon>
                    </Nav>
                    <Nav>
                      <InnerIcon>
                        <CgProfile />
                      </InnerIcon>
                    </Nav>
                    <Nav>
                      <InnerIcon>
                        <FaUserSecret />
                      </InnerIcon>
                    </Nav>
                    <Nav>
                      <InnerIcon>
                        <GrGraphQl />
                      </InnerIcon>
                    </Nav>
                    <Nav>
                      <InnerIcon>
                        <BsFillCartCheckFill />
                      </InnerIcon>
                    </Nav>
                    <Nav>
                      <InnerIcon>
                        <GrProductHunt />
                      </InnerIcon>
                    </Nav>
                  </Naviation>
                </NavHolder>
                <Other>
                  <Nav>
                    <InnerIcon>
                      <BiLogOut />
                    </InnerIcon>
                  </Nav>
                  <Nav>
                    <Icons onClick={onToogle}>
                      <InnerIcon>
                        {" "}
                        <BsFillArrowRightCircleFill />{" "}
                      </InnerIcon>
                    </Icons>
                  </Nav>
                </Other>
              </Wrapper>
            </InnerContainer>
          ) : null}
        </InnerMenu>
      )}
    </>
  );
};

export default SideBar;

const InnerMenu = styled.div`
  display: flex;
  @media screen and (max-width: 923px) {
    display: flex;
    width: 100px;
    position: relative;
  }
`;
const Menu = styled.div`
  display: none;
  @media screen and (max-width: 923px) {
    display: flex;
    width: 100px;
    justify-content: center;
    font-size: 30px;
    position: absolute;
  }
`;
const InnerIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const InnerContainer = styled.div`
  width: 100px;
  height: 100vh;
  background-color: lightgray;
  border-right: 1px;
  @media screen and (max-width: 923px) {
    display: flex;
    width: 100px;
    height: 100vh;
    background-color: lightgray;
  }
`;
const Icons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;
  padding-right: 10px;
  font-size: 20px;

  @media screen and (max-width: 923px) {
    display: none;
  }
`;
const Other = styled.div``;
const Container = styled.div`
  width: 300px;
  height: 100vh;
  background-color: lightgray;
  border-right: 1px;
  @media screen and (max-width: 923px) {
    display: flex;
    width: 100px;
    height: 100vh;
    background-color: lightgray;
  }
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  /* align-items: center; */
`;
const Logo = styled.div`
  width: 200px;
  height: 60px;
  background-color: red;
  object-fit: cover;
  border: 2px solid #fff;

  @media screen and (max-width: 923px) {
    width: 100px;
  }
`;
const NavHolder = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
const Naviation = styled.div``;
const Nav = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  transition: all 350ms;
  margin: 5px 0;

  span {
    font-size: 15px;
    font-weight: bold;
  }

  :hover {
    cursor: pointer;
    background-color: #123456;
    color: #fff;
  }

  @media screen and (max-width: 923px) {
    display: flex;
    width: 100px;
    justify-content: center;
    span {
      display: none;
    }
  }
`;
const Icon = styled.div`
  display: flex;
  margin-bottom: 2px;
  margin-right: 10px;
  margin-left: 10px;
`;
const LogoHolder = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px 0;
`;
