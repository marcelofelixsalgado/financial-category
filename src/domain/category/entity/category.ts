import Entity from "../../@shared/entity/entity.abstract"
import NotificationError from "../../@shared/notification/notification.error";
import CategoryValidatorFactory from "../factory/category.validator.factory";
import CategoryInterface from "./category-interface";

export default class Category extends Entity implements CategoryInterface {
    private _name: string;
    private _code: string;
    private _description: string;

    constructor(id: string, name: string, code: string, description: string) {
        super();
        this._id = id;
        this._name = name;
        this._code = code;
        this._description = description;
        this.validate();
        if (this.notification.hasErrors()) {
            throw new NotificationError(this.notification.getErrors());
          }           
    }

    get name(): string {
        return this._name;
    }

    get code(): string {
        return this._code;
    }

    get description(): string {
        return this._description;
    }

    changeName(name: string): void {
        this._name = name;
        this.validate();
    }

    changeCode(code: string): void {
        this._code = code;
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