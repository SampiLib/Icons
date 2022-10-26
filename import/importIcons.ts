// @ts-ignore
import { default as fileDialog } from "node-file-dialog"

(async () => {
    let fileSelect = fileDialog({ type: 'directory' });
    try {
        let path = await fileSelect;
        console.log(path);

    } catch (error) {
        console.log('Nothing Selected');
    }
})()

