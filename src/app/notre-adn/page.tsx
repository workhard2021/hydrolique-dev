'use client';
import { NosAdn } from "@/app/components/adn-nos";
import LayoutPage from "@/app/components/layoutPage";
import { NosValeurSociete } from "@/app/components/nos-valeur-societe";
import { RevealWrapper } from "next-reveal";
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
