import * as icon from "../src";


for (const key in icon) {
    //@ts-ignore
    document.body.appendChild(icon[key]());
}
