import { IHello } from './IHello'

export class Hello implements IHello {

    hello_there: string;

    constructor(hello_there: string) {
        this.hello_there = hello_there;
    }
}