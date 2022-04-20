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
    isLoading = false;

    getCompanyAsync = async (id: number): Promise<void> => {
        this.isLoading = true;
        try {
            const company = await this.companyService.getDetailsCompany(id);
            runInAction(() => {
                this.company = company;
                this.isLoading = false;
            });
        } catch (e) {
            this.isLoading = false;
            console.log(e);
        }
    }
}

const companyStore = new Company();
export {companyStore};