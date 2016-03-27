import React from 'react';
import Time from 'react-time';

class Testimonials extends React.Component {
  render () {
    const {testimonials, ...props} = this.props;

    return (
      <section className="testimonials section" {...props}>
        <div className="container">
          <header className="section-header">
            <h1 className="section-title">Testimonials</h1>
          </header>

          <div className="swiper-container">
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-wrapper section-content pure-grid testimonials-content">
              {testimonials.map((t) => {
                return (
                  <section className="testimonial pure-u-1 swiper-slide" key={t._id}>
                    <header>
                      <img className="testimonial-profile-picture cameo pure-img" title="referrer" src={"/images/profiles/" + t.avatar} />
                      <p className="testimonial-data testimonial-name">{t.name}</p>
                      <p className="testimonial-data">{t.title}</p>
                    </header>
                    <p className="testimonial-recommendation">
                      <i className="testimonial-recommendation--open fa fa-quote-left" ></i>
                      {t.recommendation}
                      <i className="testimonial-recommendation--close fa fa-quote-right"></i>
                    </p>
                    <footer>
                      <span className="testimonial-tagline"><Time value={t.at} format="DD/MM/YYYY" />, {t.relationship}</span>
                    </footer>
                  </section>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Testimonials;