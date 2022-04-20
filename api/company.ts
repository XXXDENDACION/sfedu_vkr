import axios from "axios";
import { ICompany } from "../utils/interfaces/company";
import { API_URL } from "./constants";

const COMPANY_API_URL = API_URL + "/company";

class CompanyService {
    getDetailsCompany = async (id: number): Promise<ICompany> => {
        const company = await axios.get(COMPANY_API_URL + `/${id}`);
        return company.data;        
    }
}

export default CompanyService;