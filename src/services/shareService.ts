import Share from "../models/Share";

export const createShareService = async (payload: any) => {
    const share = await Share.create(payload);
    return share;
};

export const getShareService = async (where: any) => {
    return await Share.findOne({ where });
};

export const getShareByIdService = async (id: number) => {
    return await Share.findByPk(id);
};

export const getSharesService = async () => {
    return await Share.findAll();
};

export const updateShareService = async (share: any, shareId: number) => {
    const shareExists = await getShareByIdService(shareId);

    if (!share && !shareId) {
        throw new Error("Please provide share data and/or share id to update");
    }
    if (shareId && isNaN(shareId) || !shareExists) {
        throw new Error("Invalid share id");
    }
    if (share.id || shareId) {
        const id = share.id || shareId;

        return await Share.update(share, {
            where: { id: id },
        });
    }
};

export const deleteShareService = async (shareId: number) => {
    const shareExists = await getShareByIdService(shareId);

    if (!shareId) {
        throw new Error("Please share id to delete");
    }
    if (shareId && isNaN(shareId) || !shareExists) {
        throw new Error("Invalid share id");
    }

    return await Share.destroy({
        where: { id: shareId },
    });
};