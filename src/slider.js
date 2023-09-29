export class Slider {
    #default = Object.freeze({
        sliderClass: "slider"
    });

    constructor(node, args) {
        if (node === undefined || !(node instanceof Node))
            throw new TypeError("The node must implements Node.");
        if (args === undefined) args = this.#default;
        this.node = node;
        this.sliderClass = args.sliderClass || this.#default.sliderClass;
        this.elements = args.elements || [];
        this.controls = args.controls;
        if (!(args.controls instanceof Node)) {
            this.controls = Object.assign(document.createElement("div"), {
                className: "slider__control",
                innerHTML:
                    `<button class="slider__button left"><</button>
                     <button class="slider__button right">></button>`
            });
        }
        this.elementWidth = args.elementWidth || "calc(100vw - 200px)";
    }

    addElement(e) {
        this.elements.push(e);
    }

    render() {
        this.node.innerHTML = "";
        this.node.style = "";
        this.node.className = this.sliderClass;
        this.container = document.createElement("div");
        this.container.className = "slider__container";
        this.content = Object.assign(
            document.createElement("div"),
            {
                className: "slider__content"
            });
        this.elements.forEach(element => {
            console.log(this.elementWidth)
            element.style.width = this.elementWidth;
            this.content.appendChild(element);
        })
        let firstElementIndex = 0;
        this.controls.querySelectorAll("button")[0].addEventListener("click", () => {
            const screenCount = Math.floor(this.content.offsetWidth / this.container.offsetWidth);
            firstElementIndex -= this.elements.length / screenCount;
            if (firstElementIndex < 0) firstElementIndex = 0;
            this.content.style.transform = `translate(calc(${this.elementWidth} * ${-firstElementIndex}))`
        })
        this.controls.querySelectorAll("button")[1].addEventListener("click", () => {
            const screenCount = Math.floor(this.content.offsetWidth / this.container.offsetWidth);
            const elementOnScreen = this.elements.length / screenCount;
            firstElementIndex += this.elements.length / screenCount;
            if (!(firstElementIndex + elementOnScreen > screenCount * elementOnScreen))
                this.content.style.transform = `translate(calc(${this.elementWidth} * ${-firstElementIndex}))`;
            else firstElementIndex -= this.elements.length / screenCount;
        })
        this.container.appendChild(this.content);
        this.node.appendChild(this.container);
        this.node.appendChild(this.controls);
    }
}