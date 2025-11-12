import useInvoice from "../../hooks/useInvoice";


const InvoicesList = () => {
    const {data, error, loading} = useInvoice({})
    const limit = 5


    if(loading) return (<p>Loading...</p>)
    if(error) return (<p>{error}</p>)
    console.log('data',data?.data[0].id)






    return (

        <div >

            {data && data.data.map((invoice) => (
                <div key={invoice.id}>
                    <span>{invoice.id}</span>
                    <span>{invoice.invoice_number}</span>

                </div>

            ))}


        </div>
    )
}
export default InvoicesList