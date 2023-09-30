

export default function ProductCategories() {
  return (
    <section className="product-categories">
      <div className="container">
        <h3 className="header text-center">Top Categories</h3>
        <div className="grid">
          <div className="category">
            <div className="img-div">
              <img src="/img/rice.png" alt="Rice" />
            </div>
            <p className="category-name">Rice</p>
          </div>

          <div className="category">
            <div className="img-div">
              <img src="/img/snacks.png" alt="Snacks" />
            </div>
            <p className="category-name">Snacks</p>
          </div>

          <div className="category">
            <div className="img-div">
              <img src="/img/spices.png" alt="Spices" />
            </div>
            <p className="category-name">Spices</p>
          </div>

          <div className="category">
            <div className="img-div">
              <img src="/img/vegetable.png" alt="Vegetables" />
            </div>
            <p className="category-name">Vegatables</p>
          </div>
        </div>
      </div>
    </section>
  )
}
