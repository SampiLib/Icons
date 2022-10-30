import * as icon from "../../src";

function generateIcons(struct: {}, container: HTMLElement, path: string) {
    for (const key in struct) {
        let group = struct[key];
        switch (typeof group) {
            case 'object':
                let groupContainer = document.createElement('div');
                container.appendChild(groupContainer);
                let groupName = document.createElement('div');
                groupName.innerHTML = path + '.' + key;
                groupContainer.appendChild(groupName);
                generateIcons(group, groupContainer, path + '.' + key);
                break;
            case 'function':
                container.appendChild(group());
                break;
        }
    }
}
generateIcons(icon, document.body, 'icon');

