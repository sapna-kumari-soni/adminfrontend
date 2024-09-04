import ABarChart from "./ABarChart"

// import AreaProgressChart from "./AreaProgressChart"
import "./Chart.css"
import SalesPieChart from "./SalesPiechart"

const Chart = () => {
  return (
    <section className="content-area-charts">
      <ABarChart />
      <SalesPieChart />
    </section>
  )
}

export default Chart