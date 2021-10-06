class TvCarousel extends HTMLElement {
  set item(item) {
    this._item = item;
    this.render();
  }

  render() {
    this.classList.add('position-relative', 'carousel-item');
    this.innerHTML = `<a id="/tv/${this._item.id}">
      <img src="${this._item.backdrop_path? 'https://image.tmdb.org/t/p/original' + this._item.backdrop_path : './src/assets/backdrop-fallback.jpg'}"
        alt="${this._item.name.length? this._item.name:'-'} Poster">
      <div class="carousel-info position-absolute h-100 end-0 top-0">
        <h2>${this._item.name.length? this._item.name:'-'}</h2>
        <p>${this._item.overview.length? this._item.overview:'-'}</p>
      </div>
    </a>`;
  }
}

customElements.define('tv-carousel', TvCarousel);
