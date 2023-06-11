import { getVers, } from "../db/dashboardDB.js";
export const getVersion = async (req, res) => {
    try {
        const v = await getVers();
        return res.status(200).json({
            "version": v
        });
    }
    catch (err) {
        res.status(500).json({
            message: "controllers-api-getVersion error message :: " + err.message
        });
    }
};
//# sourceMappingURL=dashboard.js.map