import Portfolio from "../models/Portfolio";

export const createPortfolioService = async (payload: any) => {
    const portfolio = await Portfolio.create(payload);
    return portfolio;
};

export const getByIdPortfolioService = async (id: number) => {
    return await Portfolio.findByPk(id);
};

export const getPortfoliosService = async () => {
    return await Portfolio.findAll();
};

export const updatePortfolioService = async (portfolio: any, portfolioId: number) => {
    const portfolioExists = await getByIdPortfolioService(portfolioId);

    if (!portfolio && !portfolioId) {
        throw new Error("Please provide portfolio data and/or portfolio id to update");
    }
    if (portfolioId && isNaN(portfolioId) || !portfolioExists) {
        throw new Error("Invalid portfolio id");
    }
    if (portfolio.id || portfolioId) {
        const id = portfolio.id || portfolioId;

        return await Portfolio.update(portfolio, {
            where: { id: id },
        });
    }
};

export const deletePortfolioService = async (portfolioId: number) => {
    const portfolioExists = await getByIdPortfolioService(portfolioId);

    if (!portfolioId) {
        throw new Error("Please portfolio id to delete");
    }
    if (portfolioId && isNaN(portfolioId) || !portfolioExists) {
        throw new Error("Invalid portfolio id");
    }

    return await Portfolio.destroy({
        where: { id: portfolioId },
    });
};