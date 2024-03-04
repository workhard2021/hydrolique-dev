type propsConaitner={
      children:JSX.Element|JSX.Element[],
}
export const Wrapper=({children}:propsConaitner)=>{
    return (<>
        <div className={`w-full xl:w-[80%] md:w-[95%] mx-auto p-4`}>
            {children}
        </div>
    </>)
}
