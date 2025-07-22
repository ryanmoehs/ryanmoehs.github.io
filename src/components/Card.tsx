
const Card = (props: any) => {
    const {children} = props;
  return (
    <div className="w-fit p-4 flex flex-col justify-center text-justify bg-amber-100 dark:bg-slate-500">
        {children}
    </div>
  )
}

export default Card