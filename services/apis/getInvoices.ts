import {baseURL, token} from "./baseUrl";
import type {InvoiceResponse} from "../types/Invoice.ts";

export interface InvoiceProp<T> {
    page ?: number
    limit ?: number
    sort ?: string
    filter ?: T[]
}


const FetchInvoices = async <T>({page = 1,limit = 100,sort = "",filter}:InvoiceProp<T>) :Promise<InvoiceResponse> => {

    const response =  await  fetch(`${baseURL}/api/interview-invoices?limit=${limit}&page=${page}sort=${sort}&filter=${filter}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`,
        }
    });
    return response.json()
}
export default FetchInvoices;