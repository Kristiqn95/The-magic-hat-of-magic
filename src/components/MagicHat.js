import { Container, Text, Sprite } from 'pixi.js-legacy';

import gsap from 'gsap';

export default class MagicHat extends Container {
    constructor() {
        super();

        this._body = Sprite.from('hat');
        this._body.anchor.set(0.5);
        this._body.interactive = true;
        this._body.buttonMode = true;

        this.name = "magic-hat";
        this._item = new Text('😎', {fontSize: 200});
        this._item.anchor.set(0.5);

        this._itemMask = Sprite.from('hat-mask');
        this._itemMask.anchor.set(0.5);
        this._itemMask.y = -293;
        this._item.mask = this._itemMask;

        this.addChild(this._body, this._item, this._itemMask);

        this._body.addListener('click', () => this._popOut());
    }

    /**
     * @private
     */
    _popOut() {
        const emojis = ['😎️','🤗️','🤩️','😘️'];
        const index = Math.round(Math.random() * (emojis.length - 1));
        this._item.text = emojis[index];

        gsap.to(this._item, {y: -300, yoyoEase: 'expo', ease: 'elastic', repeat: 1, duration: 1});
        gsap.to(this._body, {y: 10, ease: 'elastic', yoyoEase: 'elastic', repeat: 1, duration: 0.5});
    }
}