import {useEffect, useState} from "react";
import {type InvoiceResponse} from "../services/types/Invoice";
import FetchInvoices, {type InvoiceProp} from "../services/apis/getInvoices";


const useInvoice = <T>({page,limit,sort,filter}:InvoiceProp<T>)=>{
    const [data, setData] = useState<InvoiceResponse>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>("");
    useEffect(() => {
        const fetchData = FetchInvoices({page,limit,sort,filter})
        fetchData.then((response: InvoiceResponse) => {setData(response)})
            .catch((e: Error) => {
                setError(e.message);
            })
            .finally(() => setLoading(false))
    },[page,limit,sort,filter])
    return {data, error, loading}
}

export default useInvoice;