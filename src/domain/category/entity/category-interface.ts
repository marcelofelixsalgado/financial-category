export default interface CategoryInterface {
    get id(): string;
    get name(): string;
    get abbreviation(): string;
    get description(): string;

    changeName(name: string): void;
    changeAbbreviation(abbreviation: string): void;
    changeDescription(description: string): void;
}