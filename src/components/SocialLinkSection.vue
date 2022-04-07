<template>
  <div
    class="social-links-main justify-content-center d-flex flex-column align-items-center my-2 px-5 text-center"
  >
    <div class="name-field">
      <h2>Contact With Us</h2>
      <span class="horizontal-line"></span>

      <div class="social-desc">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nesciunt
          nobis exercitationem at. Non magnam autem dolores nihil quidem quam?
        </p>
      </div>
      <span class="horizontal-line"></span>
    </div>

    <div class="container mt-4">
      <div class="row social-l-box">
        <div class="col-12 social-li-cont-content">
          <div class="social-li-cont-icon fb">
            <a href=""><b-icon icon="facebook" aria-hidden="true"></b-icon></a>
          </div>
          <a href="">Facebook</a>
        </div>
        <div class="col-12 social-li-cont-content">
          <div class="social-li-cont-icon insta">
            <a href=""><b-icon icon="instagram" aria-hidden="true"></b-icon></a>
          </div>
          <a href="">Instagram</a>
        </div>
        <div class="col-12 social-li-cont-content">
          <div class="social-li-cont-icon linkedin">
            <a href=""><b-icon icon="linkedin" aria-hidden="true"></b-icon></a>
          </div>
          <a href="">Linkedin</a>
        </div>
        <div class="col-12 social-li-cont-content">
          <div class="social-li-cont-icon twit">
            <a href=""><b-icon icon="twitter" aria-hidden="true"></b-icon></a>
          </div>
          <a href="">Twitter</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.social-links-main {
  box-shadow: 0px 5px 15px 0px rgb(62 65 159 / 30%);
  margin: 20px 20px !important;
  padding: 40px 20px !important;
  border-radius: 10px;
  background-color: #2c2c2c;
  h2 {
    color: white;
  }
  .fb {
    background-color: #0d6efd;
  }
  .insta {
    background: radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    ) !important;
  }
  .linkedin {
    background-color: #0077b5;
  }
  .twit {
    background-color: #1d9bf0;
  }
}

.name-field {
  display: flex;
  flex-direction: column;
  align-items: center;
  .horizontal-line {
    width: 80%;
    height: 1px;
    background-color: #f7f7f7;
  }
}

.social-li-cont-icon {
  height: 36px;
  width: 36px;

  background-color: #0d6efd;
  display: flex;
  align-items: center !important;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  left: 6px;
  top: 5px;
  svg {
    font-size: 18px;
    fill: white;
  }
  a {
    margin-top: 0px;
  }
}
.social-li-cont-content {
  height: 46px;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;

  width: 100%;
  transition: 0.2s all ease-in;
  cursor: pointer;
  position: relative !important;
  a {
    text-decoration: none;
    color: #2c2c2c;
    font-size: 18px;
    letter-spacing: 0.5px;
    font-weight: 500;
  }
}

.row.social-l-box {
  row-gap: 5px;
  margin-top: 10px;
}

.social-li-cont-content:hover {
  background-color: #2c2c2c;
  transition: 0.2s all ease-in;
  a {
    color: #f7f7f7;
  }
}
.social-desc {
  p {
    color: #f7f7f7;
  }
}
</style>
