import {Supertype, supertypeClass, property, Remoteable, Persistable} from 'amorphic';
console.log("Compiling Person");
//import {Created} from "./created";
import {Person} from './Person';

@supertypeClass({toClient: false})
export class Secure extends Remoteable(Persistable(Supertype)) {
    @property()
    created:            Date;

    @property({fetch: true, getType: () => {return Person}})
    creator:            Person;

    @property()
    secret:          string = "!!!!!!!!!!!!";

};

