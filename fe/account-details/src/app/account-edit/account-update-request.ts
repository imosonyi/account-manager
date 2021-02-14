export class AccountUpdateRequest {

    constructor(
        public firstname: string,
        public lastname: string,
        public email: string,
        public phone: string,
        public status: string
    ) { }

}
