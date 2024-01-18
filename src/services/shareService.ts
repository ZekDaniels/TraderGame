import Share from "../models/Share";

export const createShareService = async (payload: any) => {
    const share = await Share.create(payload);
    return share;
};

export const getByIdShareService = async (id: number) => {
    const share = await Share.findByPk(id);
    if (!share) {
        throw new Error("Share not found");
    }
    return share;
};

export const getAllShareService = async (id: number) => {
    const share = await Share.findByPk(id);
    if (!share) {
        throw new Error("Share not found");
    }
    return share;
};

export const updateShareService = async (share: any, shareId: number) => {
    if (!share && !shareId) {
        throw new Error("Please provide share data and/or share id to update");
    }
    if (shareId && isNaN(shareId)) {
        throw new Error("Invalid share id");
    }
    if (share.id || shareId) {
        const id = share.id || shareId;

        return await Share.update(share, {
            where: { id: id },
        });
    }
};

export const deleteShareService = async (share: any, shareId: number) => {
    if (!shareId) {
        throw new Error("Please share id to delete");
    }
    if (shareId && isNaN(shareId)) {
        throw new Error("Invalid share id");
    }

    return await Share.destroy({
        where: { id: shareId },
    });
};