import { makeAutoObservable } from "mobx";
import CompanyService from "../../api/company";
import { ICompany } from "../../utils/interfaces/company";

class Company {
    constructor() {
        makeAutoObservable(this);
        this.companyService = new CompanyService();
    }

    companyService;
    company: ICompany;

    getCountriesAsync = async (id: number) => {
        try {
            const data = await this.companyService.getDetailsCompany(id);
            this.company = data;
        } catch (e) {
            console.log(e);
        }
    }
}

const companyStore = new Company();
export {companyStore};