class SiteNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="sidebar">
            <div class="logo">ARGKIT</div>
            <a class="nav-item active" href="/">Home</a>
            <a class="nav-item" href="/symbol-substitution">Symbol Substitution</a>
        </nav>`
    }
}
customElements.define('site-nav', SiteNav);
