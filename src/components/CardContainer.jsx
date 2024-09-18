export default function CardContainer({titulo, children}) {
    return(
      <div className="my-10">
        <h1 className="text-center mb-20 text-3xl font-bold">{titulo}</h1>
        <div className="flex justify-center">
            <section className="grid gap-16 justify-center md:grid-cols-1 xl:grid-cols-3">
                {children}
            </section>
        </div>
        </div>
    )
}