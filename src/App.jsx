import React from "react";
import "./App.css";

function App() {
  return (
    <div>

      {/* Navbar */}
      <nav>
        <h1>Organic Store</h1>

        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">

          <h2>Fresh Organic Products</h2>

          <p>
            Healthy and Natural Products directly from farms.
          </p>

          <button className="btn">
            Shop Now
          </button>

        </div>

      </section>

      {/* Products Section */}
      <section className="products">

        <h2>Our Products</h2>

        <div className="product-container">

          <div className="card">

            <img
              src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5"
              alt="Vegetables"
            />

            <h3>Organic Vegetables</h3>

            <p>
              Fresh vegetables grown without chemicals.
            </p>

          </div>

          <div className="card">

            <img
              src="https://images.unsplash.com/photo-1574226516831-e1dff420e37f"
              alt="Fruits"
            />

            <h3>Natural Fruits</h3>

            <p>
              Healthy fruits directly from organic farms.
            </p>

          </div>

          <div className="card">

            <img
              src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc"
              alt="Juice"
            />

            <h3>Organic Juices</h3>

            <p>
              Fresh juice with natural ingredients.
            </p>

          </div>

        </div>

      </section>

      {/* About Section */}
      <section className="about">

        <h2>About Us</h2>

        <p>
          We provide high-quality organic food products to improve healthy living.
          Our mission is to connect farmers and customers directly.
        </p>

      </section>

      {/* Contact Section */}
      <section className="contact">

        <h2>Contact Us</h2>

        <form>

          <input
            type="text"
            placeholder="Enter your name"
          />

          <input
            type="email"
            placeholder="Enter your email"
          />

          <textarea
            rows="5"
            placeholder="Enter your message"
          ></textarea>

          <button className="btn">
            Send Message
          </button>

        </form>

      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Organic Store | All Rights Reserved</p>
      </footer>

    </div>
  );
}

export default App;