import { CandidatureSpontanee } from "../components/candidature-spontanee";
import { LISTCOUNTRY } from "../constants/list-country";
import LayoutPage from "../components/layoutPage";
import { LogoCandidature } from "../components/logoCandidature";
import { Wrapper } from "../containers/wrapper";

export default function CandidatureSpondaneePage({listCountry,title,image,sub_title,paraph}:any){
    return (<LayoutPage>
              <LogoCandidature sub_title={sub_title} image={image} title={title}/>
              <Wrapper>
                <CandidatureSpontanee listCountry={listCountry} paraph={paraph}/>
              </Wrapper>
              
    </LayoutPage>)
}
CandidatureSpondaneePage.defaultProps={
        listCountry:LISTCOUNTRY,
        paraph:'Vous souhaitez nous rejoindre mais ne trouvez pas d’offre d’emploi correspondant à votre profil? Nous vous invitons à soumettre votre candidature spontanée',
        title:'candidature',
        sub_title:'spontanée',
        image:'../images/nous-rejoindre/candidature-spontanee-2.png'
 }
