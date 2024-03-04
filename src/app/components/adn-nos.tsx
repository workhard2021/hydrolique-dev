export const NosAdn=({data,list_mission}:any)=>{
    return (<div className="relative flex md:flex-nowrap justify-between flex-wrap  w-full md:p-6 p-auto m-auto">
        <div className="md:w-[45%]">
            <div className=" w-full">
                <h1 className="text-3xl text-blue-900 font-bold">{data.first_title}</h1>
                <p className="text-md text-[#545454] py-4 leading-6">{data.first_description}</p>
            </div>
            <div className='w-full'>
                <div className='text-3xl text-blue-900 font-bold first-letter:capitalize'>{data.block_tree_title}</div>
                <p className='text-md text-[#545454] py-4 leading-6'>{data.block_tree_description}</p>
             </div>
        </div>
        <div className="md:w-[45%] w-full">
                 <div className="w-full rounded-md h-[420px] bg-url" style={{backgroundImage:`url(${data.first_image})`}} />
        </div>
    </div>)
}
NosAdn.defaultProps={
    data:{
     first_title:'Notre raison d’être',
     first_description:"Animés par la conviction que l’accès à l’eau est un levier essentiel de santé publique et de qualité de vie, nous contribuons à l’amélioration de la vie des populations et des industriels en assurant l’accès et la gestion de cette ressource vitale avec une approche globale.",
     first_image:'../images/adn/adn.webp',
    //  two_title:'Founded',
    //  two_sub_title:"A sa création à Paris en 1999, Oyster technology était une petite agence web à fort focus technologique. Depuis lors, sa forte croissance, entièrement d’origine organique, l’a transformé en groupe fédérant plus de 600 personnes réparties sur 3 pays et 7 implantations. Ayant pleinement atteint l'objectif stratégique qu'il s'était fixé, Oyster technology a décidé, au début de l'année 2020, d'apporter une nouvelle impulsion à son développement d'activités en rejoignant le Groupe Technology & Strategy",
    //  tree_title:'50M montly enrichments',
    //  tree_sub_title:'La route commença à s’enfoncer. On ne voyait plus les grillages sur les cotés, mais juste des rochers. Et soudain, les voitures s’arrêtèrent devant une énorme porte en métal entourée de béton.',
    //  four_title:'4K users',
    //  four_sub_title:'La route commença à s’enfoncer. On ne voyait plus les grillages sur les cotés, mais juste des rochers. Et soudain, les voitures s’arrêtèrent devant une énorme porte en métal entourée de béton.',
     block_tree_title:'Notre mission',
     block_tree_description:'Parce que nous considérons que nos réalisations sont d’utilité publique, Nous agissons au quotidien pour être exemplaire et pour redonner à l’eau la valeur qu’elle mérite.',
    },
    list_mission:[
        // {
        //   id:1,
        //   title:'Expertise',
        //   description:'Insuffler le changement par l’enthousiasme, l’écoute et le consensus'
        // },
        // {   id:2,
        //     title:'Notre valeur',
        //     description:'Accompagner la réflexion stratégique et définir conjointement une approche pilotée par la valeur'
        // },
        // {   id:3,
        //     title:'Collaboration',
        //     description:'Rendre autonome en devenant un relais de connaissance et d’expertise, mobilisable à tout moment'
        // },
        // {   id:4,
        //    title:'Place de l’humain',
        //    description:'Animer un dispositif cohérent impliquant l’ensemble de l’environnement et des équipes'
        // }
    ]
}
