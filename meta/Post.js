import {PostData} from "../model/table.js";
import moment from 'moment';

class POST {
    id;
    text;
    created;
    updated;

    constructor(text) {
        this.id = PostData.length;
        this.text = text;
        this.created = moment().format('YYYY-MM-DD h:mm:ss');
    }
}

export default POST;