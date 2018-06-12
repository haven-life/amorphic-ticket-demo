import {Supertype, supertypeClass, Persistable, amorphicStatic} from 'amorphic';
import {TicketItemComment} from '../../common/js/TicketItemComment';
import {Ticket} from '../../common/js/Ticket';

var forceImport = TicketItemComment;

@supertypeClass
export class Controller extends Persistable(Supertype) {
    serverInit () {
        amorphicStatic.logger.info({
            userConfigFromAmorphic: this.amorphic.config.userConfig,
            userConfigFromStatic: amorphicStatic.config.userConfig
            },
            'Daemon Up and Running ');

        setTimeout(() => this.tickTock(), 5000);

    }
    tickTock() {
        return Ticket.getFromPersistWithQuery({}).then(function (tickets) {
            this.amorphic.logger.info({count: tickets.length}, 'Read Tickets');
        }.bind(this));

    }
}
