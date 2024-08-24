Element.prototype._remove = function() {
    if(!this instanceof Element || this.tagName === 'HTML') {
        throw new TypeError(`${this} is not an element or cannot be removed`); 
    }
    const el = this;
    el.parentElement.removeChild(el);
}