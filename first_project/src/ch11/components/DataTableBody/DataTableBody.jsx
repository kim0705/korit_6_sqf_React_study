import { useEffect, useRef, useState } from "react";
import "./style.css";

function DataTableBody({ mode, setMode, products, setProducts, isDeleting, setDeleting, setEditProductId }) {
    const [viewProducts, setViewProducts] = useState([]);
    const [checkedAll, setCheckedAll] = useState(false);

    useEffect(() => {
        if (mode === 0) {
            resetViewProducts();
            setCheckedAll(false);
        }
    }, [products, mode]);

    useEffect(() => {
        const checkStates = viewProducts.map(product => product.isChecked);  // product의 isChecked 속성만 배열로 만들어서 checkStates에 저장
        if (checkStates.includes(false)) {
            setCheckedAll(false);
        } else {
            setCheckedAll(true);
        }
    }, [viewProducts]);

    useEffect(() => {
        if (isDeleting) {
            setProducts([...viewProducts
                .filter(viewProduct => viewProduct.isChecked === false)
                .map(viewProduct => {
                    const { isChecked, ...product } = viewProduct; // product는 isChecked속성을 제외한 나머지 데이터를 갖고 있음
                    return product;
                })
            ]);
            setMode(0);
            setDeleting(false);
        }
    }, [isDeleting]);

    useEffect(() => {
        if (mode === 2) {
            const [selectedProduct] = viewProducts.filter(product => product.isChecked); // check가 되어있는 상품 비구조 할당

            setEditProductId(!selectedProduct ? 0 : selectedProduct.id);
        }
    }, [viewProducts]); // 체크의 상태 변화

    const resetViewProducts = () => {
        setViewProducts([...products.map(product => ({ ...product, isChecked: false }))]); // 화살표 뒤에 ()는 값, {}는 함수
    }

    const handleCheckedAllChange = (e) => {
        setCheckedAll(checked => {
            if (!checked) {
                setViewProducts([...products.map(product => ({ ...product, isChecked: true }))]);
            } else {
                resetViewProducts();
            }
            return !checked;
        });
    }

    const handleCheckedChange = (e) => {
        if (mode === 2) {
            setViewProducts(viewProducts => {
                return [...viewProducts.map(product => {
                    if (product.id === parseInt(e.target.value)) {
                        return {
                            ...product,
                            isChecked: !product.isChecked
                        }
                    }
                    return {
                        ...product,
                        isChecked: false
                    }
                })]
            });
        }
        if (mode === 3) {
            setViewProducts(viewProducts => {
                return [...viewProducts.map(product => {
                    if (product.id === parseInt(e.target.value)) {
                        return {
                            ...product,
                            isChecked: !product.isChecked
                        }
                    }
                    return product;
                })]
            });
        }
    }

    return (
        <div className="table-body">
            <table>
                <thead>
                    <tr>
                        <th>
                            <input
                                type="checkbox"
                                disabled={mode !== 3}
                                onChange={handleCheckedAllChange}
                                checked={checkedAll}
                            />
                        </th>
                        <th>상품코드</th>
                        <th>상품명</th>
                        <th>사이즈</th>
                        <th>색상</th>
                        <th>가격</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        viewProducts.map(product => (
                            <tr key={product.id}>
                                <th>
                                    <input
                                        type="checkbox"
                                        disabled={mode === 0 || mode === 1}
                                        checked={product.isChecked}
                                        onChange={handleCheckedChange}
                                        value={product.id}
                                    /></th>
                                <td>{product.id}</td>
                                <td>{product.productName}</td>
                                <td>{product.size}</td>
                                <td>{product.color}</td>
                                <td>{product.price}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default DataTableBody;