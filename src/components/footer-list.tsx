interface FooterListProps {
  title: string
  childs: string[]
}

export function FooterList({
  title,
  childs
}:FooterListProps){
  return(
    <article className="size-max text-left gap-2 flex flex-col" id="footer-list">
      <h3 className="text-xl font-bold ">{title}</h3>
      {childs.map(e => {
        return <span key={e} className="text-lg font-normal hover:text-gray-700 transition-colors cursor-pointer">{e}</span>
      })}
    </article>
  )
}