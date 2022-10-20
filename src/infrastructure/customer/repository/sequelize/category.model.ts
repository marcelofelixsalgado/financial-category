import {
    Table,
    Model,
    PrimaryKey,
    Column
  } from "sequelize-typescript";

@Table({
    tableName: "categories",
    timestamps: false,
})
export default class CategoryModel extends Model {
    @PrimaryKey
    @Column
    declare id: string;

    @Column({ allowNull: false })
    declare name: string;

    @Column({ allowNull: false })
    declare abbreviation: string;

    @Column({ allowNull: false })
    declare description: string;
}