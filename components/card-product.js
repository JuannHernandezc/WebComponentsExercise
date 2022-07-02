class CardProduct extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.imgUrl = this.getAttribute("imgUrl");
    this.title = this.getAttribute("title");
    this.subtitle = this.getAttribute("subtitle");
    this.mainText = this.getAttribute("mainText");
    this.price = this.getAttribute("price");
  }

  static get observedAttribute() {
    return ["imgUrl", "title", "subtitle", "mainText", "price"];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === "imgUrl") {
      this.imgUrl = newVal;
    }
    if (attr === "title") {
      this.title = newVal;
    }
    if (attr === "subtitle") {
      this.subtitle = newVal;
    }
    if (attr === "mainText") {
      this.mainText = newVal;
    }
    if (attr === "price") {
      this.price = newVal;
    }
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
                <section class="cards">
                    <div class="section-img">
                        <p>NIKE</p>
                        <img src="${this.imgUrl}">    
                    </div>        
                    <div class="section-text">
                        <p class="title">${this.title}</p>
                        <p class="subtitle">${this.subtitle}</p>
                        <p class="text">${this.mainText}</p>
                        <div class="container-buy">
                            <p class="price">${this.price}</p>
                            <button>Buy</button>
                        </div>
                    </div>
                </section>
            ${this.getStyles()}
        `;
    return template;
  }

  getStyles() {
    return `
            <style>
                .cards{
                    display: flex;
                    margin: 2rem auto;
                    flex-wrap: wrap;
                    width: 80%;
                    max-width: 932px;
                }
                .cards .section-img{
                    background-color: #5a6cb2;
                    position: relative;
                    width:100%;
                }
                .cards .section-img p{
                    position: absolute;
                    font-size: 2rem;
                    font-weight: bold;
                    left: 10%;
                    bottom: 50%;
                    color: rgba(0,0,0,.5)
                    
                }
                .cards .section-img img{
                    width: 100%;
                    position: relative;
                    top: 35px;
                }
                .section-text{
                    background-color: white;
                    position: relative;
                }
                .section-text .title{
                    margin: 2rem 1rem 1rem 1rem;
                    font-size: 1.3rem;
                    font-weight: bold;
                }
                .section-text .subtitle{
                    margin: .5rem 1rem;
                    font-size: .8rem;
                    font-weight: bold;
                    color: gray;
                }
                .section-text .text{
                    margin: 1rem 1rem 1rem 4rem;
                    font-size: .8rem;
                }

                .container-buy{
                    display: flex;
                    justify-content: space-between;
                    padding: 1rem;
                }

                .container-buy .price{
                    margin:0;
                    font-weight: bold;
                    font-size: 1.2rem;
                    color: gray;
                }
                .container-buy button{
                    background-color: #5a6cb2;
                    border: none;
                    border-radius: .5rem;
                    font-weight: bold;
                }
                .container-buy button:hover{
                    transform: scale(1.1,1.1);
                    cursor: pointer;
                    transition: .5s;
                }
                @media only screen and (min-width: 1024px ){
                    .cards{
                        flex-wrap: nowrap;
                        width: 90%;
                        height: 60vh;
                    }
                    .cards .section-img{
                        width: 50%;
                    }
                    .cards .section-img p{
                        font-size: 4rem;
                    }
                    .cards .section-img img{
                        width: 110%;
                        max-width: 612px;
                        max-height: 548px;
                        transform: rotate(-30deg);
                        left: -5 %;
                        z-index: 100;
                    }
                    .section-text{
                        width: 50%;
                    }
                }
            </style>
        `;
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}
customElements.define("card-product", CardProduct);
