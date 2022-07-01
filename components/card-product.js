class CardProduct extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.imgUrl = this.getAttribute('imgUrl');
        this.title = this.getAttribute('title');
        this.subtitle = this.getAttribute('subtitle');
        this.mainText = this.getAttribute('mainText');
        this.price = this.getAttribute('price');

    }

    static get observedAttribute() {
        return['imgUrl','title','subtitle','mainText','price'];
    }

    attributeChangedCallback(attr, oldVal, newVal){
        if(attr === 'imgUrl'){
            this.imgUrl = newVal;
        }
        if(attr === 'title'){
            this.title = newVal;
        }
        if(attr === 'subtitle'){
            this.subtitle = newVal;
        }
        if(attr === 'mainText'){
            this.mainText = newVal;
        }
        if(attr === 'price'){
            this.price = newVal;
        }
    }

    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = `
            <main class="container-main">
                <section class="cards">
                    <div class="card">
                        <div class="card__section-img">
                            <p>NIKE</p>
                            <img src="${this.imgUrl}">    
                        </div>
                        <div class="card__section-text">
                            <p class="title">${this.title}</p>
                            <p class="subtitle">${this.subtitle}</p>
                            <p class="text">${this.mainText}</p>
                            <p class="price">${this.price}</p>
                            <button>Buy</button>
                        </div>
                    </div>
                   
                </section>
            </main>
            ${this.getStyles()}
        `;
        return template;
    }

    getStyles(){
        return`
            <style>
                .cards{
                    align-items:center;
                    background-color: #293f96;
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                    justify-content:center;
                    width: 100%;
                }
                .card{
                    background-color: violet;
                    box-shadow: 2px 2px 5px 1px black;
                    display: flex;
                    margin-top: 2rem;
                    margin-bottom: 2rem;
                    flex-direction: column;
                    width: 80%;
                }
                .card__section-img{
                    align-items:center;
                    background-color: #5a6cb2;
                    display: flex;
                    flex-direction: column;
                    justify-content:center;
                }
                .card__section-img p{
                    color: #293f96;
                    font-size: 2rem;
                    font-weight: bold;
                    margin: 0;   
                    padding: 1rem;
                }
                .card__section-img img{
                    padding: 2rem;
                    width: 80%;
                }
                .card__section-text{
                    align-items:center;
                    background-color: white;
                    display: flex;
                    flex-direction: column;
                    justify-content:center;
                }
                .title{
                    font-size: 2.5rem;
                    margin:1rem;
                }
                .subtitle{
                    color: rgba(59,59,59,0.85);
                    font-size: 1.8rem;
                    margin:1rem;
                    text-align:center;
                }
                .text{
                    font-size: 1.2rem;
                    margin:1rem;
                }
                .price{
                    color: rgba(59,59,59,0.85);
                    font-size: 2rem;
                    font-weight: bold;
                    margin:1rem;
                }
                button{
                    background-color: #55ad75;
                    border:none;
                    border-radius: 2rem;
                    margin: 2rem;
                    padding: 1rem 2rem;
                    width: 80%;
                }
                button:hover{
                    transform: scale(1.1,1.1);
                    transition:.5s;
                }
                @media screen and (max-width: 1024px){
                    .card{
                        max-width: 614px;
                    }
                }
                @media screen and (min-width: 1024px){
                    .card{
                        flex-direction: row;
                    }
                    .card__section-img img{
                        width: 100%;
                        padding: 0;
                        position: relative;
                        left: 30px;
                        transform: rotate(-30deg);
                    }
                    .text{
                        padding-left: 3rem;
                    }
                }
            </style>
        `;
    }

    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback(){
        this.render();
    }
}
customElements.define('card-product', CardProduct);