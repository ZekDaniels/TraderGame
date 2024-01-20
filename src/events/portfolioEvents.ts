import Portfolio from "../models/Portfolio";

export async function createMainPortfolio(user: any, options: any) {
    user.portfolio = await Portfolio.create({
        name: "Main Portfolio",
        UserId: user.id,
        isMain: true
    });
}