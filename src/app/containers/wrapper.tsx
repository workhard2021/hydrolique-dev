type propsConaitner={
      children:JSX.Element|JSX.Element[],
}
export const Wrapper=({children}:propsConaitner)=>{
    return (<>
        <div className={`w-full md:w-[85%] m-auto md:p-8 p-4`}>
            {children}
        </div>
    </>)
}
