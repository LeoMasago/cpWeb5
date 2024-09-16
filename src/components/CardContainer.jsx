export default function CardContainer({children}) {
    return(
      <div className="my-10">
            <section className="flex gap-5 justify-around">
                {children}
            </section>
        </div>
    )
}