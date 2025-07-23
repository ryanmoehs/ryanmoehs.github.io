
const Card = (props: any) => {
    const {children} = props;
  return (
    <div className="w-100 h-full p-6 flex flex-col justify-center text-justify bg-amber-300 hover:bg-amber-200 hover:cursor-pointer dark:bg-slate-600 hover:dark:bg-slate-500 rounded-lg">
        {children}
    </div>
  )
}

export default Card