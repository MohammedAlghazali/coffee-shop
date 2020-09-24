import React from "react"
import { Link } from "gatsby"
import Title from "../../Global/Title"

const Info = () => {
  return (
    <section style={{ height: "250px", border: "1px solid #000" }}>
      <div className="container">
        <Title title="Mohammed Alghazli" />
        <div className="row">
          <div>
            <p>
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            </p>
            <Link to="/about">
              <button>About</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
