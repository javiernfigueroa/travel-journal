export default function Card() {
  return (
    <div className="card">
      <div className="card--image_container">
        <img src="../images/p1.png" alt="" />
      </div>
      <div className="card--info_container">
        <span>ic</span>
        <span>Japan</span>
        <a href="">
          <span>View on Google Maps</span>
        </a>

        <h1>Mount Fuji</h1>
        <h5>12 Jan, 2021 - 24 Jan, 2021</h5>
        <p>
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
}
