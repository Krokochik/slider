import {Slider} from "https://rawcdn.githack.com/Krokochik/slider/main/src/slider.js?min=1";

const carousel = new Slider(document.querySelector("#carousel"));
for (let i = 0; i < 12; i++) {
    carousel.addElement(Object.assign(document.createElement("a"), {
        innerHTML: `<img src="https://picsum.photos/seed/${i+1}/200">`,
        href: `https://picsum.photos/seed/${i+1}/200`,
        target: "_blank",
        className: "carousel-item"
    }));
}
carousel.elementWidth = "calc((100vw - 200px) / 3)"
carousel.render();

const presentation = new Slider(document.querySelector("#presentation"));
for (let i = 0; i < 12; i++) {
    presentation.addElement(Object.assign(document.createElement("div"), {
        className: "presentation-item",
        style: `background-image: url("https://picsum.photos/seed/${Math.pow(i+2, 10)}/1024")`,
        innerHTML: `
            <h1 class="title">Slide ${i+1}</h1>
            <p class="article">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam beatae consequuntur corporis culpa cupiditate eos itaque labore, magni, quasi sint veniam voluptates? Beatae, dicta enim expedita fuga inventore iste laboriosam magnam molestias, nihil placeat qui quos reiciendis rerum, voluptatibus voluptatum. Architecto aspernatur deserunt ducimus facere harum libero recusandae saepe totam. Aliquid amet animi architecto at beatae consequatur cumque ea, illum labore laboriosam laudantium molestias nam necessitatibus odit omnis placeat qui quia quibusdam quisquam quod ratione recusandae sequi, totam vel veniam voluptatem voluptatibus? Animi assumenda, deserunt dicta dolore ducimus impedit, in ipsum nisi optio possimus, praesentium quaerat quis quisquam ratione unde ut veritatis! Animi atque blanditiis dolorum fugiat illum nulla quas similique ut? Corporis delectus error iste optio praesentium rem suscipit vero? A adipisci alias aliquam aliquid architecto asperiores, aspernatur assumenda, blanditiis commodi cum debitis deleniti dolor doloribus dolorum error et ex explicabo fuga, fugiat illum incidunt ipsum laboriosam laudantium magnam minus numquam porro praesentium quia quibusdam quis quisquam quo repellat reprehenderit repudiandae sed totam voluptatibus. A ab fuga hic molestiae numquam officiis perspiciatis rem. Eaque laborum maiores molestias nulla temporibus. Aspernatur aut commodi dolor dolore dolores doloribus ea eos eveniet exercitationem expedita illo itaque laudantium, neque praesentium repellendus reprehenderit voluptatem? Ad beatae consectetur, distinctio dolores eum iure magni obcaecati odit pariatur perferendis porro quae quisquam voluptates. Aliquam aut dignissimos distinctio doloribus eligendi excepturi labore minima nihil nulla recusandae sit, temporibus ut veniam! Ab autem consequatur cum cupiditate debitis, enim ex fugit incidunt, magni nam praesentium qui, repellat saepe voluptate?</p>
        `
    }));
}

presentation.elementWidth = "calc((100vw - 200px))"
presentation.render();