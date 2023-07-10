export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(doc, heading, pos) {
        let li = document.createElement('li');
        let h4 = document.createElement('h4');
        let p = document.createElement('p');
        h4.innerText = heading;
        p.innerText = doc.format();
        li.append(h4);
        li.append(p);
        console.log(li);
        if (pos === "start") {
            this.container.prepend(li);
        }
        else if (pos === "end") {
            this.container.append(li);
        }
    }
}
