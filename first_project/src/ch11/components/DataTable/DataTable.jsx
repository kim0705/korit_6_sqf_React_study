import { useEffect, useState } from "react";
import DataTableBody from "../DataTableBody/DataTableBody";
import DataTableHeader from "../DataTableHeader/DataTableHeader";
import "./style.css";
import { SAMPLE_PRODUCTS } from "../../constants/sampleProducts";


function DataTable() {
    const [isLoad, setLoad] = useState(false);
    const [mode, setMode] = useState(0); // 0이면 조회, 1이면 추가, 2면 수정, 3이면 삭제
    const [products, setProducts] = useState([...SAMPLE_PRODUCTS]);
    const [isDeleting, setDeleting] = useState(false);
    const [editProductItd, setEditProductId] = useState(0); // Id는 1부터, 0이면 없는 상태

    useEffect(() => {
        const lsProducts = localStorage.getItem("products");
        setProducts(!lsProducts ? [] : JSON.parse(lsProducts));
        setLoad(true);
    }, []);

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    return (
        <div className="table-main-container">
            <DataTableHeader
                mode={mode}
                setMode={setMode}
                products={products}
                setProducts={setProducts}
                setDeleting={setDeleting}
                editProductItd={editProductItd}
            />
            <DataTableBody
                mode={mode}
                setMode={setMode}
                products={products}
                setProducts={setProducts}
                isDeleting={isDeleting}
                setDeleting={setDeleting}
                setEditProductId={setEditProductId}
            />
        </div>
    );
}

export default DataTable;