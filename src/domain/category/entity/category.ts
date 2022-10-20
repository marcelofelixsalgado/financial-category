import Entity from "../../@shared/entity/entity.abstract"
import NotificationError from "../../@shared/notification/notification.error";
import CategoryValidatorFactory from "../factory/category.validator.factory";
import CategoryInterface from "./category-interface";

export default class Category extends Entity implements CategoryInterface {
    private _name: string;
    private _abbreviation: string;
    private _description: string;

    constructor(id: string, name: string, abbreviation: string, description: string) {
        super();
        this._id = id;
        this._name = name;
        this._abbreviation = abbreviation;
        this._description = description;
        this.validate();
        if (this.notification.hasErrors()) {
            throw new NotificationError(this.notification.getErrors());
          }           
    }

    get name(): string {
        return this._name;
    }

    get abbreviation(): string {
        return this._abbreviation;
    }

    get description(): string {
        return this._description;
    }

    changeName(name: string): void {
        this._name = name;
        this.validate();
    }

    changeAbbreviation(abbreviation: string): void {
        this._abbreviation = abbreviation;
        this.validate();
    }
    
    changeDescription(description: string): void {
        this._description = description;
        this.validate();
    }

    validate() {
        return CategoryValidatorFactory.create().validate(this);
      }    
}