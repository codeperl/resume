// https://cdn.jsdelivr.net/npm/evil-icons@1.9.0/assets/evil-icons.min.css
// https://cdn.jsdelivr.net/npm/evil-icons@1.9.0/assets/evil-icons.min.js

const inject = html => document.body.insertAdjacentHTML("beforeend", html);

inject(`
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/solid.css" integrity="sha384-r/k8YTFqmlOaqRkZuSiE9trsrDXkh07mRaoGBMoDcmA58OHILZPsk29i2BsFng1B" crossorigin="anonymous">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/brands.css" integrity="sha384-BKw0P+CQz9xmby+uplDwp82Py8x1xtYPK3ORn/ZSoe6Dk3ETP59WCDnX+fI1XCKK" crossorigin="anonymous">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/fontawesome.css" integrity="sha384-4aon80D8rXCGx9ayDt85LbyUHeMWd3UiBaWliBlJ53yzm9hqN21A+o1pqoyK04h+" crossorigin="anonymous">

<style>
  footer.cp-profile {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 25px 45px;
    color: white;
    font-family: monospace;
    text-align: right;
  }
  footer.cp-profile p {
    font-size: 16px;
  }
  footer.cp-profile a {
    text-decoration: none;
    font-size: 22px;
  }
  footer.cp-profile a i {
    color: white;
  }
  footer.cp-profile a div.icon {
    fill: white;
  }
</style>
<footer class="cp-profile">
  <p>@garetmckinley</p>
  <div class="links">
    <a href="https://codepen.io/garetmckinley" target="_blank">
      <i class="fab fa-codepen"></i>
    </a>
    <a href="https://twitter.com/garetmckinley" target="_blank">
      <i class="fab fa-twitter"></i>
    </a>
    <a href="https://github.com/garetmckinley" target="_blank">
      <i class="fab fa-github-alt"></i>
    </a>
    <a href="https://garet.io" target="_blank">
      <i class="fas fa-link"></i>
    </a>
  </div>
</footer>
`);