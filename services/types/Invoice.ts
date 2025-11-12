
export interface Invoice{
    currency:string;
    customer_name:string
    id:number
    invoice_date:string
    invoice_number:string
    reduction_type:string
    total_amount:string
}
interface link {
    first:string
    last:string
    next:string
    prev:string
}
export interface InvoiceResponse {
    data: Invoice[];
    links: link
}