const Statistics = ({stats}) => {
  return (
    <section className="shadow-sm p-2 mt-7">
        <h1 className="text-xl text-semibold mb-3">Statistics</h1>
        <div className="flex gap-2 text-center">
            {
                stats.map(({label, value}) => (
                    <div className="flex-1">
                        <h1 
                            className={`${label === "Total" ? "text-black" : label === "Active" ? "text-blue-700" : "text-green-700"} text-2xl font-bold`}
                        >{value}</h1>
                        <p>{label}</p>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Statistics