import * as svg from "../../src";

for (const key in svg) {
    document.body.appendChild(svg[key]());
}