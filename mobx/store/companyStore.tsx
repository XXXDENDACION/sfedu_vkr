import {makeAutoObservable, runInAction} from "mobx";
import CompanyService from "../../api/company";
import {ICompany} from "../../utils/interfaces/company";

class Company {
    constructor() {
        makeAutoObservable(this);
        this.companyService = new CompanyService();
    }

    companyService;
    company: ICompany;

    getCountriesAsync = async (id: number): Promise<void> => {
        try {
            const company = await this.companyService.getDetailsCompany(id);
            runInAction(() => {
                this.company = company;
            });
        } catch (e) {
            console.log(e);
        }
    }
}

const companyStore = new Company();
export {companyStore};