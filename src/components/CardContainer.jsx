export default function CardContainer({titulo, children}) {
    return(
      <div className="my-10">
        <h1 className="text-center mb-20 text-3xl font-bold">{titulo}</h1>
            <section className="flex gap-5 justify-around">
                {children}
            </section>
        </div>
    )
}