import React from "react"
import styled from "styled-components"
import { auth, provider } from "../firebase"
const Login = () => {
  const GoogleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        alert(error.message)
      })
  }
  return (
    <Container>
      <Content>
        <CTA>
          <CTAlogo src="/images/cta-logo-one.svg" alt="" />
          <Signin onClick={GoogleAuth}>
            <GoogleButton>
              <GoogleButtonImg
                src="data:image/svg+xml;charset=utf-8,%3Csvg width='38' height='38' viewBox='0 0 101.33 101.33' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23fff' d='M0 0h101.33v101.33H0z'/%3E%3Cpath d='M50.667 36.167c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85c-4.16-3.87-9.59-6.25-16.06-6.25-9.38 0-17.49 5.38-21.44 13.22l7.98 6.19c1.89-5.69 7.2-9.91 13.46-9.91z' fill='%23ea4335'/%3E%3Cpath d='M73.647 51.217c0-1.57-.15-3.09-.38-4.55h-22.6v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z' fill='%234285f4'/%3E%3Cpath d='M37.197 55.257c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19c-1.63 3.24-2.55 6.9-2.55 10.78s.92 7.54 2.56 10.78z' fill='%23fbbc05'/%3E%3Cpath d='M50.667 74.667c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19c3.96 7.85 12.07 13.23 21.45 13.23z' fill='%2334a853'/%3E%3Cpath d='M26.667 26.667h48v48h-48z' fill='none'/%3E%3C/svg%3E"
                alt=""
              />
              <GoogleText>Continue with Google</GoogleText>
            </GoogleButton>
          </Signin>
          <Description>
            {" "}
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTAImage src="/images/cta-logo-two.png" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  )
}

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`
const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  height: 100%;
`

const BgImage = styled.div`
  background-image: url("/images/login-background.jpg");
  height: 100%;
  background-position: top;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  background-repeat: no-repeat;
  z-index: -1;
  left: 0;
`

const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
`

const CTAlogo = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`
const Signin = styled.div`
  font-weight: 600;
  color: #f9f9f9;
  /* background-color: #4285f4; */
  margin-bottom: 12px;
  /* width: 100%; */
  /* letter-spacing: 1.5px; */
  font-size: 15px;
  /* padding: 1.5px 0; */
  border: 1px solid transparent;
  border-radius: 900px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #4285f4;
    color: black;
  }
`

const GoogleButtonImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`
const GoogleText = styled.p``
const GoogleButton = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 1px 20px;
`

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 14px;
  margin: 0 0 24px;
  margin-top: 20px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`

const CTAImage = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
  /* height: 100%; */
`
export default Login
