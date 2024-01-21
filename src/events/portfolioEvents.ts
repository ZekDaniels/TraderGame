import { Op } from "sequelize";
import Portfolio from "../models/Portfolio";

export async function createMainPortfolio(user: any, options: any) {
    user.portfolio = await Portfolio.create({
        name: "Main Portfolio",
        UserId: user.id,
        isMain: true
    }, {
        transaction: options.transaction
    });
}

export async function updateMainPortfolio(portfolio: any, options: any) {
    if (portfolio.changed("isMain") && portfolio.isMain) {

        const where: any = {
            [Op.not]: [],
            [Op.and]: [],
        };
        where[Op.not].push({ id: portfolio.id });
        where[Op.and].push({ isMain: true });
        where[Op.and].push({ UserId: portfolio.UserId });


        const oldMainPortfolio = await Portfolio.findOne({
            where
        });
        if (oldMainPortfolio && oldMainPortfolio.id && oldMainPortfolio.isMain) {
            await Portfolio.update(
                { isMain: false },
                {
                    where: where,
                    transaction: options.transaction
                });
        }


    }



}