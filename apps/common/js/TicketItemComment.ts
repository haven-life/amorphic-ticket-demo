import {supertypeClass, property} from 'amorphic';
import {Ticket} from './Ticket';
import {TicketItem} from './TicketItem';
import {TicketItemAttachment} from './TicketItemAttachment';
console.log("Compiling TicketItemComment");

@supertypeClass
export class TicketItemComment extends TicketItem { //  extends TicketItem

    @property({rule: ['required']})
    text: string;

    @property({type: TicketItemAttachment})
    attachments: Array<TicketItemAttachment>		//, value: []},

    // Only called on the server
    constructor (ticket: Ticket, text, creator?) {
        super(ticket, creator);
        this.text = text;
    };

    addAttachment (name, data) {
        var attachment = new TicketItemAttachment(this, name, data);
        this.attachments.push(attachment);
        return attachment;
    };

    remove () {
        for (var ix = 0;ix < this.attachments.length;++ix)
            this.attachments[ix].persistDelete();
        this.persistDelete();
    };
};