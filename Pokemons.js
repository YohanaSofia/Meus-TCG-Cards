class pokemon {
    constructor() {
        this.x = Math.random() * 1000 + 200;
        this.y = Math.random() * 600 + 5;
        this.baseY = Math.random() * 300 ;
        this.velocidadeX = Math.random() * 2 + 2;
        this.el = document.createElement('img');
        this.el.src = 'pikachu.gif';
        this.el.alt = 'pokemon';
        document.querySelector('#pokemon').appendChild(this.el);
    }

    movimentar() {
        this.x += this.velocidadeX;
        this.y = this.baseY + Math.cos(this.x / 30) * 10;

        if (this.x >= window.innerWidth) {
            this.x = 0;
            this.baseY = Math.random() * 1900;
        }

        this.el.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}

let pokemons = [new pokemon(), new pokemon(), new pokemon()];

setInterval(() => {
    for (let i = 0; i < pokemons.length; i++) {
        pokemons[i].movimentar();
    }
}, 90);

let novoEl = document.querySelector('#novo');
novoEl.addEventListener('click', () => {
    pokemons.push(new pokemon());
});
