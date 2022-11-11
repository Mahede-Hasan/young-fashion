import { useEffect } from "react"
import { useState } from "react"

const useProducts =()=>{
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(12)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setProducts(data)
            })
    }, [size, page])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(result => {
                const count = result.length;
                const pages = Math.ceil(count / size);
                setPageCount(pages)
            })
    }, [size])
    return [products, setProducts, loading, pageCount, page, setPage, setSize]
}

export default useProducts;