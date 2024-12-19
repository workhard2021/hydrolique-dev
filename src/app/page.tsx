'use client';
import LayoutPage from "./components/layoutPage";
import AfterHeader from "./components/home/after-header";
import UsValues from "./components/home/values";
import Expertises from './components/home/expertises';
import { RevealWrapper } from "next-reveal";
import { Wrapper } from "./containers/wrapper";
import { Logo } from "./components/logo";

export default function Home() {
  return (<>
      <LayoutPage>
        <RevealWrapper className="w-full relative" delay={200} duration={1000} reset={true}>
          <Logo/>
        </RevealWrapper>
        <Wrapper>
        <AfterHeader/>
        <RevealWrapper className="w-full relative" delay={200} duration={1000} reset={true}>
          <UsValues/>
        </RevealWrapper>
          <Expertises/>
        </Wrapper>
      </LayoutPage>
      </>
  );
}

