'use client';
import { RevealWrapper } from "next-reveal";
import { NosValeurSociete } from "../components/nos-valeur-societe";
import LayoutPage from "../components/layoutPage";
import { NosAdn } from "../components/adn-nos";
export default function AdnPage(){
    return (<LayoutPage>
        <RevealWrapper className="w-full relative" delay={200} duration={1000} reset={true}>
            <NosAdn/>
        </RevealWrapper>
        <RevealWrapper className="w-full relative" delay={1000} duration={1000} reset={true}>
           <NosValeurSociete/>
        </RevealWrapper> 
    </LayoutPage>)
}
