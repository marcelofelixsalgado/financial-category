export default interface CategoryInterface {
    get id(): string;
    get name(): string;
    get code(): string;
    get description(): string;

    changeName(name: string): void;
    changeCode(code: string): void;
    changeDescription(description: string): void;
}