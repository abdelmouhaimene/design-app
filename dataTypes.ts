export interface serviceType {
    name : string;
    descreption1 : string;
    descreption2 : string;
    descreption3 : string;
    image : string;
}
export type servicesDataType = serviceType[];
interface ProjectType {
    name: string;
    image: string;
}

// Define the type for a portfolio category
export interface PortfolioCategoryType {
    name: string;
    projects: ProjectType[];
}

// Define the type for the entire portfolio data array
export type PortfolioDataType = PortfolioCategoryType[];