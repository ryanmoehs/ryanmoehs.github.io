export default function Button(props: any) {
  const { text, children, type, color } = props;
  return (
    <button {...props} type={type} className={`[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-2 flex items-center justify-between gap-x-2 ${color ? color : `bg-blue-600`} text-black dark:text-white px-6 py-2 rounded-lg cursor-pointer`}
    >{text || children}
    </button>
  );
}