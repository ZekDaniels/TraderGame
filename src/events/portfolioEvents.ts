import { Op } from "sequelize";
import Portfolio from "../models/Portfolio";
import { log } from "console";

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
    
    const where: any = {
        [Op.not]: [],
        [Op.and]: [],
    };
    if (portfolio.id) {
        where[Op.not].push({ id: portfolio.id });
        where[Op.and].push({ isMain: true });
        where[Op.and].push({ UserId: portfolio.UserId });


        const oldMainPortfolio = await Portfolio.findOne({
            where
        });
        log();
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